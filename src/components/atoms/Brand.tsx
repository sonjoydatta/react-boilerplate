import { Image, ImageProps } from 'antd';
import BrandImage from 'assets/images/logo.svg';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type BrandProps = {
  to?: string;
} & ImageProps;

export const Brand: FC<BrandProps> = ({ to: slug, ...rest }) => {
  if (slug) {
    return (
      <Link to={slug}>
        <Image src={BrandImage} preview={false} {...rest} />
      </Link>
    );
  }

  return <Image src={BrandImage} preview={false} {...rest} />;
};

Brand.defaultProps = {
  width: '120px',
};
