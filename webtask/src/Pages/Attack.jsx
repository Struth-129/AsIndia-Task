import React,{useState} from 'react';
import att from '../images/att.png';
import '../css/Image.css';

var x="";
const Attack = () =>{
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
        <header>
            <div>
               <div className="overlay">
               </div> 
            </div>
        </header>
        <div className='content-head'>
            <h1>Attack On Titans</h1>
        </div>
        <br></br>
        <div className='about col-8'>
            <p>
                <span><strong>IMBD Rating 8.9/10</strong> </span>💙💙💙💙💙💙💙💙💙❤<br></br><br></br>
                Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Attack Titan") is a Japanese manga series written and illustrated 
                by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic 
                man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the 
                destruction of his hometown and the death of his mother. Attack on Titan has been serialized in Kodansha's monthly Bessatsu Shōnen Magazine 
                since September 2009 and collected into 33 tankōbon volumes as of January 2021.
            </p><br></br><p>
                An anime television series adapting the manga was produced by Wit Studio (seasons 1–3) and MAPPA (season 4). A 25-episode first season was 
                broadcast from April to September 2013, followed by a 12-episode second season broadcast from April to June 2017. A 22-episode third season 
                was broadcast in two parts, with the first 12 episodes airing from July to October 2018 and the last 10 episodes airing from April to July 2019.
                 A fourth and final season premiered in December 2020.

                Attack on Titan has become a critical and commercial success. As of December 2019, the manga has over 100 million tankōbon copies in print 
                worldwide, making it one of the best-selling manga series of all time. It has won several awards, including the Kodansha Manga Award, 
                the Attilio Micheluzzi Award, and Harvey Award.
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

export default Attack;