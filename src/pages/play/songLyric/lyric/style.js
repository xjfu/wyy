import styled from "styled-components"

export const WrapXJFLyRic = styled.div `
    padding: 35px 35px;
    .lrcc {
        display: flex;
        .left {
            width: 206px;
            height: 206px;
           
            text-align: center;
            transform: translateY(40px);

            .f-alpha {
                width: 206px;
                height: 206px;
                position: relative;
                display: block;
                margin-top: -168px;
                background-position: -140px -580px;
                
            }
        }
        .right {
            li {
                display: block;
                
            }
            font-size:12px;
            .close {
                display: none;
            }
            .crl {
                color: #0c73c2;
                margin-top: 10px;
                &:hover {
                    text-decoration: underline;
                }
                .u-icn-69 {
                    margin-left: 26px;
                    width: 19px;
                    display: block;
                    position: absolute;
                    margin-top: -13px;
                    height: 20px;
                    background-position: -65px -520px;
                }
                .u-icn-96 {
                    margin-left: 26px;
                    width: 19px;
                    display: block;
                    position: absolute;
                    margin-top: -13px;
                    height: 20px;
                    background-position: -45px -520px;
                }
            }
            margin-left: 20px;
        }
    }
`
