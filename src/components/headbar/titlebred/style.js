import styled from "styled-components"
export const WrapTitleBtmRed = styled.div `
    width: 100%;
    display: flex;
    
    .u-title {
        height: 40px;
        border-bottom: 2px solid #c20c0c;
        width: 100%;
        h3 {
            float: left;
            font-size: 24px;
            font-weight: normal;
        }
         .more {
            float: right;
            margin-top: 14px;
            color: #666;
            font-size: 12px;
            
        }
        .more:hover {
            text-decoration: underline;
        }
    }
    
`