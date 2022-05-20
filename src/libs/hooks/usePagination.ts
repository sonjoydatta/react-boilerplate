import { useCallback, useState } from 'react';

interface ReturnType {
	pages: (string | number)[];
	activePage: number;
	prevPage: number | null;
	nextPage: number | null;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	handlePageClick: (page: number) => void;
}

export const usePagination = (currentPage: number, totalPages: number): ReturnType => {
	const getPages = (current: number, last: number): ReturnType['pages'] => {
		const delta = 2;
		const left = current - delta;
		const right = current + delta + 1;
		const range: number[] = [];
		const rangeWithDots: ReturnType['pages'] = [];
		let l;

		for (let i = 1; i <= last; i++) {
			if (i == 1 || i == last || (i >= left && i < right)) {
				range.push(i);
			}
		}

		for (const i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	};

	const initialPages = getPages(currentPage, totalPages);

	const [pages, setPages] = useState<ReturnType['pages']>(initialPages);
	const [current, setCurrent] = useState(currentPage);

	const handlePageClick = useCallback(
		(page: number) => {
			const newPages = getPages(page, totalPages);
			setPages(newPages);
			if (current > 0 && current < totalPages) {
				setCurrent(page);
			}
		},
		[current, totalPages]
	);

	return {
		pages,
		activePage: current,
		prevPage: current > 1 ? current - 1 : null,
		nextPage: current < totalPages ? current + 1 : null,
		hasPrevPage: current > 1,
		hasNextPage: current < totalPages,
		handlePageClick,
	};
};
