import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import { loginUser } from "../_actions/user_action";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../components/GlobalStyle";

const MainBlock = styled.div`
    background: #f9de4b;
`;

const CenterLogo = styled.div`
    text-align: center;

    img {
        width: 300px;
        padding: 40px 0px;
    }

    .centercontent {
        font-family: "NeoDunggeunmo";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
    }
`;

const LoginUI = styled.div`
    .wrap {
        display: "flex";
        flex-direction: "column";
        justifycontent: "center";
        align-items: "center";
        height: "100%";
    }
    .id {
        flex-direction: "column";
        justifycontent: "center";
        // align-items: "center";
    }

    .password {
        test-align: "center";
    }

    .loginform {
        // display: "flex";
        // justifycontent: "center";
        // alignitems: "center";
        // width: "100%";
        // height: "100vh";
    }

    .content {
        font-family: "상상토끼 꽃집막내딸 OTF";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        background: #f9de4b;
    }
`;

const Input = styled.input`
    width: 200px;
    padding: 10px;
    margin: 10px;
    background: #f9de4b;
    border-radius: 10px;
    border: 2px solid black;
    &:focus {
        background: white;
    }
`;

const Loginpage = (props) => {
    // redux의 dispatch
    const dispatch = useDispatch();

    // react hook에서 state 사용. 컴포넌트 안에 작성
    const [Username, setId] = useState("");
    const [Password, setPassword] = useState("");

    // handler 함수들
    const onUsernameHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        // 태그의 기본 기능으로 리프레쉬 되는 것을 방지.
        event.preventDefault();

        let body = {
            username: Username,
            password: Password,
        };

        // action의 반환값을 dispatch해준다.
        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                props.history.push("/");
            } else {
                alert("Error");
            }
        });
    };

    return (
        <>
            <GlobalStyle backColor="yellow" />
            <Header isIcon />
            <MainBlock>
                <CenterLogo>
                    <div className="centerlogo">
                        <img className="doranLogo" src="/img/doranlogo.png" />
                    </div>
                    <div className="centercontent">
                        AI 도란쌤과 함께
                        <br />
                        일기 마스터하기
                    </div>
                </CenterLogo>

                <LoginUI onSubmit={onSubmitHandler}>
                    <div className="loginform">
                        <form onSubmit={onSubmitHandler}>
                            <div className="wrap">
                                <div className="id">
                                    <label className="content">아이디</label>
                                    <Input
                                        className="input"
                                        type="username"
                                        value={Username}
                                        onChange={onUsernameHandler}
                                    />
                                </div>
                                <div className="password">
                                    <label className="content">비밀번호</label>
                                    <Input
                                        className="input"
                                        type="password"
                                        value={Password}
                                        onChange={onPasswordHandler}
                                    />
                                </div>
                            </div>
                        </form>
                        <br />
                        <Button
                            buttonText="로그인"
                            type="submit"
                            outputColor="red"
                            className="content"
                        ></Button>
                    </div>
                </LoginUI>
            </MainBlock>
        </>
    );
};

export default Loginpage;
