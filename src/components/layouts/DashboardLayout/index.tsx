import { withAuth } from '@/components/hoc';
import { Layout } from 'antd';
import { FC, useCallback, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutHeader } from './LayoutHeader';
import { LayoutSider } from './LayoutSider';

const DashboardLayout: FC = withAuth(() => {
	const [isCollapsed, setCollapsed] = useState(false);
	const isCollapsedClone = useRef(isCollapsed);

	const handleToggleCollapsed = () => {
		setCollapsed((prev) => !prev);
	};

	const handleMouseEnter = useCallback(() => {
		isCollapsedClone.current = isCollapsed;

		if (isCollapsed) {
			setCollapsed(false);
		}
	}, [isCollapsed]);

	const handleMouseLeave = useCallback(() => {
		if (isCollapsedClone.current) {
			setCollapsed(true);
		}
	}, []);

	return (
		<Layout hasSider>
			<LayoutSider
				collapsed={isCollapsed}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			/>
			<Layout style={{ height: '100vh' }}>
				<LayoutHeader collapsed={isCollapsed} onToggle={handleToggleCollapsed} />
				<Layout.Content style={{ padding: '1.5rem', overflowX: 'hidden' }}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
});

export default DashboardLayout;
