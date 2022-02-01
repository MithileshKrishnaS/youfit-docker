import { useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

// var url="http://localhost:8081/";
var url="https://node-youfit.herokuapp.com/"
var details=[];
var list=[];

const Each = (props) => {

    const [datas,getData]=useState([])
    
    React.useEffect(()=>{
        
            fetch(url+'each')
            .then((res)=>res.json())
            .then((json)=> 
            {
                details=json[props.data];
                list=Object.values(details);
                list=list[0];
                var ran=Math.floor(Math.random() * (list.length))-1;
                details=[]
                if(ran>=(list.length-5))
                {
                    ran=ran-5;
                }
                for(let i=0;i<5;i++)
                {
                    details[i]=list[ran++];
                }
                getData(details);
            })   
            .catch(getData("enter a valid url"))
            
    },[])  

    return (
        <div>
            <div className="space"></div>
            <div className="each-header">
                <h1 className="each-h1">{datas[0]?(datas[0].bodyPart):null}</h1>
                <Link to={{pathname:'/youfit' }} style={{ textDecoration: 'none' }}>
                    <button className="each-header-btn">BACK</button>
                </Link>
            </div>
            
            <h2 className="each-h2">Your Five Exercises For a day</h2>
            {/* {datas.map((input,index)=>(
                    <div className="each" key={index}>
                        <img src={input.gifUrl}></img>
                        <p>{input.bodyPart}</p>  
                        <p>advnakejn</p> 
                        {console.log(input)}
                    </div>
                    
            ))}   */}
            <div className="all">
                {(()=>{
                var flexboxes=[];
                for(let i=0;i<datas.length;i++){
                flexboxes.push(
                <div data-testid="originalList" key={i.toString()} className="exercise">
                    <div>
                        <p className="exercise-name">{datas[i].name}</p>
                        <hr></hr>
                        <br></br><br></br>
                        <p className="exercise-eq"><b>Equipment Used</b> : {datas[i].equipment}</p>
                        <p className="exercise-eq"><b>Target</b> : {datas[i].target}</p>
                    </div>
                    <img src={datas[i].gifUrl}></img>
                </div>);
                }
                return flexboxes;
                })()}
            </div>
        </div>
    )
}

export default Each
