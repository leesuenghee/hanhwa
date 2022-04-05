var headerSpase = document.querySelector("#header")
var headerCont = `
<header>
<div class="header_part">
    <div class="logo">
        <a href="./index.html"><img src="./img/logo.png" alt=""></a>
    </div>

    <div class="menu1">
        <ul class="mainmenu">
            <li><a href="./company.html">COMPNY</a>
                <ul class="submenu">
                    <li><a href="">경영이념</a></li>
                    <li><a href="">연혁</a></li>
                    <li><a href="">조직도</a></li>
                    <li><a href="">재무정보</a></li>
                    <li><a href="">CI</a></li>
                    <li><a href="">BI</a></li>
                    <li><a href="">찾아오시는길</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu">
            <li><a href="./business.html">BUSINESS</a>
                <ul class="submenu">
                    <li><a href="">토목 사업</a></li>
                    <li><a href="">건축 사업</a></li>
                    <li><a href="">주택 사업</a></li>
                    <li><a href="">플랜트 사업</a></li>
                    <li><a href="">기술연구소</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu">
            <li><a href="./prcenter.html">PR CENTER</a>
                <ul class="submenu">
                    <li><a href="">사회공헌</a></li>
                    <li><a href="">공익사업</a></li>
                    <li><a href="">활동내용</a></li>
                    <li><a href="">윤리경영</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">사내소식</a></li>
                    <li><a href="">홍보자료실</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu">
            <li><a href="./careers.html">CAREERS</a>
                <ul class="submenu">
                    <li><a href="">인재개발</a></li>
                    <li><a href="">인사제도</a></li>
                    <li><a href="">직무소개</a></li>
                    <li><a href="">채용공고</a></li>
                    <li><a href="">채용FAQ</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu">
            <li><a href="./customer.html">CUSTOMER</a>
                <ul class="submenu">
                    <li><a href="">고객문의</a></li>
                    <li><a href="">고객문의확인</a></li>
                    <li><a href="">사이버신문고</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </li>
        </ul>
    
    </div><!-- menu1 end-->

    <div class="Translation">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
    </div>

    <!-- menu2 -->
    <div id="menu2">
        <div class="logo">
            <a href="./index.html"><img src="./img/logo.png" alt=""></a>
        </div>
        <ul class="mainmenu2">
            <li><a href="">Hanwha E&C</a>
                <ul class="submenu2">
                    <li><a href="">경영이념</a></li>
                    <li><a href="">연혁</a></li>
                    <li><a href="">조직도</a></li>
                    <li><a href="">재무정보</a></li>
                    <li><a href="">CI</a></li>
                    <li><a href="">BI</a></li>
                    <li><a href="">찾아오시는길</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu2">
            <li><a href="">BUSINESS</a>
                <ul class="submenu2">
                    <li><a href="">토목 사업</a></li>
                    <li><a href="">건축 사업</a></li>
                    <li><a href="">주택 사업</a></li>
                    <li><a href="">플랜트 사업</a></li>
                    <li><a href="">기술연구소</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu2">
            <li><a href="">PR CENTER</a>
                <ul class="submenu2">
                    <li><a href="">사회공헌</a></li>
                    <li><a href="">공익사업</a></li>
                    <li><a href="">활동내용</a></li>
                    <li><a href="">윤리경영</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">사내소식</a></li>
                    <li><a href="">홍보자료실</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu2">
            <li><a href="">CAREERS</a>
                <ul class="submenu2">
                    <li><a href="">인재개발</a></li>
                    <li><a href="">인사제도</a></li>
                    <li><a href="">직무소개</a></li>
                    <li><a href="">채용공고</a></li>
                    <li><a href="">채용FAQ</a></li>
                </ul>
            </li>
        </ul>
        <ul class="mainmenu2">
            <li><a href="">CUSTOMER</a>
                <ul class="submenu2">
                    <li><a href="">고객문의</a></li>
                    <li><a href="">고객문의확인</a></li>
                    <li><a href="">사이버신문고</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </li>
        </ul>

        <div class="close_btn"></div>
    </div><!-- menu2 end-->  

</div>
</header>

`
headerSpase.innerHTML = headerCont;


var footerSpace = document.querySelector("#footer")
var footerCont = `
<footer>
            <div id="footer1">
                <div class="left_footer">
                    <a href="#"><img src="img/footer_logo.png" alt=""></a>
                    <ul class="footer_menu">
                        <li><a href="#">해외현장 임직원가족</a></li>
                        <li><a href="#">개인정보 처리방침</a></li>
                        <li><a href="#">공정거래 사업지침</a></li>
                        <li><a href="#">협력업체 시스템</a></li>
                    </ul>
                    <h3>
                        서울시 영등포구 여의대로 24 전경련회관<br>TEL 02.2055.6000  080.729.2400<br>Copyright 2022 Hanwha Engineering & Construction corp.
                    </h3>
                </div><!-- left_footer -->

                <div class="right_footer">                   
                        <ul class="sns_footer">
                            <li class="sns1"><a href="#"></a></li>
                            <li class="sns2"><a href="#"></a></li>
                            <li class="sns3"><a href="#"></a></li>
                            <li class="sns4"><a href="#"></a></li>
                        </ul>
                    <div class="Cooperation">
                        <div class="body"></div>
                        <div class="head"></div>

                        
                    </div>
                </div><!-- right_footer-->
            </div>
        </footer> 


`

footerSpace.innerHTML = footerCont;