import React, { useEffect } from 'react';
import { getPictures } from 'lib/api/sample';
import { Header } from 'Components';

const handleData = async () => {
  const data = await getPictures();
  console.log(data);
};

const RecommendPage = () => {
  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default RecommendPage;
