import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
import {DatePicker} from "antd"



const Auth = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [midleName,  setMidleName] = React.useState("");
  const [date,  setdate] = React.useState("");

  const [user, setUser] = React.useState(null);
  const API_URL = "http://localhost:300/login";

  const { mutate, isLoading } = useMutation(
    "login",
    () =>
      axios.post(
        `${API_URL}`,
        { name,lastName,midleName,date },
        {
          headers: { "Content-Type": "application/json" },
        }
      ),
    {
      onSuccess: ({ data }) => {
        setUser(data);
      },
    }
  );

  return (
    <div className="wrapper">
    
        <div>
          <input
            type="text"
            placeholder="Фамилия"
           value={lastName}
           onChange={(e)=>setLastName(e.target.value)}
            
          />
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            
          />
           <input
            type="text"
            placeholder="Отчество"
            value={midleName}
            onChange={(e)=>setMidleName(e.target.value)}
           
          />
          <DatePicker/>
          <button onClick={() => mutate()} >Вход</button>
        </div>
      <div>
<span>
         
        </span>
        <button>Выход</button>
        </div>
    
    </div>
  );
};

export default Auth;
