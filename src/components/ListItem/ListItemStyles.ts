import styled from 'styled-components/native';

export interface ItemProps {
  imageUrl: string;
  name: string;
}

export const MainContainer = styled.View`
  padding-vertical: 18px;
  padding-horizontal: 18px;
  border-color: #d42026;
  border-top-width: 1px;
  border-bottom-width: 1px;
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  margin-right: 25px;
`;

export const Avatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  resize-mode: cover;
  margin-right: 25px;
`;

export const HeroName = styled.Text`
  font-size: 21px;
  color: #4e4e4e;
  font-family: Roboto-Regular;
  line-height: 24px;
  flex: 1;
`;
