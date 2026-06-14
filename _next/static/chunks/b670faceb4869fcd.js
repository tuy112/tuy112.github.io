(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61482,e=>{e.v({detailPage:"DetailPageLayout-module__UFgNPW__detailPage",detailPageContent:"DetailPageLayout-module__UFgNPW__detailPageContent",detailPageHeader:"DetailPageLayout-module__UFgNPW__detailPageHeader",detailPageInner:"DetailPageLayout-module__UFgNPW__detailPageInner"})},1193,e=>{"use strict";var t=e.i(43476),a=e.i(61482),l=e.i(87536),n=e.i(32128);function d({title:e,description:d,children:o}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{variant:"detail"}),(0,t.jsx)("main",{className:a.default.detailPage,children:(0,t.jsxs)("div",{className:a.default.detailPageInner,children:[(0,t.jsxs)("section",{className:a.default.detailPageHeader,children:[(0,t.jsx)("h1",{children:e}),d&&(0,t.jsx)("p",{children:d})]}),(0,t.jsx)("section",{className:a.default.detailPageContent,children:o})]})}),(0,t.jsx)(n.default,{})]})}e.s(["default",()=>d])},50218,e=>{e.v({editButton:"Study-module__TPG74q__editButton",modalBody:"Study-module__TPG74q__modalBody",modalContent:"Study-module__TPG74q__modalContent",modalFooter:"Study-module__TPG74q__modalFooter",modalInfo:"Study-module__TPG74q__modalInfo",paginationWrap:"Study-module__TPG74q__paginationWrap",studyModal:"Study-module__TPG74q__studyModal"})},23211,e=>{e.v({activePage:"Board-module__rEhx4a__activePage",boardTable:"Board-module__rEhx4a__boardTable",boardWrap:"Board-module__rEhx4a__boardWrap",checkboxColumn:"Board-module__rEhx4a__checkboxColumn",deleteButton:"Board-module__rEhx4a__deleteButton",empty:"Board-module__rEhx4a__empty",numberColumn:"Board-module__rEhx4a__numberColumn",pageButton:"Board-module__rEhx4a__pageButton",pagination:"Board-module__rEhx4a__pagination",searchInput:"Board-module__rEhx4a__searchInput",searchWrap:"Board-module__rEhx4a__searchWrap",toolbar:"Board-module__rEhx4a__toolbar",toolbarLeft:"Board-module__rEhx4a__toolbarLeft",toolbarRight:"Board-module__rEhx4a__toolbarRight",writeButton:"Board-module__rEhx4a__writeButton"})},28808,e=>{"use strict";var t=e.i(43476),a=e.i(71645),l=e.i(50218),n=e.i(1193),d=e.i(23211);function o({columns:e,data:a,onRowClick:l}){return(0,t.jsx)("div",{className:d.default.boardWrap,children:(0,t.jsxs)("table",{className:d.default.boardTable,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{className:d.default.checkboxColumn,children:(0,t.jsx)("input",{type:"checkbox"})}),(0,t.jsx)("th",{className:d.default.numberColumn,children:"번호"}),e.map(e=>(0,t.jsx)("th",{style:{width:e.width,textAlign:e.align||"left"},children:e.label},e.key))]})}),(0,t.jsx)("tbody",{children:a.length>0?a.map((a,n)=>(0,t.jsxs)("tr",{onClick:()=>l?.(a),children:[(0,t.jsx)("td",{className:d.default.checkboxColumn,onClick:e=>e.stopPropagation(),children:(0,t.jsx)("input",{type:"checkbox"})}),(0,t.jsx)("td",{className:d.default.numberColumn,children:a.id}),e.map(e=>(0,t.jsx)("td",{style:{textAlign:e.align||"left"},children:a[e.key]},e.key))]},n)):(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:e.length,className:d.default.empty,children:"게시글이 없습니다."})})})]})})}function c({title:e,search:a,onChangeSearch:l,onClickWrite:n,onClickDelete:o}){return(0,t.jsxs)("div",{className:d.default.toolbar,children:[(0,t.jsx)("div",{className:d.default.toolbarLeft,children:(0,t.jsx)("h2",{children:e})}),(0,t.jsxs)("div",{className:d.default.toolbarRight,children:[(0,t.jsx)("input",{type:"text",placeholder:"검색어를 입력하세요.",value:a,onChange:e=>l(e.target.value),className:d.default.searchInput}),(0,t.jsx)("button",{className:d.default.deleteButton,onClick:o,children:"삭제"}),(0,t.jsx)("button",{className:d.default.writeButton,onClick:n,children:"글쓰기"})]})]})}function i({currentPage:e,totalPage:a,onChangePage:l}){return a<=1?null:(0,t.jsxs)("div",{className:d.default.pagination,children:[(0,t.jsx)("button",{className:d.default.pageButton,onClick:()=>{e<=1||l(e-1)},disabled:1===e,children:"이전"}),Array.from({length:a},(a,n)=>{let o=n+1;return(0,t.jsx)("button",{className:e===o?d.default.activePage:d.default.pageButton,onClick:()=>l(o),children:o},o)}),(0,t.jsx)("button",{className:d.default.pageButton,onClick:()=>{e>=a||l(e+1)},disabled:e===a,children:"다음"})]})}var r=e.i(49289);let s=()=>new Date().toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\./g,"-").replace(/\s/g,"").slice(0,-1),u=[{title:"소프트웨어 생명주기",subject:"소프트웨어 설계",createdAt:s(),content:`
소프트웨어 생명주기(SDLC)
- 폭포수 모델
요구사항 분석 -> 설계 -> 구현 -> 테스트 -> 유지보수
==========================================
그 외 모델 : 
- 프로토타입 모델
- 나선형 모델
- 애자일 모델
        `},{title:"애자일 모델 + 나선형 모델",subject:"소프트웨어 설계",createdAt:s(),content:`
애자일 모델 :
빠르게 개발
짧은 주기 반복
고객 피드백
변화 대응
"애자일 = 빨리 만들고 계속 고친다"
==========================================
나선형 모델 :
위험 분석 중요
반복 개발
대규모 프로젝트 적합
비용 큼
계획 → 위험분석 → 개발 → 평가 반복
"나선형 = 돌면서 위험 분석"
        `},{title:"스크럼( Scrum )",subject:"소프트웨어 설계",createdAt:s(),content:`
스크럼은 애자일 방법론 중 하나
"스크럼 = 짧게 만들고 매일 공유"
==========================================
제품 책임자(PO)
스크럼 마스터(SM)
개발팀
"PO가 요구, SM이 관리, 팀이 개발"

        `},{title:"UI 설계 원칙",subject:"소프트웨어 설계",createdAt:s(),content:`
직관성
유효성
학습성
유연성
"직유학유"
        `},{title:"요구사항 검토 방법",subject:"소프트웨어 설계",createdAt:s(),content:`
동료검토(Peer Review) : 담담자끼리 검토
워크스루(Walkthrough) : 설명하면서 검토
인스펙션(Inspection) : 공식적으로 오류 검사
"동워인"
        `},{title:"현행 시스템 분석",subject:"소프트웨어 설계",createdAt:s(),content:`
현행 시스템 분석 :
구-구성 파악
기-기능 파악
인-인터페이스 파악
아-아키텍처 파악
소-소프트웨어 구성 파악
하-하드웨어 구성 파악
네-네트워크 구성 파악
"구기인아소하네"
        `},{title:"UML(Unified Modeling Language)",subject:"소프트웨어 설계",createdAt:s(),content:`
"UML = 객체지향 시스템을 시각적으로 표현"
목적
- 시스템 구조 표현
- 개발자 간 의사소통
- 설계 문서화
==========================================
UML 구성
- 구조 다이어그램 : 클래스,객체,컴포넌트,배치(클객컴배)
- 행위 다이어그램 : 유스케이스,시퀀스,활동,상태(유시활상)
        `},{title:"유스케이스 다이어그램",subject:"소프트웨어 설계",createdAt:s(),content:`
유스케이스 다이어그램 : 
사용자 입장에서 기능 표현

포함(include)
확장(extend)
일반화(generalization)
        `},{title:"클래스 다이어그램",subject:"소프트웨어 설계",createdAt:s(),content:`
클래스 다이어그램 : 
객체 구조와 관계 표현

클래스 구성요소 : 클래스명, 속성, 메서드
        `},{title:"시퀀스 다이어그램",subject:"소프트웨어 설계",createdAt:s(),content:`
시퀀스 다이어그램 : 
시간 순서대로 메시지 흐름

객체(Object)
생명선(Lifeline)
실행(Activation)
메시지(Message)
        `},{title:"설계 기법",subject:"소프트웨어 설계",createdAt:s(),content:`
- 하향식 설계기법 : 큰 것 -> 
- 상향식 설계기법
        `},{title:"요구사항 분석",subject:"소프트웨어 설계",createdAt:s(),content:`
요구사항 분석 내용입니다.
        `},{title:"요구사항 명세",subject:"소프트웨어 설계",createdAt:s(),content:`
요구사항 명세 정리입니다.
        `},{title:"인터페이스 설계",subject:"소프트웨어 설계",createdAt:s(),content:`
인터페이스 설계 정리입니다.
        `},{title:"소프트웨어 설계 원칙",subject:"소프트웨어 설계",createdAt:s(),content:`

        `},{title:"UI 표준",subject:"소프트웨어 설계",createdAt:s(),content:`
UI 표준 정리입니다.
        `},{title:"객체지향 설계",subject:"소프트웨어 설계",createdAt:s(),content:`
객체지향 설계 정리입니다.
        `},{title:"디자인 패턴",subject:"소프트웨어 설계",createdAt:s(),content:`
디자인 패턴 정리입니다.
        `},{title:"MVC 패턴",subject:"소프트웨어 설계",createdAt:s(),content:`
MVC 패턴 설명입니다.
        `},{title:"애플리케이션 아키텍처",subject:"소프트웨어 설계",createdAt:s(),content:`
애플리케이션 아키텍처 정리입니다.
        `},{title:"자료 구조 개념",subject:"소프트웨어 개발",createdAt:s(),content:`
자료구조 기본 개념입니다.
        `},{title:"스택(Stack)",subject:"소프트웨어 개발",createdAt:s(),content:`
스택 자료구조 설명입니다.
        `},{title:"큐(Queue)",subject:"소프트웨어 개발",createdAt:s(),content:`
큐 자료구조 설명입니다.
        `},{title:"정규화",subject:"데이터베이스 구축",createdAt:s(),content:`
정규화(Normalization)

목적 :
데이터 중복 제거
무결성 유지
이상현상 방지

1정규형 :
원자값만 저장

2정규형 :
부분 함수 종속 제거

3정규형 :
이행 함수 종속 제거
        `},{title:"자바스크립트",subject:"프로그래밍 언어",createdAt:s(),content:`
자바스크립트(JavaScript)    
- 웹 개발의 핵심 언어
- 동적 타이핑
- 객체 기반 
- 이벤트 기반 프로그래밍
- 다양한 프레임워크와 라이브러리 존재 (React, Angular, Vue 등)
        `},{title:"파이썬",subject:"프로그래밍 언어",createdAt:s(),content:`
파이썬(Python)    
- 간결하고 읽기 쉬운 문법
- 다양한 용도 (웹 개발, 데이터 과학, 인공지능 등)
- 풍부한 라이브러리와 프레임워크 (Django, Flask, TensorFlow 등)
        `},{title:"자바",subject:"프로그래밍 언어",createdAt:s(),content:`
자바(Java)
- 객체 지향 프로그래밍 언어
- 플랫폼 독립적 (JVM 사용)
- 대규모 애플리케이션 개발에 적합
- 풍부한 라이브러리와 프레임워크 (Spring, Hibernate 등)
        `}].map((e,t)=>({id:t+1,...e}));function _(){let[e,d]=(0,a.useState)(""),[s,_]=(0,a.useState)(null),[h,m]=(0,a.useState)(!1),j=u.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())),[b,x]=(0,a.useState)(1),g=Math.ceil(j.length/7),p=j.slice((b-1)*7,7*b);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.default,{title:"(임시) 정보처리기사 공부방",description:"5/24 정보처리기사 시험 준비방입니다.",children:[(0,t.jsx)(c,{title:"공부 게시판",search:e,onChangeSearch:d,onClickDelete:()=>{alert("삭제 기능 미구현")},onClickWrite:()=>{alert("글쓰기 기능 미구현")}}),(0,t.jsx)(o,{columns:[{key:"title",label:"제목",width:"60%"},{key:"subject",label:"과목",width:"20%",align:"center"},{key:"createdAt",label:"등록일",width:"20%",align:"center"}],data:p.map(e=>({...e,createdAt:(e=>{let[t,a,l]=e.split("-");return`${t}-${a.padStart(2,"0")}-${l.padStart(2,"0")}`})(e.createdAt)})),onRowClick:e=>{_(e),m(!0)}}),(0,t.jsx)("div",{className:l.default.paginationWrap,children:(0,t.jsx)(i,{currentPage:b,totalPage:g,onChangePage:e=>{x(e)}})})]}),(0,t.jsx)(r.default,{open:h,onClose:()=>m(!1),title:s?.title,className:l.default.studyModal,children:s&&(0,t.jsxs)("div",{className:l.default.modalContent,children:[(0,t.jsxs)("div",{className:l.default.modalInfo,children:[(0,t.jsxs)("span",{children:["과목 :",s.subject,","]}),(0,t.jsxs)("span",{children:["작성일 :",s.createdAt]})]}),(0,t.jsx)("div",{className:l.default.modalBody,children:s.content}),(0,t.jsx)("div",{className:l.default.modalFooter,children:(0,t.jsx)("button",{className:l.default.editButton,onClick:()=>{alert("수정 기능 준비중")},children:"수정"})})]})})]})}e.s(["default",()=>_],28808)}]);