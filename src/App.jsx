import { useState } from 'react'
import $ from "jquery";
import './App.css'
import Button from './components/Button'

function App() {
  const [xo,setXO] = useState(false);
  const [x,setX] = useState([]);
  const [o,setO] = useState([]);
  const [gameEnd,setGameEnd] = useState(false)

  const change = (id) =>{
    
    if(xo){
      var data = x;
      data.push(id);
      setX(data);
      check(data);
    }else{
      var data = o;
      data.push(id);
      setO(data);
      check(data);
      
    }
    setXO(!xo)
  }
  const check = (data) =>{
    if((x.length +o.length)===9){
      setGameEnd(true)
    }
    console.log(data)
    if(data.includes(1) && data.includes(2) && data.includes(3)){
      setGameEnd(true);
      change_color(1,2,3);
      return;
    }
    if(data.includes(1) && data.includes(4) && data.includes(7)){
      setGameEnd(true);
      change_color(1,4,7);
      return;
    }
    if(data.includes(1) && data.includes(5) && data.includes(9)){
      setGameEnd(true);
      change_color(1,5,9);
      return;
    }
    if(data.includes(2) && data.includes(5) && data.includes(8)){
      setGameEnd(true);
      change_color(2,5,8);
      return;
    }
    if(data.includes(3) && data.includes(5) && data.includes(7)){
      setGameEnd(true);
      change_color(3,5,7);
      return;
    }
    if(data.includes(3) && data.includes(6) && data.includes(9)){
      setGameEnd(true);
      change_color(3,6,9);
      return;
    }
    if(data.includes(4) && data.includes(5) && data.includes(6)){
      setGameEnd(true);
      change_color(4,5,6);
      return;
    }
    if(data.includes(7) && data.includes(8) && data.includes(9)){
      setGameEnd(true);
      change_color(7,8,9);
      return;
    }


  }
  const restart = () =>{
    setGameEnd(false);
    setX([]);
    setO([]);
    for(var i = 1 ; i < 10 ; i++ ){
      $(".s"+i).css("color","white")
      $(".s"+i).css("background-color","white")
    }
    
    
  }
  const change_color = (e1,e2,e3)=>{
    $(".s"+e1).css("background-color","#477a58").css("color","white");
    $(".s"+e2).css("background-color","#477a58").css("color","white");
    $(".s"+e3).css("background-color","#477a58").css("color","white");
    
  }

  return (
    <div className="App h-screen p-8 bg-gray-400">
      <div className='grid grid-cols-3 grid-cols-3 gap-4  w-full h-full'>
        <Button xo={xo} change={change} id={1} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={2} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={3} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={4} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={5} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={6} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={7} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={8} end={gameEnd} x={x} o={o}/>
        <Button xo={xo} change={change} id={9} end={gameEnd} x={x} o={o}/>
      </div>
      {gameEnd?<div className='flex absolute items-center flex-col justify-center gap-10 w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
        <h1 className='text-white bg-purple-700 py-5 px-3 pl-0 rounded-xl'><span className='text-sky-800 bg-white p-5 rounded-lg'>{((x.length +o.length)===9)?"Draw Game":`${xo?"O":"X"}`}</span> {!((x.length +o.length)===9)&&<>Player won the game</>}</h1>
        <button onClick={restart} className='bg-purple-700 restart px-8 py-4 text-xl hover:bg-white hover:text-purple-700 transition-all duration-300 rounded-lg text-white shadow-xl'>Restart</button>
      </div>:null}
    </div>
  )
}

export default App
