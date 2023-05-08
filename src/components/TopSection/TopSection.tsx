import React, {useState, useEffect} from 'react';
import {
  TopContainer,
  Title,
  SearchBarContainer,
  MainTitleContainer,
  TextInput,
  TopSectionProps,
  Underline,
} from './TopSectionStyles';

const TopSection = (props: TopSectionProps) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText && searchText.length > 0) {
      const filteredList = props.cloneItems?.filter(
        prop => prop.name && new RegExp(searchText, 'i').test(prop.name),
      );
      if (filteredList) {
        props.setItems(filteredList);
      } else {
        props.setItems(props.cloneItems);
      }
    } else {
      props.setItems(props.cloneItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <TopContainer>
      <MainTitleContainer>
        <Title font="black">MARVEL </Title>
        <Title font="light">CHARACTER SEARCH</Title>
      </MainTitleContainer>
      <Underline />
      <Title marginTop="12px">Character Name</Title>
      <SearchBarContainer>
        <TextInput onChangeText={val => setSearchText(val)} />
      </SearchBarContainer>
    </TopContainer>
  );
};

export default TopSection;
