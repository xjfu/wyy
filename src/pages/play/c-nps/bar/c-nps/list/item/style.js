import styled from "styled-components"
export const WrapListItem = styled.div `
    
    display: flex;
    .col {
        width: 10px;
        opacity: 0;
        .playicn {
            display: block;
            margin-top: 5px;
            margin-left: -9px;
            width: 10px;
            height: 13px;
            background-position: -182px 0;
        }
        }
    }
    &:hover {
        background-color:rgba(0, 0, 0, 0.3);
        .liicon {
            opacity: 1;
        }
    }
    & {
        
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding: 5px 10px 5px 20px;
        .liicon {
            width: 40px;
            justify-content: space-between;
            margin-right: 20px;
            display: flex;
            opacity: 0;
            padding: 5px 0px;
            &:hover {
                .anticon-folder-add:hover{
                    color:#fff;

                }
                .anticon-delete:hover {
                    color: #fff;
                }
                
            }
        }
        .lin {
            width: 300px;
        }
        .lirn {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
                 text-overflow: ellipsis;
            white-space: nowrap;
            }
            /* a {
                
                color: #9b9b9b;
            }
            a:hover {
                text-decoration: underline;
                color: #fff;

            } */
        }
        .lit {
            width: 50px;
        }
        a {
            color: #9f9f9f;
            :hover {
                color: #fff;
                text-decoration: underline;
            }
        }
      
    }
   
`
