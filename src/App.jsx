import React, { useState } from 'react';
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Models from './component/Models';
import Cart from './component/Cart';
import Stats from './component/Stats';
import Steps from './component/Steps';
import Pricing from './component/Pricing';
import Footer from './component/Footer';

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}


const modelPromise = getModels()

function App  () {
  const [activeTab, setActiveTab] = useState ("Products");
  const [carts, setcarts] = useState([])

  return (
    <div>
      <NavBar/>

      <Banner/>

      <Stats/>
      
      
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-6 bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full bg-blue-700 w-[104]" aria-label="Products" onClick={()=> setActiveTab("Products")} defaultChecked/>
        <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label={`Cart (${carts.length})`} onClick={()=> setActiveTab("Cart")}/>
        </div>

      {activeTab === "Products" && <Models modelPromise={modelPromise} carts={carts} setcarts={setcarts}/>}

      {activeTab === "Cart" && <Cart carts={carts} setcarts={setcarts}/>}

      <Steps/>

      <Pricing/>

      <Footer/>

    </div>
  );
};

export default App;