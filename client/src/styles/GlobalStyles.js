import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    :root {
        --white: #FFFFFF;
        --grey: #EEEEEE;
        --border: #C1C1C1;
        --title: #5A5A5A;
        --input: #808080;
        --dark-grey: #3E3E3E;

        --submit: #59CDFF;
        --submit-stroke: #A9E2F3;
        --submit-hover: #64BADF;

        --clear: #FF5959;
        --clear-stroke: #F3AEA9;
        --clear-hover: #DF6464;

        --button-text: #313E2F;

        --icon: #747474;
    }
`;