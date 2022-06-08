import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import GlobalStyle from "../components/GlobalStyle";
import { useNavigate, Link } from "react-router-dom";
import LeftDoran from "../components/LeftDoran";
import ProgressBar from "../components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        margin-top: 30px;
        margin-bottom: 20px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 380;
        font-size: 35px;
        line-height: 48px;
        text-align: center;
    }

    .question {
        margin-top: 25px;
        margin-bottom: 20px;
        font-family: "KOTRAHOPE";
        font-style: normal;
        font-weight: 380;
        font-size: 25px;
        line-height: 48px;
        text-align: center;
    }

    .yellowbox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;

        width: 600px;
        height: 480px;
        z-index: 1;
        background: white;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;

        border-radius: 25px;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
    }

    .buttons {
        display: flex;
    }

    .buttonStyle {
        margin-left: 10px;
        margin-right: 10px;
    }

    .saveButton {
        margin-top: 15px;
    }

    .key {
        color: #e75244;
    }

    .nextButton {
        align-self: flex-end;
        margin-top: 20px;
        margin-right: 70px;
    }

    .on {
        background: #e75244;
        // background: #5dcb83;
        transition: all 0.1s cubic-bezier(0, 0, 0.7, 1);
        top: 3px;
        left: -3px;
        box-shadow: -3px 3px 0 var(--brown);

        &::after {
            top: 1px;
            left: -2px;
            width: var(--angle);
            height: var(--angle);
        }

        &::before {
            bottom: -2px;
            right: 1px;
            width: var(--angle);
            height: var(--angle);
        }
    }

    .imageUpload {
        padding-left: 280px;
        margin-top: 20px;
        margin-bottom: -20px;
    }
`;

function DiarySave() {
    // console.log(getStringDate(new Date()));
    const [painting, setPainting] = useState(true);
    const [correct, setCorrect] = useState(true);
    const [comment, setComment] = useState(true);
    const [file, setFile] = useState(null);
    // const [text, setText] = useState(localStorage.getItem("text"));
    // const [correctText, setCorrectText] = useState(null);
    const [cookies] = useCookies(["acessToken"]);

    console.log(painting);
    console.log(correct);
    console.log(comment);
    console.log(file);

    const navigate = useNavigate("");

    const StyledContainer = styled(ToastContainer)`
        &&&.Toastify__toast-container {
            bottom: 80px;
            right: 20px;
        }
        .Toastify__toast {
            font-size: 30px;
        }
        .Toastify__toast-body {
            font-family: "KOTRAHOPE";
            font-style: normal;
            font-size: 24px;
            color: black;
        }
        .Toastify__progress-bar {
        }
    `;

    const errorNotify = () => {
        toast.error("사진을 업로드해주세요", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
        });
    };

    const successNotify = () => {
        toast.success("일기가 성공적으로 추가 되었어요🎉", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1800,
        });
    };

    function saveFunc() {
        if (!painting && !file) {
            errorNotify();
        }
        // useEffect(() => {
        //     fetch("http://3.35.27.115:5000/comment", {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             text: "은서네 집에서 초코 케이크를 만들엇따. 친구한테 뭐 하냐고 전화했는데 집에와서 케이크를 만들자고 했기때문이다. 초코를 엄청 많이 너었고 생크림도 듬뿍 발랐다. 만들기는 정말 쉬웠는데 정말 정말 맛있엇따! 곧 생일인 인경이에게 선물해줘야겠다. 맛있겠다!",
        //         }),
        //     })
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((json) => {
        //             console.log(json.result); // 서버에서 주는 json데이터가 출력 됨
        //             setComment(json.result);
        //         });
        // }, []);

        // useEffect(() => {
        //     fetch("http://3.35.27.115:5000/correct", {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             text: "은서네 집에서 초코 케이크를 만들엇따. 친구한테 뭐 하냐고 전화했는데 집에와서 케이크를 만들자고 했기때문이다. 초코를 엄청 많이 너었고 생크림도 듬뿍 발랐다. 만들기는 정말 쉬웠는데 정말 정말 맛있엇따! 곧 생일인 인경이에게 선물해줘야겠다. 맛있겠다!",
        //         }),
        //     })
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((json) => {
        //             // console.log(json); // 서버에서 주는 json데이터가 출력 됨
        //             setOriginal(json.original);
        //         });
        // }, []);

        console.log(typeof localStorage.getItem("title"));
        fetch("http://3.39.158.98:8080/diaries", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${cookies["accessToken"]}`,
            },
            body: JSON.stringify({
                title: localStorage.getItem("title"),
                date: localStorage.getItem("date"),
                weather: localStorage.getItem("weather"),
                keywords: localStorage.getItem("keywords"),
                text: localStorage.getItem("text"),
                diaryType: localStorage.getItem("diaryType"),
                isPrivate: comment,
                wantToCorrect: correct,
                wantToImage: painting,
            }),
        }).then((response) => {
            successNotify();
            setTimeout(function setNavi() {
                navigate("/");
            }, 1800);
        });
    }
    return (
        <>
            <GlobalStyle backColor="yellow" />
            <LeftDoran />
            <Header
                isProgress
                isLogout
                isImgBtn
                progress={
                    <ProgressBar
                        progressText={"7.일기저장"}
                        progressWidth={"100"}
                        progressColor={"#E75244"}
                        backColor="red"
                    ></ProgressBar>
                }
            />
            <MainBlock>
                <div className="content">
                    거의 다 끝났어요!
                    <br />
                    아래의 질문에 대답해볼까요?
                </div>
                <div className="yellowbox">
                    <div className="question">
                        Q1. 일기와 어울리는 <span className="key">그림</span>을
                        추천해줄까요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={painting === true ? `on` : ""}
                                onClick={() => setPainting(true)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="사진업로드"
                                inputColor="purple"
                                extraClassName={painting === false ? "on" : ""}
                                onClick={() => setPainting(false)}
                            />
                        </div>
                    </div>

                    <div className="imageUpload">
                        {!painting ? (
                            <input
                                type="file"
                                id="ex_file"
                                accept="image/jpg, image/png, image/jpeg"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="question">
                        Q2. 도란쌤의 <span className="key">맞춤법 교정</span>을
                        원하나요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={correct === true ? `on` : ""}
                                onClick={() => setCorrect(true)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={correct === false ? "on" : ""}
                                onClick={() => setCorrect(false)}
                            ></Button>
                        </div>
                    </div>
                    <div className="question">
                        Q3. 도란쌤의 <span className="key">답변</span>를 받고
                        싶나요?
                    </div>
                    <div className="buttons">
                        <div className="buttonStyle">
                            <Button
                                buttonText="네"
                                inputColor="purple"
                                extraClassName={comment === true ? `on` : ""}
                                onClick={() => setComment(true)}
                            ></Button>
                        </div>
                        <div className="buttonStyle">
                            <Button
                                buttonText="아니요"
                                inputColor="purple"
                                extraClassName={comment === false ? "on" : ""}
                                onClick={() => setComment(false)}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className="nextButton">
                    <Button
                        buttonText="끝!"
                        type="submit"
                        outputColor="purple"
                        onClick={saveFunc}
                    ></Button>
                </div>
            </MainBlock>
            <StyledContainer>
                <ToastContainer />
            </StyledContainer>
        </>
    );
}
export default DiarySave;
