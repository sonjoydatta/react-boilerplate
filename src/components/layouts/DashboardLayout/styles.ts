import { hexToRGB } from '@/utils/helpers';
import { Layout } from 'antd';
import styled from 'styled-components';

export const NavItems = styled.ul`
	width: 90%;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
`;

export const NavItem = styled.li`
	display: block;
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	${NavItems} {
		width: calc(100% - 2rem);
		max-height: 0;
		margin-left: 2rem;
		border-left: 1px solid rgb(190, 201, 215);
		overflow: hidden;
		transform: scale(0.95);
		transition: max-height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
			opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

		& > li {
			margin-left: -1px;
		}
	}

	a {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.text};
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem;
		position: relative;
		border-start-end-radius: 20rem;
		border-end-end-radius: 20rem;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			opacity: 0;
			border-right: 3px solid ${({ theme }) => theme.colors.primary};
		}

		.arrow {
			font-size: 0.75rem;
			transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};

			svg path {
				fill: ${({ theme }) => theme.colors.primary};
			}
		}

		&.active {
			font-weight: 600;
			color: ${({ theme }) => theme.colors.primary};
			background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.1)};

			svg path {
				fill: ${({ theme }) => theme.colors.primary};
			}

			&::after {
				opacity: 1;
			}

			.arrow {
				transform: rotate(180deg);
			}

			& ~ ${NavItems} {
				max-height: 20rem;
				margin-top: 0.25rem;
				overflow: inherit;
			}
		}
	}
`;

export const LayoutHeaderWrapper = styled(Layout.Header)`
	padding: 0 1rem;
	background: ${({ theme }) => theme.colors.white};
	z-index: 99;

	.trigger {
		padding: 0 1rem;
		font-size: 1.25rem;
		line-height: 4rem;
		cursor: pointer;
		transition: color 0.3s;
	}

	.lang-picker {
		margin-top: 0;

		& > .ant-typography {
			display: none;
		}
	}

	.ant-dropdown-trigger {
		display: block;
	}
`;

export const LayoutSiderWrapper = styled(Layout.Sider)`
	background: ${({ theme }) => theme.colors.white};

	.brand-wrapper {
		width: 100%;
		padding: 0 0.5rem;
		margin: 1.5rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&.ant-layout-sider-collapsed {
		${NavItem} {
			a {
				grid-template-columns: 1fr;

				.nav-text,
				.arrow,
				& ~ ${NavItems} {
					display: none;
				}
			}
		}
	}
`;
