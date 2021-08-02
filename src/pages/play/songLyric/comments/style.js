import styled from "styled-components"


export const WrapXJFComments = styled.div `
    
    .itm {
        padding: 15px 0;
        border-top: 1px dotted #ccc;
        img {
            width: 100%;
        }
        .head {
            float: left;
            width: 50px;
            height: 50px;
            margin-right: -100px;
        }
        .cntwrap {
            margin-left: 60px;
            .cnt {
                width: 100%;
                overflow: hidden;
                line-height: 20px;
            }
            .rp {
                margin-top: 15px;
                text-align: left;
                .time {
                    color: #999;
                    font-size: 12px;
                }
            }
        }
    }
`