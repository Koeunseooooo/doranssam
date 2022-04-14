import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderProgress = styled.div`
    button {
        min-width: 650px;
        font-size: 25px;
        height: 42.5px;
        color: black;
        background: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;
        padding: 3px 35px;
        font-family: "상상토끼 꽃집막내딸 OTF";
        letter-spacing: -0.1em;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 3px;
        border-radius: 25px;
        text-align: left;
        border: 2px solid black;
        transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);

        &:before {
            z-index: -1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            width: 99.5%;
            height: 99.5%;
            position: absolute;
            background: white;
            transform: translate3d(0.2em, 0.15em, 1em);
            border-radius: 25px;
            border: 2px solid black;
        }

        &:after {
            z-index: 3;
            position: absolute;
            text-align: right;
            content: "";
            width: 450px;
            height: 11px;
            /* 빨간색 부분 %가 더 많을 때는 (90deg, #E75244 70%, white 30%) 이런 식으로 작성 */
            background: linear-gradient(to left, white 70%, #e92f2e 30%);
            transform: translate3d(15px, 100%, 30em);
            border-radius: 25px;
        }
    }
`;

Progressbar.propTypes = {
    progessText: PropTypes.string,
    // desc: PropTypes.string,
};

function Progressbar({ progressText, progressRate, progressColor }) {
    // progressRate : 흰색비율
    // 조건도 명시해줘야할듯? ( 그외 부분 색깔이 50% 이상이면 반대로 작성해야하므로 css내에서 조건문으로 분기하여 처리하여야 함)
    return (
        <HeaderProgress>
            <div>
                <button
                    className="button"
                    progressText={progressText}
                    // progressRate={progressRate}
                    // progressColor={progressColor}
                >
                    {progressText}
                </button>
            </div>
        </HeaderProgress>
    );
}

export default Progressbar;
