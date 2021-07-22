import styled from "styled-components"
export const WrapHotDjC = styled.div `  
    /* width: 100%;
    display: block; */
    width: 100%;
    margin-bottom: 50px;

    .hdjc {
        margin-top: 20px;
        background-color: #f5f5f5;
        border: 1px solid #d3d3d3;
    }
    .hdjcc {
        /* margin-top: 20px; */
        margin-left: 30px;
        margin-right: 30px;
        
       
    }
    .hotbtn {
            width: 100%;
            height: 20px;
            /* background-color: red; */
            display: flex;
            top: -134px;
            
            justify-content:space-between;
            position: relative;
            top: -134px;
            button {
                width: 20px;
                height: 20px;
                display: block;
            }
            .prev {
                cursor: pointer;
                margin-left: 10px;
                background-position: -260px -75px;
            }
            .next {
                cursor: pointer;

                background-position: -300px -75px;
                margin-right: 14px;
            }


        }
   .djcar {
       /* display: block; */
        margin-top: 20px;
        margin-bottom: 20px;
        /* width: 100%; */
        
       .djli {
            width: 120px;   
            height: 120px;
            display: inline-block;
            /* background-color:red; */
            .djlidiv {
                margin-right: 10px;
                
                padding: 5px;
                img {
                    width: 100%;
                }
            }
            .absoluteli {
                width: 138px;
                height: 110px;
                display: block;
                /* left: 5px; */
                /* margin-right: -15px; */
                margin-top: -172px;
                right: 0;
                z-index: -200;
                position: relative;
                background-position: 17px -570px;
            }
           
       }
       .p {
            height: 20px;
            margin: 0 auto;
            margin-top: 10px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100px;
            .pa {
              
               
                color:#000;
            }
       }
       .a {
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666;
       }

   }
   
    
`