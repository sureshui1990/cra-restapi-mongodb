import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App =  () => {

  const [age, setAge] = useState(10);
  const [data, setData] = useState(null);

  useEffect( () =>{
    
    const fetchData = async () => {
      const result = await axios('http://localhost:4949/');
      setData(result.data);
      console.log('object',result.data);
    }
    fetchData();

  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
   
        <p><button type="button" onClick={()=>setAge(age + 1)}>Age Change</button></p>
        <p>
          Age: <code>{age}</code>
        </p>
        <h6>{data}</h6>
        <div>
          
       {/* <ul> {data&&data.map(user=> {
         return <li key={user.name}>
           Name: {user.name}
           </li>
        })}
        </ul> */}
        </div>
        
      </header>
    </div>
  );
}

export default App;
