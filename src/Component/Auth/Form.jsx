import { Button, Checkbox, Form, Input, Row, DatePicker, Radio } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import style from "./Auth.module.scss";

import React from "react";

const FormPage = () => {
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="normal_login"
      className={style.FormPage}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item className={style.FormItem}>
        <h2>Вход</h2>
      </Form.Item>
      <Form.Item
        className={style.FormItem}
        name="lastName"
        rules={[{ required: true, message: "Please input your Фамилию!" }]}
      >
        <Input className={style.Input} placeholder="Фамилия" />
      </Form.Item>

      <Form.Item
        className={style.FormItem}
        name="name"
        rules={[{ required: true, message: "Please input your Имя!" }]}
      >
        <Input className={style.Input} placeholder="Имя" />
      </Form.Item>

      <Form.Item
        className={style.FormItem}
        name="midleName"
        rules={[{ required: true, message: "Please input your Отчетство!" }]}
      >
        <Input className={style.Input} placeholder="Отчество" />
      </Form.Item>
      <Form.Item
        className={style.FormItem}
        name="date"
        rules={[{ required: true, message: "Please input your Отчетство!" }]}
      >
        <DatePicker className={style.Input} />
      </Form.Item>

      <Form.Item
        className={style.FormItem}
        name="sex"
        rules={[{ required: true, message: "Please input your Отчетство!" }]}
      >
        <Radio.Group
          className={style.RadioGroup}
          onChange={onChange}
          value={value}
        >
          <Radio value={1}>мужчина</Radio>
          <Radio value={2}>женщина</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item className={style.FormItem}>
        <Button type="primary" htmlType="submit" className={style.btn}>
          Войти
        </Button>
      </Form.Item>

      <Form.Item className={style.FormItem} name="remember">
        
          <Checkbox className={style.Checkbox}>
            Согласие на обработку <br /> <a href="/">персональных данных</a>
          </Checkbox>
        
      </Form.Item>

     
    </Form>
  );
};

export default FormPage;
