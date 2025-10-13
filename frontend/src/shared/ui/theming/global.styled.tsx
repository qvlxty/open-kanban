import { createGlobalStyle } from 'styled-components'

// import RobotoFont from '../fonts/Roboto.ttf'
// import RobotoBoldFont from '../fonts/Roboto-Bold.ttf'
// import RobotoBlackFont from '../fonts/Roboto-Black.ttf'
import { themeVar } from './helpers'
import { ThemedStyledProps } from './types'

export const GlobalStyled = createGlobalStyle<ThemedStyledProps>`
    body {
        margin: 0;
        padding: 0;
        font-family: Roboto;
        color: ${themeVar('fontColor')};
        background-color: ${themeVar('backgroundColor')};
        overflow-x: hidden;
    }

    body,
    * {
        font-family: 'Roboto';
    }

    a {
        text-decoration: none;
        color: #111;
    }

    label {
        font-weight: 600;
        font-size: 14px;
        margin-left: 4px;
    }

    body {
        background: ${themeVar('backgroundColor')};
        font-family: 'Roboto';
        margin: 0;
        color: ${themeVar('fontColor')};
        padding: 0;
    }

    @font-face {
    font-family: Roboto mono;
    src: url('/fonts/RobotoMono-Regular.ttf');
    }


    @keyframes fadeout
    { 
    from { opacity: 0;}
    to { opacity: 1}
    }

    @-webkit-keyframes fadeout 
    {
    from { opacity: 0;}
    to {opacity: 1;}
    }

    a {
    color: ${themeVar('accent500')};
    }

    h1,h2,h3 {
    padding: 0;
    margin: 0;
    }


    .ScrollbarsCustom-TrackY {
        width: 4px !important;
    }

    kbd {
    background: #000;
    border: 1px solid #000;
    font-family: Roboto;
    font-weight: 500;
    color: #fff;
    font-size: 14px;
    margin-left: 8px;
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
    }
    .react-flow__handle {
    width: 0;
    height: 0;
    } 

    code {
    font-family: 'Roboto';
    }

    .copied {
    svg {
        fill: white;
    }
    }

    .wmde-markdown  {
    font-family: 'Roboto';
    background: none;
    color: ${themeVar('fontColor')};
    }
    input {
    flex-direction: row;
    font-size: 16px;
    padding: 10px;
    border-radius: 8px;
    background: ${themeVar('contentBg')};
    border: 1px solid ${themeVar('default600')};
    color: ${themeVar('fontColor')};
    &:focus {
            outline: none;
            box-shadow: 0px 0px 2px ${themeVar('green500')};
        }
    }

    .react-datepicker__header {
        background-color:${themeVar('default600')};
        color: ${themeVar('fontColor')};
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__current-month,
    .react-datepicker-time__header {
        color: ${themeVar('fontColor')};
        padding: 4px;
    }

    
    .react-datepicker__month-container,
    .react-datepicker__time-list
    {
        color: ${themeVar('fontColor')};
        background-color: ${themeVar('contentBg')};
    }
    .react-datepicker {
        border: 1px solid ${themeVar('default600')};
    }

`