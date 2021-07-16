import { getPictures } from 'lib/api/sample';

function App() {
  const handleData = async () => {
    console.log('나는 바보입니다');
    const data = await getPictures();
    console.log(data);
  };

  return (
    <>
      <button onClick={handleData}>버튼입니다</button>
    </>
  );
}

export default App;
