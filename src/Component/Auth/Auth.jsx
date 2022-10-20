
import React from 'react';
import 'antd/dist/antd.css';
import FormPage from './Form';
import style from "./Auth.module.scss"

const App = () => {

  return ( 
    <div className={style.AuthWrapper}>
      <div className={style.Auth}>
        
      <FormPage />
      </div>
    </div>
  
  );
};
export default App;