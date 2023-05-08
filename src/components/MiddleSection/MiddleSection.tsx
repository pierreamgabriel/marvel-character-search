import React, {useEffect, useRef, useState} from 'react';
import {
  MainContainer,
  TopContainer,
  Text,
  BottomContainer,
  Triangle,
  Circle,
  NumberText,
  PaginationContainer,
  ItemsProps,
  ChangePageProps,
} from './MiddleSectionStyles';
import ListItem from '../ListItem/ListItem';
import {FlatList, StyleSheet, Pressable} from 'react-native';
import {faPlay} from '@fortawesome/free-solid-svg-icons/faPlay';

const MiddleSection = (props: ItemsProps) => {
  const [interval, setInterval] = useState({start: 0, end: 4});
  const indexLimit = props.items
    ? Array.from(Array(Math.ceil(props.items.length / 4)).keys())
    : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const changePage = ({type, index}: ChangePageProps) => {
    if (!type) {
      if (typeof index === 'number' && activeIndex - 1 !== index) {
        const factor = activeIndex - index;
        setInterval({
          start: interval.start - 4 * factor,
          end: interval.end - 4 * factor,
        });
        setActiveIndex(index);
      } else {
        setInterval({start: interval.start - 4, end: interval.end - 4});
        setActiveIndex(index || 0);
      }
    }
    if (
      type === 'right' &&
      typeof indexLimit[activeIndex + 1] !== 'undefined'
    ) {
      setInterval({start: interval.start + 4, end: interval.end + 4});
      setActiveIndex(activeIndex + 1);
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: activeIndex + 1,
      });
    }
    if (type === 'left' && typeof indexLimit[activeIndex - 1] !== 'undefined') {
      setInterval({start: interval.start - 4, end: interval.end - 4});
      setActiveIndex(activeIndex - 1);
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: activeIndex - 1,
      });
    }
  };

  useEffect(() => {
    if (props.items.length > 0) {
      setInterval({start: 0, end: 4});
      setActiveIndex(0);
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: 0,
      });
    }
  }, [props.items]);
  return (
    <MainContainer>
      <TopContainer>
        <Text>Name</Text>
      </TopContainer>
      {props.items &&
        props.items
          .slice(interval.start, interval.end)
          .map(item => (
            <ListItem
              key={item.id}
              name={item.name}
              imageUrl={item.thumbnail.path + '.' + item.thumbnail.extension}
            />
          ))}
      <BottomContainer>
        <PaginationContainer>
          <Pressable onPress={() => changePage({type: 'left'})}>
            <Triangle icon={faPlay} size={24} color="#d42026" type="left" />
          </Pressable>
          <FlatList
            contentContainerStyle={FlatListStyle.contentContainerStyle}
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={indexLimit}
            renderItem={({index}) => {
              const active = index === activeIndex;

              return (
                <Circle
                  key={index}
                  active={active}
                  last={index === indexLimit.length - 1}
                  onPress={() => changePage({index: index})}>
                  <NumberText active={active}>{index + 1}</NumberText>
                </Circle>
              );
            }}
          />
          <Pressable onPress={() => changePage({type: 'right'})}>
            <Triangle icon={faPlay} size={24} color="#d42026" type="right" />
          </Pressable>
        </PaginationContainer>
      </BottomContainer>
    </MainContainer>
  );
};

const FlatListStyle = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
export default MiddleSection;
