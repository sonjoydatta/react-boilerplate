import { useLang } from '@/libs/hooks';
import { languageOption } from '@/utils/constants';
import { Select } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const LangPicker: FC = () => {
  const { t } = useTranslation();
  const { language, handleChange } = useLang();

  return (
    <Wrapper>
      <span>{t('Choose Language')}</span>
      <Select defaultValue={language} style={{ width: 120 }} onChange={handleChange}>
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

  span {
    padding-right: 0.625rem;
  }
`;
