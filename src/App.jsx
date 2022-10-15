import React from "react";
import { Button } from "antd";
import axios from "axios";
import variable from "./1";
import Post from "./Post";
import Get from "./Get"
import Auth from "./Auth";
import "./App.css";
import "antd/dist/antd.css";
import style from "./App.module.scss"
let testTexs = variable.rezult;


const App = () => {


  return (
   
<div>
  <Auth />
{/* <Get/> */}
</div>
  );
};

export default App;
