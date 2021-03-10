import React, { useState } from 'react';
import '../css/Image.css';

var x=""
const Saitama = () =>{
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
        <div className="Saitama">
            <div>
               <div className="overlay">
               </div> 
            </div>
        </div>
        <div className='content-head'>
            <h1>One Punch Man</h1>
        </div>
        <br></br>
        <div className='about col-8'>
            <p>
                <span><strong>IMBD Rating 8.9/10</strong> </span>💙💙💙💙💙💙💙💙💙❤<br></br><br></br>
                One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. 
                It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy 
                opponent after growing bored by a lack of challenge due to his overwhelming strength. ONE wrote the original webcomic 
                version in early 2009.
            </p><br></br><p>
            A digital manga remake began publication on Shueisha's Tonari no Young Jump website in June 2012. The manga is illustrated by
             Yusuke Murata, and its chapters are periodically compiled and published into individual tankōbon volumes. As of January 2021,
              23 volumes have been released. In North America, Viz Media has licensed the remake manga for English language release and was
               serialized in its Weekly Shonen Jump digital magazine.
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

export default Saitama;