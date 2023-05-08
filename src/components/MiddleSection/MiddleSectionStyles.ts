import styled, {css} from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export interface ItemsProps {
  items: {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }[];
}

export interface ChangePageProps {
  type?: 'right' | 'left';
  index?: number;
}

export const MainContainer = styled.View`
  background-color: #d42026;
  height: 100%;
`;

export const TopContainer = styled.View`
  padding-left: 100px;
  justify-content: center;
  height: 37px;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: Roboto-Regular;
  line-height: 19px;
`;

export const BottomContainer = styled.View`
  margin-top: 1px;
  background-color: #ffffff;
  padding-top: 18px;
  padding-bottom: 24px;
  flex-basis: auto;
`;

export const Triangle = styled(FontAwesomeIcon)<{type: 'left' | 'right'}>`
  ${({type}) =>
    type === 'left' &&
    css`
      margin-right: 30px;
      transform: rotate(180deg);
    `}
  ${({type}) =>
    type === 'right' &&
    css`
      margin-left: 30px;
    `}
`;

export const Circle = styled.Pressable<{active: boolean; last: boolean}>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border-color: #d42026;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  ${({active}) =>
    active &&
    css`
      background-color: #d42026;
    `}
  ${({last}) =>
    !last &&
    css`
      margin-right: 20px;
    `}
`;

export const NumberText = styled.Text<{active: boolean}>`
  color: #d42026;
  font-size: 21px;
  font-family: Roboto-Regular;
  line-height: 24px;
  ${({active}) =>
    active &&
    css`
      color: #ffffff;
    `}
`;

export const PaginationContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
