import { Image } from 'antd';
import BrandImage from 'logo.svg';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const Brand: FC<BrandProps> = ({ to: slug, ...rest }) => {
  if (slug) {
    return (
      <Link to={slug} {...rest}>
        <Image src={BrandImage} preview={false} width={120} />
      </Link>
    );
  }

  return <Image src={BrandImage} preview={false} width={120} />;
};

type BrandProps = Partial<LinkProps>;
