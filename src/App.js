import './App.css'
import React, { useEffect, useState } from 'react'
import Portfolio from './components/Portfolio';
import PreLoader from './components/PreLoader';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
  })
  return (
    <div className="app">
      {isLoading ? <PreLoader></PreLoader> : <Portfolio></Portfolio>}
    </div>
  );
}

export default App;
