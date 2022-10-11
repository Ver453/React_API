import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Button,Form,Input,message} from "antd";
import axios from "axios";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const Login = () => {

    // const [user,setuser]=useState("")
    const navigate=useNavigate()
    const [Email,setemail]=useState("")
    const [Password,setpassword]=useState("")
    const token = localStorage.getItem("token") || undefined

    useEffect(()=>{
        const validatetoken=()=>{
            if(token){
                axios.post("https://jp-dev.cityremit.global/web-api/config/v1/tickets/search",null,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                .then(response=>{
                    if(response.status===200){
                        navigate('/dashboard')
                    }
                })
                .catch(()=>console.log("token invalid"))
            }
        }
        validatetoken();
    },[token, navigate])

    const loginhandel=()=>{
        if(!Email || !Password){
            return message.warning("Enter all the fields")
        }

        axios.post("https://jp-dev.cityremit.global/web-api//config/v1/auths/login", {
            login_id:Email,
            login_password:Password
        })
        .then(response=>{
            if(response.status===200){
                const token = response.data.data[0].jwt_token
                localStorage.setItem("token",token)
                navigate('/dashboard')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
<div
    style={{
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <Form
        className="login-form"
        style={{
          padding: "40px",
          backgroundColor: "white",
          marginTop: "18vh",
          minWidth: "23vw",
          borderRadius: "8px",
          border: "1px solid #e6e6e7",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginBottom: "10px",
            }}
            src="https://jp-dev.cityremit.global/static/media/city-express-logo.f913d3a8.png"
            alt=""
            width={"130px"}
          />
        </div>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
            style={{
              padding: "8px",
              borderRadius: "5px",
            }}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{
              padding: "8px",
              borderRadius: "5px",
            }}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <a
            style={{
              float: "right",
            }}
            href=""
          >
            Forgot password
          </a>
        </Form.Item>
        <Button
          onClick={loginhandel}
          type="primary"
          style={{
            width: "100%",
            borderRadius: "5px",
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Login