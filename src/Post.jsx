import React from 'react'
import axios from 'axios';
import otvetmax from "./2"
import ReactDOM from 'react-dom';
import {  
    XAxis,
    YAxis,
    Area,
    Line,
    LineChart,
    Tooltip,
    CartesianGrid,
    Legend,
  } from "recharts"

const Post = () => {
    const[otv,setOtv] =React.useState([])
    React.useEffect(() => {
        const ser = "http://10.0.12.196:3001/test/3/rezult";
        axios.post(ser,otvetmax.rezult).then((res) => {
            setOtv(res.data)
          console.log(otv)
          console.log(res)
        });
      }, []);
    // console.log(data)
  return (
    <div>
      {otv.map((obj)=><li key={obj.TypeOfQuestions}>{obj.Ball}</li>)}
      <LineChart
  width={800}
  height={800}
  data={otv}
  margin={{ top: 5, right: 2, left: 5, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <Legend/>
  <CartesianGrid stroke="№6161ff" />
  <Line type="linear" dataKey="TypeOfQuestions" stroke="#ff7300" yAxisId={0} />
  <Line type="linear" dataKey="Ball" stroke="#000" yAxisId={4} />
</LineChart>
    </div>
  )
}

export default Post
