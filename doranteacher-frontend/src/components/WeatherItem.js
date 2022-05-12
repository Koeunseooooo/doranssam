import React from "react";
import styled, { css } from "styled-components";

const WeatherItems = styled.div`
    .text {
        font-family: "116angduk_honesty1.5";
        color: black;
        font-weight: lighter;
        font-style: normal;
        font-size: 25px;
    }
    .weatherItem {
        cursor: pointer;

        border-radius: 25px;
        padding-top: 20px;
        padding-bottom: 20px;

        display: flex;
        flex-direction: column;
        justify: center;
        align-items: center;

        width: 120px;
        height: 150px;
        background: #f9de4b;
        outline: 0;
        border: 0;
        letter-spacing: 1px;
        position: relative;
        padding: 3px 35px;
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
            width: 100%;
            height: 100%;
            position: absolute;
            background: white;
            transform: translate3d(0.2em, 0.15em, 1em);
            border-radius: 25px;
            border: 2px solid black;
            transition: transform 0.2s cubic-bezier(0, 0, 0.7, 1);
            &:active {
                z-index: -1;
            }
        }
    }
`;

function WeatherItem({ weather_id, weather_img, weather_description }) {
    return (
        <WeatherItems>
            <div className="weatherItem">
                <img src={weather_img} />
                <span className="text">{weather_description}</span>
            </div>
        </WeatherItems>
    );
}

export default WeatherItem;
