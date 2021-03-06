import styled from "styled-components"

export const DiscoverWrapper = styled.div`
    
    
`

export const TopMenu = styled.div `
    padding-left: 180px;
    display: flex;
    flex-direction: row;
    height: 100%;
    
    font-size: 12px;
    color: #fff;

    li {
        padding: 0 20px;
    }
    a {
        color: #fff;
        display: inline-block;
    }
    em {
        display: inline-block;
        height: 20px;
        margin-top: 8px;
        position: relative;
        line-height: 19px;
        padding: 0 13px;
        /* border: 1px solid red; */
        border-radius: 20px;
    }
    em:hover {
        background: #9B0909;
    }
    .active {
        em {
            background: #9B0909;
        }
    }

    
`
