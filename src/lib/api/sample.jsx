import axios from 'axios';

const apiServer = 'http://ec2-54-180-57-37.ap-northeast-2.compute.amazonaws.com/api/';
const instance = axios.create({
  baseURL: apiServer,
});

export const getDefault = async () => {
  try {
    const data = await instance.get('dachae/getDefaultRecommend');
    console.log(data);
    console.log('[SUCCESS] GET Picutures data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET Pictures data');
    return null;
  }
};

export const getRecommended = async body => {
  try {
    const data = await instance.post('dachae/setUploadAndRecommend/', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
    console.log('[SUCCESS] GET Picutures data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET Pictures data');
    return null;
  }
};
