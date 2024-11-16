# 6주차 미션: Next-Netflix
죄송해요 ㅠㅠ 제가 지난 주에 5주차라고 올렸어야 하는데 6주차로 올렸어요 🥲. 이번 과제가 6주차가 맞으며, 제출할 때에도 [6주차 뭐시기 제출합니다~] 이렇게 해주시면 됩니다.

## 서론

안녕하세요, 프론트 운영진 **김승완**입니다 🐶🍮

이번주는 저번주 과제를 이어 Netflix를 완성해봅시다(나머지 페이지 모두 완성). 이번주 과제의 목표는 지난주에 이어 figma로 주어지는 디자인을 사용해 스타일링을 하는 방법과 SSR에 익숙해지는 것입니다. 추가적으로 성능 최적화 방법에 대해서도 생각해보는 것도 좋을 것 같습니다.

이번주도 화이팅입니다~!!💪

## 미션

### 미션 목표

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.
- 프론트엔드와 백엔드 시스템에 대한 흐름을 이해합니다.

### 기한

- 2024년 11월 16일 토요일(기한 엄수)

### 필수 요건

- [결과화면](https://next-netflix-18th-2.vercel.app/)의 상세 페이지와 검색 페이지를 구현합니다.
    - 상세 페이지는 동적 라우팅을 이용해 구현합니다.
    - 검색 페이지는 실시간 키워드 검색으로 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- **SSR**을 적용해서 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))

### 선택 사항

- 검색 페이지 **무한스크롤**을 구현합니다.
- 검색 페이지 스켈레톤 컴포넌트를 구현합니다.
- 성능 최적화를 위한 방법을 적용해봅니다.

## **Key Question**

- 무한 스크롤과 `Intersection Observer API`의 특징에 대해 알아봅시다.
- `tanstack query`의 사용 이유(기존의 상태 관리 라이브러리와는 어떻게 다른지)와 사용 방법(reactJS와 nextJS에서)을 알아봅시다.
- 기본적인 git add, commit, push, pull, merge, rebase 등의 명령어에 대해 알아봅시다(+ git branch 전략이나 다른 git 명령어도 좋습니다!)

## 링크 및 참고자료

- [useCallback과 React.Memo를 이용한 렌더링 최적화](https://velog.io/@yejinh/useCallback%EA%B3%BC-React.Memo%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94)
- [성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
- [더 나은 UX를 위한 스켈레톤 UI 만들기](https://ui.toast.com/weekly-pick/ko_20201110)
- [React에서 무한 스크롤 구현하기](https://tech.kakaoenterprise.com/149)
- [React 18의 새로운 기능](https://www.youtube.com/watch?v=7mkQi0TlJQo)
- [react 서버 컴포넌트가 해결하는 문제들 in kakao 기술 블로그](https://tech.kakaopay.com/post/react-server-components/)
- [vercel의 배포 방식](https://www.youtube.com/watch?v=8q-jCvLWwKc&t=11s)
- [클라우드 전반의 이해](https://www.youtube.com/watch?v=YSudWlx0o9I)
- [협업을 위한 git branch 전략](https://www.youtube.com/watch?v=wtsr5keXUyE)
- [intersection Observer API 알아보기](https://www.youtube.com/watch?v=iZhq7I42uaI)
- [intersection Observer API 블로그 포스팅](https://www.heropy.dev/p/ydKoQO)