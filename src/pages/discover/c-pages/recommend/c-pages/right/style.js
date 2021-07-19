import styled from "styled-components"
export const WrapRight = styled.div`
    
`



export const WrapSingerRight = styled.div ` 
    border-left: 1px solid #d4d4d4;
    .singerh {
        width: 250px;
        height: 126px;
        background-position:0 0;
        p {
            color: #666;
            width: 205px;
            padding:16px 0;
            font-size: 12px;
            margin: 0 auto;
            line-height: 22px;
        }
        .btn {
            margin: 0 auto;
            display: block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background-position: 0 -195px;
        }
        .btn:hover {
            background-position:-111px -195px;
            cursor: pointer;

        }

    }
    .sigerc {
        
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .spna {
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            span {
                display: inline-block;
                flex: 1;
                color: #333;
                font-weight: 900;

            }
            a {
                float: right;

                color: #666;

            }
            a:hover {
                text-decoration: underline;
            }
        }
       
    }
    .singerl {

        display: flex;
        flex-direction: column;
        margin:0 20px;
        background: #fafafa;
        .artinfo {
            /* height: 64px; */
            width: 100%;
            img {
                width: 100%;
            }
        }
        li a{
            color: #666;
            margin: 5px 0;
            border: 1px solid #e9e9e9;
            display: flex;
            flex-direction: row;
        }
        .reply {
            width: 100%;
            text-align: center;
            padding-top: 10px;
            a {
                display: inline-block;
                width: 100%;
                background-position: -40px -100px;  
                color: #333;
            }
            i {
          
                background-position: 0 -59px;
                display: inline-block;
                width: 204px;
                /* display: inline; */
                width: 210px;
                margin-left: -5px;
                zoom: 1;
                height: 31px;
                line-height: 31px;
                overflow: hidden;
                line-height: 32px;
                vertical-align: top;
                text-align: center;
                cursor: pointer;
            }
        }
    }
`
