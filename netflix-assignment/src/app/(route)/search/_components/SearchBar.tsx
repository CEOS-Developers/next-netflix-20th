import SearchBarIcon from '../../../../public/svg/SearchBar.svg'
import Close from '../../../../public/svg/Close.svg'

export default function SearchBar() {
  return (
      <section className="w-full mt-11 px-5 h-[52px] bg-[#424242] flex justify-between items-center">
        <SearchBarIcon />
          <input
              placeholder='Search for a show, movie, genre, e.t.c.'
              className='flex-1 mx-5 focus:outline-none bg-transparent text-[#C4C4C4] placeholder:text-[#C4C4C4]'>
          </input>
        <Close/>
    </section>
  );
}
