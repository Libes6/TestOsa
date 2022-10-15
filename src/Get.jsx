import React from "react";
import { Button } from "antd";
import axios from "axios";
import variable from "./1";
import Post from "./Post";
import {Route,Routes} from "react-router-dom"
import "./App.css";
import "antd/dist/antd.css";
import style from "./App.module.scss"
let testTexs = variable.rezult;



const max = [];

const Get = () => {
  const [count, setCount] = React.useState(0);
  const [show, SetShow] = React.useState(false);
  const [testTex, SetAnswer] = React.useState([]);
  const [Ansver, SetAnsver] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const ser = "http://10.0.12.196:3001/test/3/OSA";
    axios.get(ser).then((res) => {
      SetAnswer(res.data);
      setIsLoading(false);
    });
  }, []);

  // testTex.map((itm)=>max.push(itm))
  let copy = Object.assign([], testTex);

  const answers = (data) => {
    copy[count].Ansver = data;

    // const next = count+1
    // if(next<testTex.length){
    //   setCount(next)
    // }
    // else{
    //   SetShow(true)

    // }
    count + 1 < 200 ? setCount(count + 1) : SetShow(true);
    delete copy[count].Text;
    console.log(copy);
  };
  return (
    <div className={style.root}>
      {show ? (
        <Post data={copy} />
      ) : (
        <div className={style.wrapper}>
          <div className={style.test}>
            <span>
              {count + 1} / {200}
            </span>
            <p>{isLoading ? "Вопросы не загрузились" : copy[count].Text}</p>
          </div>
          <div className={style.wrapper_btn}>
             
              <Button 
              type="primary"
                onClick={() => {
                  answers("Y", count);
                }}
              >
                Да
              </Button>
              <Button
              type="primary"
                onClick={() => {
                  answers("M", count);
                }}
              >
                Возможно
              </Button>
              <Button
              type="primary"
                onClick={() => {
                  answers("N", count);
                }}
              >
                Нет
              </Button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Get;
