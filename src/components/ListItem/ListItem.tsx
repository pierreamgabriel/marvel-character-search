import React from 'react';
import {MainContainer, Avatar, HeroName, ItemProps} from './ListItemStyles';

const ListItem = (props: ItemProps) => {
  return (
    <MainContainer>
      <Avatar
        source={{
          uri: props.imageUrl,
        }}
      />
      <HeroName>{props.name}</HeroName>
    </MainContainer>
  );
};

export default ListItem;
