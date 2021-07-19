import styled from "styled-components"
export const WrapTopList = styled.div `  
    display: flex;
    margin-top: 20px;
    .v-hd2 {
        
        height: 472px;
        background-position: -0px 0px;
    }
    .listcontent {
        width: 100%;
        display: flex;
        
        /* flex: 1; */
        justify-content: space-between;
        .listtopall {
            
            width: 100%;
            
            .listtop {
              
                height: 120px;
                .msk {
                    margin-top: -80px;
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-position: -145px -57px;
                }
                .listtopimg {
                    height: 80px;
                    margin-left: 20px;
                    /* margin-top: 20px; */
                    position: absolute;
                    width: 80px;
                    margin-top: 20px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .listtopimgright {
                   
                    height: 50px;
                    width: 115px;
                    margin-top: 27px;
                    margin-left: 115px;
                    position: absolute;

                    .leftspan {
                        display: block;
                        float: left;
                        width: 22px;
                        height: 22px;
                        margin-right: 10px;
                        text-indent: -9999px;
                    }
                    .leftspan:hover {
                        background-position: -267px -235px;
                        cursor: pointer;
                   
                    }
                    .rightspan:hover {
                        background-position: -300px -235px;
                        cursor: pointer;

                    };
                    .rightspan {
                        display: block;
                        float: left;
                        width: 22px;
                        height: 22px;
                        margin-right: 10px;
                        text-indent: -9999px;
                    }
                    .s-bg-9 {
                        background-position: -267px -205px;
                    }
                    .s-bg-10 {
                        background-position: -300px -205px;
                    }
                    /* position: absolute; */
                }
                
            }
        }
        ul li:last-child {
            float:  right;
            padding-right: 20px;
        }
        li {
            height: 32px;
            line-height: 32px;
            display: flex;
            .spanindex {
                width: 35px;
                display: inline-block;
                height: 100%;
                margin-left: 20px;
                text-align: center;
            }
            .spanred {
                color: #c10d0c;
            }
            .spanlink {
                font-size: 12px;
                height: 32px;
                white-space: nowrap;
                width: 175px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
          
            .linone {
                display: none;
            }
        }
        li:hover .spanlink {
            cursor: pointer;
            overflow: hidden;
            width: 85px;
            /* text-decoration: underline; */
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .showli .liicon {
                display: block;
                width: 100px;
                margin-left: 130px;
                position: absolute;
            /* background-color: red; */
                .clsblc {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-top: 6px;
                    margin-left: 10px;
                    /* background-color: blue; */
                    text-align: center;
                    
                    
                }
                /* .clsblc {
                    background-position: -265px -266px;
                } */
                .clsplay {
                    display: inline-block;
                    
                    
                    background-position: -265px -266px;
                }
                .clsplay:hover {
                    cursor: pointer;
                    background-position: -265px -286px;
                }
                .clsadd {
                
                    /* margin-left: 170px; */
                    background-position: 3px -696px;
                }
                .clsadd:hover {
                    cursor: pointer;
                    /* margin-left: 170px; */
                    background-position: -19px  -696px;
                }
                .clsaddme {
                    /* margin-left: 200px; */
                    background-position: -295px -266px;
                }
                .clsaddme:hover {
                    /* margin-left: 200px; */
                    cursor: pointer;
                    background-position: -295px -286px;
                }

        }
        .left {
            flex: 1;
        }
        .center {
            flex: 1;

        }
        .right {
            flex: 1;

        }
        a {
            color: initial;
            text-overflow: ellipsis;
        }
        a:hover {
            cursor: pointer;
            text-decoration: underline;
        }
        
    }
    
    
`

