import Plus from '@/public/svg/Plus.svg';
import Info from '@/public//svg/Info.svg';
import RightArrow from '@/public//svg/RightArrow.svg';

export default function Span() {
    return (
        <div className='mt-[13px] w-[259px] h-[45px] flex justify-between items-center'>
            <button className='w-[41px] text-white flex flex-col items-center hover:text-[#8C8787]'>
                <Plus className='stroke-current'/>
                <p className='w-[100vw] text-[13.64px] font-normal text-center'>My List</p>
            </button>
            <button className='w-[110.63px] h-full bg-[#C4C4C4] rounded-[5.63px] flex justify-center items-center gap-[15px] text-black hover:bg-[#8C8787]'>
                <RightArrow className='stroke-current '/>
                <p className='text-[20.46px] font-semibold'>Play</p>
            </button>
            <button className='w-[41px] text-white flex flex-col items-center hover:text-[#8C8787]'>
                <Info className='stroke-current'/>
                <p className='text-[13.64px] font-normal text-center'>Info</p>
            </button>
      </div>
    );
}
