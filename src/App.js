import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tips, setTips]=useState("")

  useEffect(()=>{
    getTips();
  },[])
  const getTips = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity/ `);
    const data = await response.json()
    console.log(data.activity)
    setTips(data.activity)
  }

 return(
  <div className='app' >

<div className='container'>
  <h1> Fun Bucket List Ideas</h1>
</div>

<div className='container'>
  <p className='about'> A bucket list is a list of experiences one wants to have before they die. It comes from the phrase “kick the bucket”, which means to die. So, it’s a list of things we want to do before we kick the bucket. </p>
</div>

<div className='container'>
    <p className='tips'>{tips}</p>
 </div>
<div className='container'>
  <button onClick={getTips}>Let's do some fun!</button>
</div>
  </div>
 )
  
}

export default App;
