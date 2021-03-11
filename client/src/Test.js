import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Chonburi from './Assets/Fonts/Chonburi.ttf';
import MajorMonoTTF from "./MajorMonoDisplay-Regular.ttf";

export default function Test(props) {
    
    const GlobalStyle = createGlobalStyle`
            *{
                background:red;
            }
    `;

    return (
        <>
         <GlobalStyle />
         <h1>Hey world</h1>
        </>
    )
}
