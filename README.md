## 📚 과제

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 [인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요.

> Best Practice란 팀원들이 각자의 구현 방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것
> 

## 🚀실행 방법

```jsx
$ npm install
$ npm start
```

### 동작 영상
<img width='450px' src='https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/assets/72495998/43499e3b-47e2-4cec-9478-222e6b07ada9' alt='원티드-18팀-1차과제' />


## 🔥 과제 수행 방식

- 협업 Tool 선정
- 사전에 수행한 과제 리뷰 및 구현 방법 발표
- 환경 설정 및 팀 컨벤션 결정 (EsLint / Prettier)
- Best Practice 선정을 위한 논의 사항 토론 및 Best Practice 도출
- Best Practice 기반 리팩토링
- 리팩토링 코드 리뷰 및 재토론
- 최종 결과물 도출

## 🔧 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/awsamplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white"> <img src="https://img.shields.io/badge/emotion-FE5196?style=for-the-badge&logo=emotion&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

## 🔨 협업 Tool

<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

- 팀 컨벤션, 회의 내용 기록
- 각자 과제에 대한 설명 및 기술
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

- 회의 및 공지
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

- 이슈 작성 및 코드 리뷰

## 🎈 Best Practice 선정

- [Todo-List](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/13)
- [로그인 / 회원가입](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/12)
- [API 설정 : api.ts, authApi.ts, todoApi.ts 파일 생성](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/11)
- [커스텀 훅 및 유틸 함수 사용](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/10)
- [폴더 구조 아키텍쳐 생성](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/9)
- [라우팅 설정](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/8)
- [emotion 설치 및 글로벌 css 설정](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/7)
- [ eslint, pretteir, husky, lint-staged 설정](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/6/)

## ❓ 기타 변경사항

- [회원가입/로그인 유효성 검사 메세지 분리 & div태그를 시멘틱 태그로 변경](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues/17)

## ✅ 팀 컨벤션
- 브랜치 형식
    
    ```jsx
    main
    |_dev
    	|_feature/a
    	|_feature/b
    	|_feature/c
    ```
    
-  커밋 컨벤션
    | feat | 새로운 기능을 추가할 경우 |
    | --- | --- |
    | fix | 버그를 고친 경우 |
    | docs | 문서를 수정한 경우 |
    | style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
    | refactor | 프로덕션 코드 리팩토링 |
    | test | test 관련한 코드의 추가, 수정한 경우 |
    | design | CSS 등 사용자 UI 디자인 변경 |
    | comment | 필요한 주석 추가 및 변경 |
    | rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
    | remove | 파일을 삭제하는 작업만 수행한 경우 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
