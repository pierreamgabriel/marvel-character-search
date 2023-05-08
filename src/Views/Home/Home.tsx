import React, {useEffect, useState} from 'react';
import axios from 'axios';
import md5 from 'js-md5';
import TopSection from '../../components/TopSection/TopSection';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
import {ScrollView} from './HomeStyles';
import {TopSectionProps} from '../../components/TopSection/TopSectionStyles';

const Home = () => {
  const [items, setItems] = useState<TopSectionProps['items']>([]);
  const [cloneItems, setCloneItems] = useState([]);
  const access = [
    '26509429413daa429302e47b0526cea0edbb7a70',
    '5b71ba0d43d800ebe4e24b3fe5c954b2',
  ];
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + access[0] + access[1]);
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${
    access[1]
  }&hash=${hash.hex()}`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Accept-Encoding': 'gzip',
        },
      })
      .then(res => {
        setItems(res.data.data.results);
        setCloneItems(res.data.data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <TopSection items={items} cloneItems={cloneItems} setItems={setItems} />
      <MiddleSection items={items} />
    </ScrollView>
  );
};

export default Home;
