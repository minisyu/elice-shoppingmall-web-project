import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
// import customAxios from "../../config/customAxios";
import { regex } from "../utils/regex";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();
    
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Address, setAddress] = useState("");


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    } 
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onPhoneNumberHandler = (e) => {
        setPhoneNumber(e.currentTarget.value);
    };

    const onAddressHandler = (e) => {
        setAddress(e.currentTarget.value);
    };

    const onSubmitHandler = async(e) => {
        e.preventDefault();
  

    if(!regex(Email)){
        return alert("이메일 형식을 확인해주세요.")
    }else if(!regex(Password)){
        return alert("비밀번호 형식을 확인해주세요.")
    }else if(!regex(ConfirmPassword)){
        return alert("비밀번호가 틀립니다.")
    }else if(!regex(PhoneNumber)){
        return alert("휴대폰번호 형식을 확인해주세요.")
    }else{
        axios
        .post("/api/v1/users",{
            name : Name,
            email : Email,
            password : Password,
            phoneNumber : PhoneNumber,
            address : Address,
        })
        .then((res)=> {
            alert("회원가입 완료");
            console.log(res.data);
            navigate('/SignUpDone')
        })
    }
};
    
    return (
            <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
          
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>Name</label>
                <input type='text' value={Name} onChange={onNameHandler}/>
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <label>Confirm Password</label>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <label>PhoneNumber</label>
                <input type='phonenumber' value={PhoneNumber} onChange={onPhoneNumberHandler}/>
                <label>Address</label>
                <input type='address' value={Address} onChange={onAddressHandler}/>
                <br />
                <button onClick = {(event)=> {
                    onSubmitHandler(event);
                }}
                >
                    회원가입
                </button>
            </form>
        </div>
    )

}
export default SignUp;



