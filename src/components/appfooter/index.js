import React, { memo } from 'react'
import {
    FooterWrapper, FooterLeft, FooterRight
} from './style'
export default memo(function XJFAppFooter() {
    return (
        <FooterWrapper>
            <div className="footercontent">
            <div className="left">
                <FooterLeft>
                    <p className="pa">

                        <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                            服务条款
                           
                        </a>
                         <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                            
                            隐私政策
                            
                        </a>
                         <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                             儿童隐私政策
                           
                        </a>
                        <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                            
                            服务条款
                            
                        </a>
                         <a href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                            
                            意见反馈
                            
                        </a>
                    </p>       
                    <p>
                        <span className="ps">
                            网易公司版权所有©1997-2021
                        </span>
                        <span>
                            杭州乐读科技有限公司运营：浙网文[2021] 1186-054号
                        </span>
                    </p>      
                    <p>
                        <span className="ps">
                            违法和不良信息举报电话：0571-89853516
                        </span>
                        <span>
                            举报邮箱：ncm5990@163.com


                        </span>
                    </p>   
                    <p>
                        <a className="ps" href="http://www.baidu.com">
                            粤B2-20090191-18  工业和信息化部备案管理系统网站 
                        </a>
                        <span className="police-logo"></span>
                        <a href="http://www.baidu.com">
                            浙公网安备 33010902002564号


                        </a>
                    </p>           
        
                </FooterLeft>
            </div>
            <div className="right">
                <FooterRight>
                    <ul>
                        <li>
                            <a className="footer_01 logo-musician" href="https://music.163.com/store/product"  target="_blank" rel="noopener noreferrer">
                                
                            </a>
                            <span className="footer_02 logo-audio"></span>
                        </li>
                        <li>
                            <a className="footer_01 logo-author" href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                                
                            </a>
                            <span className="footer_02 logo-auth"></span>

                        </li>
                        <li>
                            <a className="footer_01 logo-musician" href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                                
                            </a>
                            <span className="footer_02 logo-audio"></span>
                        </li>
                          <li>
                            <a className="footer_01 logo-musician" href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                                
                            </a>
                            <span className="footer_02 logo-audio"></span>
                        </li>
                          <li>
                            <a className="footer_01 logo-musician" href="https://music.163.com/store/product" target="_blank" rel="noopener noreferrer">
                                
                            </a>
                            <span className="footer_02 logo-audio"></span>
                        </li>
                    </ul>
                </FooterRight>
            </div>

            </div>
        </FooterWrapper>
    )
})
