import styled from "styled-components"


export const HeaderWrapper = styled.div `
    height: 75px;
    
    background: #242424;
    color: #fff;
    display: flex;
    flex-direction: column;
    .content {
        height: 70px;
        /* background-color: #000; */
        display: flex;
        flex-direction: row;
        /* justify-content: space-between; */
    }
    .divider {
        height: 5px;
        background-color: #C20C0C;

    }
    
`
export const HeaderLeft = styled.div `
    display: flex;
    flex-direction: row;
    
    /* justify-content: space-between; */
    color: #CCCCCC;
    /* width: 100%; */
    height: 100%;
    line-height: 70px;
    .download {
        position: relative;
        .hot {
            display: block;
            position: absolute;
            top: 21px;
            left: 100px;
            width: 28px;
            height: 19px;
            background-position: -190px 0;
        }
    }
    
    .active {
        position: relative;
        background-color: #000;
        .cor {
            display: block;
            position: absolute;
            left: 50%;
            top: 64px;
            width: 12px;
            height: 7px;
            margin-left: -6px;
            overflow: hidden;
            background-position: -226px 0;
        }
        
    }
    
    a {
        text-decoration: none;
        color: #CCCCCC;
    }
    a:hover {
        color: #fff;
        background-color: #000;
    }
    .logo {
        width: 176px;
        height: 69px;
        background-color:#242424;
        background-position: 0 0;
    }
    .left-padding {
            font-size: 14px;
            padding: 0 19px;
    }

`

export const HeaderRight = styled.div `
    display: flex;
    flex-direction: row;
    font-size: 12px;
    margin-left:50px;
    .search {
        padding: 0px 0 0 20px;
        font-size: 10px;
        border-radius: 32px; 
        width: 158px;
        position: relative;
        height: 32px;
        margin-top: 19px;
        background-position: 0 -99px;
        background-color: #fff;
        .s-label {
            position: absolute;
            color: red;
            cursor: text;
            padding: 7px 0 8px 21px;
            left: 9px;
            color: #9b9b9b;
            
        }
        
    }
    .author {
        width: 90px;
        height: 32px;
        margin-left:20px;
        margin-top: 19px;
        line-height: 30px;
        border:1px solid #4F4F4F;
        display: block;
        border-radius: 20px;
        
        .authorpadding {
            padding-left:16px;
            color: #ccc;
            
        }
        .authorpadding:hover {
            color: #fff;
        }
        
    }
    
    .author:hover {
        border: 1px solid #ccc;
        color: #fff;
    }
    .login {
        height: 32px;
        margin-left:20px;
        margin-top: 19px;
        line-height: 30px;
        color: #fff;
        display: block;
        border-radius: 20px;
        .authorpadding {
            color: #787878;
        }
    }
`