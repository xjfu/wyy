import styled from "styled-components"
export const WrapSongList = styled.div `
    width: 100%;
    height: 100%;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    
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
        
        display: flex;
        height: 260px;
        .imgbg {
            position: absolute;
            left: 2px;
            top: -1px;
            width: 100%;
            height: 300px;
            opacity: .2;
            z-index: 2;
        }
        .left {
            width: 555px;
            height: 258px;
            overflow: auto;
            z-index: 5;
            .sli {
                display: flex;
                justify-content: space-between;
                padding-left: 20px;
                padding: 10px 10px 0 30px;
                .lin {
                    width: 400px;
                }
                .lirn {
                    width: 100px;
                }
                .lit {
                    width: 50px;
                }
            }
            ::-webkit-scrollbar-thumb:horizontal {
                /*水平滚动条的样式*/
                    width: 4px;
                    background-color: #9f9f9f;
                    border-radius: 4px;
            }
            ::-webkit-scrollbar-track-piece {
                background-color: #1a1a1a; /*滚动条的背景颜色*/
                border-radius: 0; /*滚动条的圆角宽度*/
            }
            ::-webkit-scrollbar {
                width: 8px; /*滚动条的宽度*/
                height: 6px; /*滚动条的高度*/
            }
            ::-webkit-scrollbar-thumb:vertical {
            /*垂直滚动条的样式*/
                height: 50px;
                background-color: #9f9f9f;
                border-radius: 4px;
            /* outline: 2px solid #000; */
            /* outline-offset: -2px; */
                border: 2px solid #9f9f9f;
            }
        }
        .right {
            .content {
                padding: 20px 20px;
                text-align: center;
                p {
                    height: 25px;
                    line-height: 25px;
                }
                .active {
                    color: #fff;
                    font-size: 16px;
                }
            }
            color: #989898;
            overflow: auto;
            width: 423px;
            height: 258px;
            z-index: 4;
            ::-webkit-scrollbar-thumb:horizontal {
      /*水平滚动条的样式*/
                width: 4px;
                background-color: #9f9f9f;
                border-radius: 4px;
            }
            ::-webkit-scrollbar-track-piece {
                background-color: #1a1a1a; /*滚动条的背景颜色*/
                border-radius: 0; /*滚动条的圆角宽度*/
            }
            ::-webkit-scrollbar {
                width: 8px; /*滚动条的宽度*/
                height: 6px; /*滚动条的高度*/
            }
            ::-webkit-scrollbar-thumb:vertical {
            /*垂直滚动条的样式*/
                height: 50px;
                background-color: #9f9f9f;
                border-radius: 4px;
                /* outline: 2px solid #000; */
                /* outline-offset: -2px; */
                border: 2px solid #9f9f9f;
            }
           
        }
        
        .msk {
            position: absolute;
            left: 560px;
            top: 40px;
            width: 420px;
            height: 262px;
            z-index: 3;
            background: #121212;
            opacity: .01;
        }
    }
`
