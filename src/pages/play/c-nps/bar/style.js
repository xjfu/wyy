import styled from "styled-components"

export const WrapXJFPlayMusic = styled.div `
    position: fixed;
    bottom: -0px; //-42px
    height: 50px;
    width: 100%;
    transition: bottom 0.3s linear 0s;
    color: #fff;
    z-index: 2000;
    .maincontainer {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-position: 0 0;
        background-repeat: repeat-x;
        .updn {
            width: 100%;
            position: absolute;
            top: -11px;
            height: 20px;
            display: flex;
            flex-direction: row-reverse;
            
            .left {
                position: absolute;
                top: -3px;
                right: 9px;
                width: 52px;
                height: 67px;
                background-position: 0 -380px;
                .btn {
                    display: block;
                    width: 18px;
                    height: 18px;
                    margin: 6px 0 0 17px;
                    
                }
                
            }
            .clock_close{
                .btn {
                    background-position: -100px -380px;
                }
                
                
            }
            .clock_open {
                .btn {
                    background-position: -80px -380px;
                }
            }
        }
        .container {
        
            height: 100%;

            /* background: red; */
            display: flex;
            padding: 5px;
            .btnplay {
                width: 137px;
                display: flex;
                /* justify-content: space-between; */
                padding: 6px 0;
                .playprev {
                    width: 28px;
                    height: 28px;
                    margin: 5px 10px;
                    background-position: 0 -130px;
                }
                .playopen {
                    width: 36px;
                    height: 36px;
                    background-position: 0 -165px;
                }
                .playpause {
                    width: 36px;
                    height: 36px;
                    background-position: 0 -204px;
                }

                .playnext {
                    width: 28px;
                    height: 28px;
                    margin: 5px 10px;
                    background-position: -80px -130px;
                }
                
            }
            .btnimg {
                width: 34px;
                
                display: block;
                padding-top: 6px;
                margin-left: 20px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .btnrange {
                
                width: 600px;
                display: flex;
                flex-direction: column;

                .header {
                    top: 9px;
                    font-size: 12px;
                    position: absolute;
                    margin-left: 15px;
                    .h_a {
                        margin-right: 15px;
                        color:  #e8e8e8;
                    }
                    .h_a:hover {
                        
                        text-decoration: underline;
                    }
                    .h_b:hover {
                        
                        text-decoration: underline;
                    }

                    .h_b {
                        color: #9b9b9b;
                    }
                    
                }
                
                .btm {
                    margin-top: 20px;
                    margin-left: 7px;
                    display: flex;
                    .ant-slider {
                        width: 500px;
                        padding: initial;
                        .ant-slider-handle {
                            width: 22px;
                            height: 24px;
                            background-position: 0 -250px;
                            position: absolute;
                            
                            margin-top: -8px;
                            background-color: initial;
                            border: initial;
                            border-radius: initial;
                            box-shadow: initial;
                            cursor: pointer;
                            transition: initial;
                        }
                        .ant-slider-track {
                            height: 9px;
                            background-position: left -66px;
                        }
                        .ant-slider-rail {
                            height: 9px;
                            background-color:initial;
                            background-position: right 0;
                        }
                    }
                    .time {
                        width: 100px;
                        margin-top: 4px;
                        margin-left: 8px;
                        font-size: 12px;
                        em {
                            color:#a1a1a1
                        }
                        
                        
                        color: #797979;
                        text-shadow: 0 1px 0 #121212;
                    }
                    width: 500px;                        
                }
            }
            .btnlist {
                
                display: flex;
                justify-content: space-between;
                width: 100px;
                .orderloop {
                    display: block;
                    text-shadow: 0 1px 0 #080707;
                    font-size: 10px;
                    width: 30px;
                    margin-left: 14px;
                    margin-top: 12px;
                    background-position: ${props => {
                        switch (props.playSequence) {
                        case 1:
                            return '-66px -248px;'
                        case 2:
                            return '-66px -344px;'
                        default:
                            return '-3px -344px;'
                        }
                    }};
                }
                .list {
                    display: block;
                    padding-left: 30px;
                    padding-top: 14px;
                    color: #666;
                    text-shadow: 0 1px 0 #080707;
                    font-size: 10px;
                    width: 60px;
                    background-position: -42px -57px;
                }
                .list:hover {
                    cursor: pointer;
                }
            }
            
        }
    }

    
`
export const WrapContainer = styled.div `
    position: absolute;
    display: block;
    height: 301px;
    left: 50%;
    width: 986px;
    bottom: 44px;
    margin-left: -496px;
    
`
