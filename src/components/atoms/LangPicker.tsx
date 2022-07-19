import { useLang } from '@/libs/hooks';
import { languageOption } from '@/utils/constants';
import { Select, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const LangPicker: FC = () => {
	const { t } = useTranslation();
	const { language, handleChange } = useLang();

	return (
		<Wrapper className='lang-picker'>
			<Typography.Text>{t('Choose Language')}</Typography.Text>
			<Select defaultValue={language} style={{ width: 110 }} onChange={handleChange}>
				{languageOption &&
					Object.entries(languageOption).map(([key, value]) => (
						<Select.Option key={key} value={key}>
							{value}
						</Select.Option>
					))}
			</Select>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 1rem;

	& > .ant-typography {
		padding-right: 0.625rem;
	}
`;
