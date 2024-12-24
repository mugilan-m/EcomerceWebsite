import React,{useState} from "react";

function Register()
{
   const [name,SetName]=useState("")


function submited(event)
{
      SetName(event.target.value);
      console.log(event.target.value);
}
    return (
        <div>
          <form>
              <h1>Hello {name}</h1>
              <input type="text" onChange={submited} value={name} />
              <button >submit</button>
          </form>
        </div>
    )
}
export default Register;