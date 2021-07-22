import styled from "styled-components"

export const FooterWrapper = styled.div`
    border-top: 1px solid #d3d3d3;
    padding-bottom: 50px;
    .footercontent {
        padding-top: 20px;
        width: 980px;
        display: flex;
        flex-direction: row;
        /* background-color: blue; */
        margin: 0 auto;
        padding: 0 auto;
        .left {
            width: 520px;
            /* background-color: yellow; */
        }
        .right {
            /* background-color: red; */
            width: 460px;
        }
    }
    
    /* text-align: center; */
`

export const FooterLeft = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 24px;
    p {
        /* margin: 0 auto; */
        margin-bottom: 0;
        /* padding: 0 auto; */
        display: flex;
        a {
            color: #000;
        }
   
    }
    
    
    .pa {
        justify-content: space-between;
       
        display: flex;
        width: 380px;
         a {
        /* display: inline-block; */
            color: #999999;
        }
        a::after{
        /* display: inline-block; */
       
        padding-left: 10px;        
        content: "|";
        }
    }
   
    
    a:hover {
        text-decoration: underline;
    }
    .ps {
        margin-right: 12px;;
    }
    .police-logo {
        background: url("https://s2.music.126.net/style/web2/img/3rd/police.png") no-repeat;
        width: 14px;
        height: 14px;
        display: inline-block;
        background-size: cover;
        margin-top: 5px;

    }
    /* text-align: center; */
`

export const FooterRight = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    ul {
        
        width: 100%;
        height: 100%;
        margin-bottom: 0px;
        display: flex;
        li {
            display: flex;
            width: 92px;
            flex-direction: column;
            text-align: center;
        }
    }
    a {
        margin: 0 auto;
        width: 50px;
        height: 45px;
        display: block;
    }
    .logo-musician {
        background-size: 110px 552px;
        background-position: -63px -456.5px;
    }
    span {
        width: 50px;
        height: 14px;;
    }
    .logo-audio {
        margin: 0 auto;
    /* text-align: center; */
        margin-top: 10px;
        /* display: block; */
        background-position: 0 -108px;
        margin-left: 10px;
        width: 72px;
        background-size: 180px 139px;
    }
    .logo-author {
        background-position: -63px -101px;
        background-size: 110px 552px;
    }
    .logo-auth {
        margin: 0 auto;
        margin-top: 12px;
        background-position: -1px -91px;
        margin-left: 20px;
        width: 72px;
        background-size: 180px 139px;
    }
    /* text-align: center; */
`