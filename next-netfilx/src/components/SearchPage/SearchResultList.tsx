import { useRef } from "react";

import Image from "next/image";
import styled, {keyframes} from "styled-components";
import { AnimatePresence, motion, useInView } from "framer-motion";

import play_circle from "../../../public/SearchPage/play-circle.svg";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null; // poster_path가 null일 수 있음
}
// 개별 아이템을 위한 컴포넌트
const AnimatedListItem = ({ movie }: { movie: Movie }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: false,
    amount: 0.9,
    margin: "0px 0px 50% 0px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {/*포스터가 있을 때만 렌더링... 없으면 보기 안 좋아서 삭제*/}
       {movie.poster_path && (
        <ListItem
          ref={itemRef}
          layoutId={`${movie.id}`}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
        >
          <StyledLink href={`/main/detail/${movie.id}`}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            <Title>{movie.title}</Title>
            <ImageWrapper>
              <Image src={play_circle} alt="play button" />
            </ImageWrapper>
          </StyledLink>
        </ListItem>
      )}
    </AnimatePresence>
  );
};
const SearchResultList: React.FC<{ results: Movie[]; isLoading: boolean }> = ({
  results,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <ListContainer>
        <TopSearches>Loading...</TopSearches>
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonItem key={index}>
            <SkeletonPoster />
            <SkeletonTitle />
          </SkeletonItem>
        ))}
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <TopSearches>Top Searches</TopSearches>
      {results.map((movie) => (
        <AnimatedListItem key={movie.id} movie={movie} />
      ))}
    </ListContainer>
  );
};

export default SearchResultList;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const TopSearches = styled.p`
  font-size: 26.75px;
  font-weight: 700;
  color: white;
  margin: 15px;
`;

const ListItem = styled(motion.li)`
  width: 100%;
  background-color: #424242;
  margin-bottom: 5px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;

const Poster = styled(motion.img)`
  min-width: 146px;
  height: 76px;
  border-radius: 2px;
  object-fit: cover;
  margin-right: 15px;
`;

const Title = styled.span`
  font-size: 14.72px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
`;

const wave = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// 웨이브 애니메이션 스타일
const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  background-color: #424242;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  animation: ${wave} 1.5s infinite linear; /* 애니메이션을 keyframes로 설정 */
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%);
  background-size: 200% 100%;
`;

const SkeletonPoster = styled.div`
  width: 146px;
  height: 76px;
  background-color: #5c5c5c;
  border-radius: 2px;
  margin-right: 15px;
`;

const SkeletonTitle = styled.div`
  width: 50%;
  height: 16px;
  background-color: #5c5c5c;
  border-radius: 4px;
`;