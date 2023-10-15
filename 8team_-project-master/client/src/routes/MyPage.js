import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Form} from 'react-bootstrap';

const MyPage = ({ history }) => {
    const navigate = useNavigate();

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newAddress, setNewAddress] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();


        if(newEmail === '' || newPassword === '' || confirmNewPassword === '' || newPhoneNumber === '') {
            return alert("회원정보가 저장되었습니다.");
            navigate("/");
        };
    };

    return (
        <Container className = "className">
            <button className = "manageAccount">개인정보 조회/수정</button>
            <button className = "deleteAccount">회원 탈퇴</button>

        
            <Form>
                <label name = "name">이름</label>
                <input
                    placeholder = "이름을 입력하세요."
                    type = "name"
                    value = {newName}
                    onChange = {(e)=>setNewName(e.target.value)}
                />  
            </Form>
            <Form>
                <label name = "email">이메일</label>
                <input
                    placeholder = "이메일을 입력하세요."
                    type = "email"
                    value = {newEmail}
                    onChange = {(e)=>setNewEmail(e.target.value)}
                />  
            </Form>

            <Form>
                <label name = "password">비밀번호</label>
                <input
                    placeholder = "비밀번호를 입력하세요."
                    type = "password"
                    value = {newPassword}
                    onChange = {(e)=>setNewPassword(e.target.value)}
                />  
            </Form>

            <Form>
                <label name = "confirmNewPassword">비밀번호 확인</label>
                <input
                    placeholder = "입력한 비밀번호를 입력하세요."
                    type = "confirmNewPassword"
                    value = {confirmNewPassword}
                    onChange = {(e)=>setConfirmNewPassword(e.target.value)}
                />  
            </Form>
            <Form>
                <label name = "phoneNumber">휴대폰번호</label>
                <input
                    placeholder = "휴대폰번호를 입력하세요."
                    type = "phoneNumber"
                    value = {newPhoneNumber}
                    onChange = {(e)=>setNewPhoneNumber(e.target.value)}
                />  
            </Form>
            <Form>
                <label name = "address">주소</label>
                <input
                    placeholder = "주소를 입력하세요."
                    type = "address"
                    value = {newAddress}
                    onChange = {(e)=>setNewAddress(e.target.value)}
                />  
            </Form>
            <Button
              onClick={(event) => {
                onSubmitHandler(event);
              }}
            >
              저장
            </Button>
        </Container>

    );
};

export default MyPage;




    
