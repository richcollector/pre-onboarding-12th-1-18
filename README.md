## 📚 과제

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 [인턴십 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요.

> Best Practice란 팀원들이 각자의 구현 방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것
> 

## 🚀실행 방법

```jsx
$ npm install
$ npm start
```

✌️ 개인의 서버에 올린 작업물로 2023년 10월부터는 접속이 불가 할 수 있는 점 양해바랍니다.

[배포된 팀 프로젝트 - Todo-List](https://main.d38gez3r418jap.amplifyapp.com/)

- 동작 영상

## 🔥 과제 수행 방식

- 협업 Tool 선정
- 사전에 수행한 과제 리뷰 및 구현 방법 발표
- 환경 설정 및 팀 컨벤션 결정 (EsLint / Prettier)
- Best Practice 선정을 위한 논의 사항 토론 및 Best Practice 도출
- Best Practice 기반 리팩토링
- 리팩토링 코드 리뷰 및 재토론
- 최종 결과물 도출

## 🔨 협업 Tool

---

- 노션
    - 팀 컨벤션, 회의 내용 기록
    - 각자 과제에 대한 설명 및 기술
- 디스코드
    - 회의 및 공지

## 🎈 Best Practice 회의

---

- eslint, pretteir, husky, lint-staged 설정
- emotion 설치 및 글로벌 css 설정
- 라우팅 설정
- 폴더 구조 아키텍쳐 생성
- 커스텀 훅 및 유틸 함수 사용
- API 설정 : api.ts, authApi.ts, todoApi.ts 파일 생성
- 로그인 / 회원가입
- Todo-List

[세부 논의 사항 참고 이슈](https://github.com/preOnBorading-Idle/pre-onboarding-12th-1-18/issues)

## ❓ 기타 변경사항

- div 태그 → 시멘틱 태그로 변경

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
