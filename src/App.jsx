import React from 'react';
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Models from './component/Models';

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}


const modelPromise = getModels()

const App = () => {
  return (
    <div>
      <NavBar/>

      <Banner/>

      <Models modelPromise={modelPromise}/>
    </div>
  );
};

export default App;