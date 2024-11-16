import Header from './_components/Header';
import MovieCategory from './_components/MovieCategory';
import NavBar from './_components/NavBar';
import Preview from './_components/Preview';
import Span from './_components/Span';
import TvCategory from './_components/TvCategory';


export default function Home() {

  return (
    <div className='relative w-full h-auto pb-[80px] flex flex-col items-center'>
      <Header/>
      <NavBar/>
      <Span/>
      <Preview/>
      <MovieCategory />
      <TvCategory />
    </div>
  );
}
