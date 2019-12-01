import React from 'react';
// import axios from 'axios';
import './App.css';
import LoginContainer from './containers/login/login.container';


const App =  () => {

  // const [age, setAge] = useState(100);
  // const [data, setData] = useState(null);

  // useEffect( () =>{
    
  //   const fetchData = async () => {
  //     const result = await axios('http://localhost:4949/');
  //     setData(result.data);
  //     console.log('object',result.data);
  //   }
  //   fetchData();

  // }, []);

  
  return (
    <div className="App">
      <header className="App-header">

        <LoginContainer />
        
      </header>
    </div>
  );
}

export default App;
