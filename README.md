# Netflix Clone Project

    site : https://ranjafunc.github.io/netflix_clone/

## Tech

    React, Context Api, React-router-dom, React-slick, Firebase

## Route 구성

    1.  Home 페이지
    2.  로그인 페이지
    3.  회원가입 페이지
    4.  Browse 페이지 (로그인 후 시청서비스 제공하는 페이지)

### 📃 Home 페이지

<img src="https://i.imgur.com/lGCqAKR.jpg">

### 📃 로그인 페이지

    firebase auth를 통한 로그인 인증

<img src="https://i.imgur.com/Ae0LjcR.png">

### 📃 회원가입 페이지

    firebase auth를 통한 회원가입

<img src="https://i.imgur.com/V46N4g4.png">

### 📃 Browse 페이지

    - tech : context api, firebase database
    - state : 유저, 유저 관련 영화 데이터, 정보 (좋아요, 싫어요, 내가 찜한 콘텐츠)
    - private : 로그인 인증없이 접속 불가 설정
    - keyword에 맞춰 액션영화, 로맨스영화, 내가 찜한 영화 등등으로 데이터 처리한 슬라이드 나열

<p><img src="https://i.imgur.com/8QviJ40.jpg"></p>

#### 🎇 Video 컴포넌트

    - state : 재생(Watch 컴포넌트 렌더), 내가 찜한 콘텐츠, 좋아요, 싫어요
    - props : 장르, 평점, 시청 연령

<p><img src="https://i.imgur.com/3AdbUEP.jpg"></p>

#### 🎇 Watch 컴포넌트

    비디오 UI 구현
    - Video 컴포넌트의 data 상속
    - 재생, 정지, 볼륨조절, 시간 선택, 확대 기능

<p><img src="https://i.imgur.com/xl5JxwJ.jpg"></p>

## 🤣 배포

    gh-pages
