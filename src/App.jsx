
import React from 'react'
import axios from 'axios';
import variable from "./1";
import Post from "./Post"
let testTexs = variable.rezult;
// testTex.length =10;
const max = []

const App = () => {
  const [count, setCount] = React.useState(0);
  const [show, SetShow] = React.useState(false);
const [testTex,SetAnswer]=React.useState([])
const [Ansver,SetAnsver]=React.useState([])
const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const ser = "http://10.0.12.196:3001/test/3";
    axios.get(ser).then((res) => {
      SetAnswer(res.data)
      setIsLoading(false)
    
  });
}, []);


  // testTex.map((itm)=>max.push(itm))
  let copy =Object.assign([],testTex)




const answers =(data)=>{
  copy[count].Ansver=data

  // const next = count+1
  // if(next<testTex.length){
  //   setCount(next)
  // }
  // else{
  //   SetShow(true)
    
  // }
  count+1<200? setCount(count+1):SetShow(true);delete copy[count].Text
  console.log(copy) 
}
  return (
   
    <div>
      {show 
      ? <Post data={copy}/>
      :<div className="test">
      <span>{count+1}/{200}</span>
      <p className="text">
       {isLoading ?"Вопросы не загрузились" : copy[count].Text}
      </p>
      <button onClick={()=>{
        answers("Y",count);
       
      }}>Да</button>
      <button onClick={()=>{
        answers("M",count);
       
      }}>МБ</button>
      <button onClick={()=>{
        answers("N",count);
       
      }}>Нет</button>
    </div>
      
      }
      
       
    </div>
  )
}

export default App