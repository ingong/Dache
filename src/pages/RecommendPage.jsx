import React, { useEffect } from 'react';
import { getPictures } from 'lib/api/sample';

const handleData = async () => {
  const data = await getPictures();
  console.log(data);
};

const RecommendPage = () => {
  useEffect(() => {
    handleData();
  }, []);
  return <div></div>;
};

export default RecommendPage;
