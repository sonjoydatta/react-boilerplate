import { Brand } from '@/components/atoms';
import { FC, HTMLAttributes } from 'react';
import { LayoutSiderWrapper } from '../styles';
import { MenuItems } from './MenuItems';

type LayoutSiderProps = {
	collapsed?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const LayoutSider: FC<LayoutSiderProps> = (props) => (
	<LayoutSiderWrapper {...props} width={240} className='shadow'>
		<div className='brand-wrapper'>
			<Brand />
		</div>
		<MenuItems />
	</LayoutSiderWrapper>
);
