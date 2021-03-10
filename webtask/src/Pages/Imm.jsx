import React,{useState} from 'react';
import '../css/Image.css';

var x=""
const Imm = () =>{
    const[cmt,setcmt] = useState("");
    const[cmnt,postt] = useState("");
    const cmntdis=(event)=>{
        x = event.target.value
        setcmt(x)
    }
    const postcmnt=()=>{
        postt("Your Comment : "+x);
    }
    return (
        <>  
        <div className="Imm">
            <div>
               <div className="overlay">
               </div> 
            </div>
        </div>
        <div className='content-head'>
            <h1>Daily life of an Immortal King</h1>
        </div>
        <br></br>
        <div className='about col-8'>
            <p>
                <span><strong>IMBD Rating 8.9/10</strong> </span>💙💙💙💙💙💙💙💙💙❤<br></br><br></br>
                As a cultivation genius who has achieved a new realm every two years since he was a year old, Wang Ling is a near-invincible 
                existence with powers far beyond his control. But now that he's sixteen, he faces his greatest battle yet - Senior High School.
                 With one challenge after another popping up, his plans for a low-key high school life seem further and further away.
            </p><br></br><p>
            The series focuses on Wang Ling, who is near unkillable human being. He is just 16 and wants to enjoy his high school life,
             but it might be too challenging for him to do, because he is so powerful that it is highly possible for him to hide his power. 
             Will Wang Ling enjoy the high school life?
            </p>
            <br></br><br></br><br></br><br></br>
            <h2>Comments</h2><br></br><br></br>
            <input type="text" value={x} placeholder="Enter text here" onChange={cmntdis}></input>
            <button onClick={postcmnt}> POST </button>
            <p> {cmnt}</p>
        </div>
        </>
    );
}

export default Imm;