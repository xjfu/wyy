import styled from "styled-components"

export const RecommendWrap = styled.div `
    /* background:url(${props=>props.imgUrl+`?imageView&blur=40x20`});  */
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .topbanner {
        /* background-color: whitesmoke; */
        margin: 0 auto;
        display: flex;
    }
    .content {
        background-color: yellow;
    }
    .cimg {
        background: url(${(props)=>{
            return props.children[0].props.imageurl.imageUrl + `?imageView&blur=40x20`
        }});
        background-size: 6000px;
        background-position: center center;
    }
    /* .content-content {
        background-color: #addddd;
    }
    .content-footer {
        background-color: #accddd;
    } */
`
export const TopBanner = styled.div `
    
    display: flex;
    flex-direction: row;
    width: 100%;
    /* height: 284px; */
    
    overflow: hidden;
    .bannerleft {
        width: 730px;
        
        
        img {
            width: 100%;
           
        }
    }
    .bannerright {
        width: 250px;
        display: block;
      
        position: relative;
   
        background: url(/static/media/download.3d89cf30.png);
        z-index: 20;
        background-color: #333;
       
        

        .downloadimg {
            
            
             width: 100%;
            height: 245px;
            /* height: 100%; */
            /* margin: 3px 0 0 0px; */
            /* background-color: transparent; */
            .btn {

                width: 234px;
                height: 60px;
                background: url(/static/media/download.3d89cf30.png);
                top: 183px;
                background-position: 0px -182px;
                position: absolute;
            }
            .btn:hover {
                z-index: 200;
                background: url(/static/media/download.3d89cf30.png);
               
                background-position: 19px -287px;
                
            }

           
        }
        .p {

            position: relative;
            z-index:333;
            width: 100%;
            display: block;
            padding-bottom: 7px;
            color: #8d8d8d;
            font-size: 10px;
            margin: 0 auto;
            text-align: center;
        }
    }
    
    
`


export const HotRecommend = styled.div `
    display: flex;
    background-color: white;
    .hotleft {
        width: 730px;
        padding: 20px 20px 40px;
        
        /* background-color: gray; */
    }
`

export const HotWrap = styled.div `
    display: flex;
    flex-direction:column;
    
`

export const HotHeader = styled.div `
    display: flex;
    width: 100%;
    height: 33px;
    flex-direction: row;
    border-bottom: 2px solid #C10D0C;
    font-size:12px;
    .hlh {
        display: flex;
        width: 34px;
        background-position: -225px -156px;
    }
    a {
            color: #666666;
            
        }
    a:hover {
        text-decoration: underline;
    }
    .hlhr {
        display: flex;
        /* width: 100%; */
        width: 610px;
        /* justify-content: space-between; */
        color: #666666;
        .hotnew {
            line-height: 26px;
            font-size: 20px;
            padding: 0 5px;
            .xdsj {
                text-decoration: none;
                color: #333;
            }
        }
        ul {
            width: 500px;
            display: flex;
            li {
                /* display: inline-block; */
                padding: 6px 10px;
            }
            li + li::before {
                content: "|";
                position: relative;
                left: -10px;
                /* border-left: 1px solid gray; */
            }

        }
        
        
        
    }
    .more {
            line-height: 31px;
    }
    .cor {
            width: 12px;
            height: 12px;
            background-color: red;
            display: inline-block;
            vertical-align: middle;
            background-position: 0 -240px;
    }
`

export const HotTwo = styled.div `
    display: flex;
    
`

export const HotThird = styled.div `
    display: flex;
    
`
export const WrapHeaderC = styled.div `
    
    margin: 20px 0;
    .ulc {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        .lic {
            display: block;
            width: 140px;
            margin-bottom: 30px;
            /* height: 140px; */
            .msk {
                position: relative;
                margin-top: -140px;
                display: block;
                height: 140px;
                width: 140px;
                top: 0;
                left: 0;
                /* background-color: blue; */
                background-position: 0 0;
            }
            p {
                margin-top: 10px;
                line-height: 18px;
            }
            img {
                width: 100%;
            }
            .lica {
                color: #000;
            }
            .lica:hover {
                color: #000;
                text-decoration: underline;
            }
    }
    }
    
`





export const WrapSingerRight = styled.div `
    display: flex;
    flex-direction: column;
    .singer {
        display: flex;
    }
    .djer {
        display: flex;
    }   
`


