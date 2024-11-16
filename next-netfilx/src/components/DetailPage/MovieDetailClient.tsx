"use client";
import { Suspense } from "react";
import styled from "styled-components";
import PlayIcon from "../../../public/PlayIcon";
import { motion } from "framer-motion";
import { Movie } from "../MainPage/MovieCategoriesList";

interface MovieDetail extends Movie {
  backdrop_path: string;
  vote_average: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function MovieDetailClient({ data }: { data: MovieDetail }) {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <BigWrapper
        layoutId={`${data.id}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ImageWrapper
          whileHover={{ scale: 1.1 }}
          variants={itemVariants}
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        />
        <BottomWrapper>
          <PlayButtonWrapper
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <PlayIcon />
          </PlayButtonWrapper>
          <motion.h2 variants={itemVariants} whileHover={{ scale: 1.1 }}>
            Previews
          </motion.h2>
          <motion.span variants={itemVariants} whileHover={{ scale: 1.1 }}>
            {data.overview}
          </motion.span>
        </BottomWrapper>
      </BigWrapper>
    </Suspense>
  );
}
const BigWrapper = styled(motion.div)`
  width: 375px;
  height: 100vh;
  background-color: black;
  margin: 0 auto;
  overflow: hidden;
`;
const ImageWrapper = styled(motion.div)<{ src: string }>`
  width: 100%;

  height: 50vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
`;

const PlayButtonWrapper = styled(motion.div)`
  width: 90%;
  text-align: center;
  padding: 8px 0;
  background-color: #c4c4c4;
  border-radius: 5px;
  display: inline-block;
  z-index: 999;
`;

const BottomWrapper = styled(motion.div)`
  margin: 0 auto;
  padding-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: visible;

  & h1 {
    margin-top: 7px;
  }

  & span {
    font-size: 11px;
    font-weight: 400;
  }
`;
