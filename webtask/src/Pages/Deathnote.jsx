import React,{useState} from 'react';
import '../css/Image.css';

var x=""
const Deathnote = () =>{
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
        <div className="Death">
            <div>
               <div className="overlay">
               </div> 
            </div>
        </div>
        <div className='content-head'>
            <h1>Death-Note</h1>
        </div>
        <br></br>
        <div className='about col-8'>
            <p>
                <span><strong>IMBD Rating 8.9/10</strong> </span>πππππππππβ€<br></br><br></br>
                Death Note (stylized as DEATH NOTE) is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata.
                 The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the "Death Note", 
                 which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in 
                 its pages
            </p><br></br><p>
            The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom 
            he deems morally unworthy of life to change the world into a utopian society without crime, using the alias of a god-like vigilante
             named "Kira" and the subsequent efforts of an elite task-force of law enforcement officers, consisting of members of the Japanese 
             police force, led by L, an enigmatic international detective whose past is shrouded in mystery, to apprehend him and end his reign
              of terror. Death Note ran in Shueisha's manga magazine Weekly ShΕnen Jump from December 2003 to May 2006. Its 108 chapters were 
              collected in 12 tankΕbon volumes
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

export default Deathnote;