import "./styles.css";
import React, { useState } from "react";
const App = () => {
  const[name,setName]=useState("");
  const [fullName, setFullname]=useState("");
  const[pass,setPass]=useState("")
  const[email,setEmail]=useState("")
  const [fullEmail, setFullemail]=useState("");
  const[number,setNumber]=useState("");
  const [fullPhone, setFullphone]=useState("");
const inputevent=(event)=>{
setName(event.target.value);
};
const inputeventtwo=(event)=>{
  setPass(event.target.value);
  };
const inputeventthree=(event)=>{
setEmail(event.target.value);
}
const inputeventfour=(event)=>{
  setNumber(event.target.value);
}

const onSubmits=(event)=>{
  event.preventDefault();
setFullname( name + " " + pass);
setFullemail(email);
setFullphone(number);
alert("Form submitted");


}
  return (
    <>
    <div className="main_div">
      <form onSubmit={onSubmits}>
      <div>
        <h1> Hello {fullName}</h1>
        <h5 style={{backgroundColor:"transparent"} }>{fullEmail}</h5>
        <h6 style={{backgroundColor:"transparent"} }> {fullPhone} </h6>
        <input type="text" placeholder="Enter your first name" onChange={inputevent} value={name} style={{width:"200%"}} />
        <input type="text" placeholder="Enter your last name" onChange={inputeventtwo} value={pass}  style={{width:"200%"}} />
        <input type="text" placeholder="Enter your email" onChange={inputeventthree} value={email} autoComplet='off' style={{width:"200%"}} />
        <input type="number" placeholder="Enter your contact" onChange={inputeventfour} value={number}  style={{width:"200%"}} />
        <button type="submit"> submit</button>
      </div>
</form>
      </div>
    </>
  );
};
export default App;
