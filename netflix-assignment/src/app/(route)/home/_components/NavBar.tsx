import Logo from '@/public/svg/home-logo.svg';

export default function NavBar() {
  return (
    <nav className='fixed top-[24px] w-[338px] h-[57px] flex justify-between items-center'>
      {[<Logo/>, "TV Shows", "Movies", "My List"].map((item, index) => (
            <button
              key={index}
              className="text-white text-[17.2px] font-normal hover:text-[#8C8787]"
            >
              {item}
            </button>
          ))}
    </nav>
  );
}
