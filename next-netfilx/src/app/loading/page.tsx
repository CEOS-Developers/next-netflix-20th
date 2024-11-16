"use client"
import ClientLayout from "../clientLayout";
import styled, { keyframes } from "styled-components";

const LoadingPage = () => {
  return (
    <ClientLayout>
        <PageContainer>
            <LoadingPageLayout>
            This page is under preparation. 😭
            <Spinner/>
        </LoadingPageLayout>
        </PageContainer>
    </ClientLayout>
  );
};

export default LoadingPage;

const LoadingPageLayout = styled.main`
  margin: auto;
`;

// 로딩 애니메이션 keyframes
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 30px auto; /* 스피너를 가운데 정렬 */
`;

const PageContainer = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto; /* 전체 화면이 아닌 부모 요소 내에서 스크롤 가능하게 설정 */
  background-color: black;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;