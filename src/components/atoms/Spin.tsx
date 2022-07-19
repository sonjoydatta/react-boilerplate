import { ConfigProvider, Spin as AntSpin } from 'antd';
import classNames from 'classnames';
import { ComponentProps, FC, useContext } from 'react';

type AntSpinProps = ComponentProps<typeof AntSpin>;
export type SpinProps = AntSpinProps & {
	type?: 'window-centre' | 'content-centre';
};

export const Spin: FC<SpinProps> = ({ type, className, ...rest }) => {
	const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
	const prefixCls = getPrefixCls('spin');

	return (
		<AntSpin
			{...rest}
			className={classNames(
				{
					[`${prefixCls}-${type}`]: type,
				},
				className
			)}
		/>
	);
};
