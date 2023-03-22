import React,{useState,useEffect} from 'react';
import $ from "jquery"

export default function Button({xo,change,id,end,x,o}) {
    const [text,setText] = useState("");
    const click_event = () =>{
        if(!text){
            if(xo){
                setText("X");
                change(id);
                $(".s"+id).css("color","black");
            }else{
                setText("O");
                change(id);
                $(".s"+id).css("color","black");
            }
        }
    }
    useEffect(()=>{
        if(!end){
            setText("")
        }
    },[end])
    
    return (
        <button onClick={click_event} className={`bg-white text-white all-buttons button shadow-xl s${id} rounded-lg text-4xl `}>{text || "x"}</button>
    )
}
