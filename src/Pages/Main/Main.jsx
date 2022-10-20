import React from "react";
import {  Row, Progress,Button,Typography } from "antd";
import style from "./Main.module.scss";






const textP ='"Собираетесь ли вы иметь в семье двух детей или менее, даже если состояние вашего здоровья и уровень доходов позволяют иметь больше? '
const Main = () => {
  return (
    <div className={style.CardWrapper}>
      <div className={style.Cards}>
        <Row>
          <div className={style.Card}>
            <div className={style.CardItem}>
              <h3>Минут до окончания теста:</h3>
              <Progress format={percent => `${percent} `}  status="active" strokeWidth={11} strokeColor={{"0%":'#A7D269',"50%":'#A7D269',"100%":'#9add30'}} type="circle" percent={65}></Progress>
            </div>
            <div className={style.CardItem}>
              <p> Вопрос:</p>

              <span>1 / 200</span>
            </div>
          </div>

          <div className={style.Card}>
            <div className={style.CardItem}>Tест №1 «Оксфордский тест анализа личности»</div>
            <div className={style.CardItem}>

            <Typography.Title level={3} strong={true}>{textP}</Typography.Title>
            </div>
            <div className={style.CardItem}>
              <div className={style.btnWrapper}>
              <Button className={style.btn} >Да</Button>
<Button className={style.btn} >Возможно</Button>
<Button className={style.btn} >Нет</Button>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Main;
