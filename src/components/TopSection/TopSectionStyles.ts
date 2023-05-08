import styled, {css} from 'styled-components/native';

export interface TopSectionProps {
  items: {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
  cloneItems: TopSectionProps['items'];
  setItems: React.Dispatch<React.SetStateAction<TopSectionProps['items']>>;
}
export const TopContainer = styled.View`
  padding-vertical: 12px;
  padding-horizontal: 34px;
  background-color: #ffffff;
`;

export const MainTitleContainer = styled.View`
  flex-direction: row;
`;

export const Underline = styled.View`
  height: 2px;
  width: 63px;
  background-color: #d42026;
  margin-top: 4px;
`;
export const Title = styled.Text<{
  font?: 'light' | 'black';
  marginTop?: string;
}>`
  font-family: ${({font}) => {
    if (font === 'light') {
      return 'Roboto-Light';
    } else if (font === 'black') {
      return 'Roboto-Black';
    } else {
      return 'Roboto-Regular';
    }
  }};
  color: #d42026;
  font-size: 16px;
  line-height: 19px;
  ${({marginTop}) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  height: 31px;
  border-radius: 4px;
  border-color: #d8d8d8;
  border-width: 2px;
`;

export const TextInput = styled.TextInput.attrs(() => ({
  paddingVertical: 0,
}))``;
