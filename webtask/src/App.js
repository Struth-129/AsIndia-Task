import React,{useState} from 'react';
import './css/Image.css';
import {useHistory} from 'react-router-dom';
var x;
var y;
export default function App() {
  var u = "saket";
  let history = useHistory();
  const [input,setState] = useState("");
  const [pass,setpass] = useState("");
  const username = (event)=>{
    x = event.target.value;
    setState(x);
  }
  const password =(event)=>{
    y = event.target.value;
    setpass(y);
    console.log(y);
  }
  const redir = (event) =>{
    console.log(x);
    if(x===u&&y===u){
    history.push('/Movies');}else{
      alert("Wrong Password")
    }
  }
  return (
    <>
        <div className="login-page">
          <div className="overlay">
          </div>
        </div>
        <div className="login-form">
        <h2>Login Here</h2>
            <form>
              <input type="text" name="username" required value={input} onChange={username} placeholder="Username"></input>
              <input type="password" name="password" required value={pass} onChange={password} placeholder="Password"></input>
            </form>
            <button onClick={redir}>Submit</button>
        </div>
        
    </>
  )
}

