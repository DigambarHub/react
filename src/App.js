
import { useState } from 'react';
import './App.css';
import ToDolist from './ToDolist';


function App() {

  const [data,setdata]=useState('');
  const [Item, setItem]=useState([]);

  const inputData =(e)=>{
    setdata (e.target.value)
  }
  const listofItem=()=>{
    setItem((oldData)=>{
      return [...oldData,data]
    })
    setdata('')
  };

  const DeletItem=(id)=>{
    console.log("delet")
    setItem((oldData)=>{
      return oldData.filter((arryee,index)=>{
        return index !== id;
      })
    });
  }


  return (
    <div className='App'>
      <div className='main'>
        <br/>
        <h1> Todo List </h1>
        <br/>
        <input type="text" placeholder='Add list' onChange={inputData} value={data}></input>
        <button onClick={listofItem}>+</button>
        
        <ol>
          
          {
            Item.map((ival,index)=>{
              return <ToDolist 
              text={ival}
              onSelect={DeletItem}
              key={index}
              id={index}
              />;
            })
          }
        </ol>
      </div>    
    </div>
  );
}

export default App;
