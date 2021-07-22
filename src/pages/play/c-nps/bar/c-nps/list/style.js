import styled from "styled-components"
export const WrapSongList = styled.div `
    width: 100%;
    height: 100%;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    overflow: hidden;
    .list {
        
        display: block;
        
    }
    .listhd {
        background-position: -17px 0;
        height: 41px;
        margin-left: 5px;
        h4 {
            position: absolute;
            left: 25px;
            top: 0;
            height: 39px;
            line-height: 39px;
            font-size: 14px;
            color: #e2e2e2;
        }
        .addall {
            position: absolute;
            left: 359px;
            top: 12px;
            color: #ccc;
            height: 15px;
            line-height: 15px;
            cursor: pointer;
            .ico-add {
                float: left;
                margin: 1px 6px 0 0;
                height: 20px;
                
                width: 16px;
                background-position: -24px 0;
            }
            .m-playbar .listhdc .ico {
                float: left;
                margin: 1px 6px 0 0;
                margin-top: 0;
            }
        }
    }
    .listbd {
        overflow: hidden;
    }
`
