import Play from '../../../../public/svg/Play.svg'

export default function SearhedMovie() {
  return (
    <section className="w-full mt-4">
          <h2 className="text-[26.75px] font-bold mb-[21px] ml-[10px]">Top Searches</h2>
          <div className='flex justify-between items-center h-[76px] mb-[3px] pr-3 bg-[#424242]'>
            <div className='w-[146px] h-[76px] bg-orange-500'>
                IMG
            </div>
            <div className='text-[14.72px]'>
                Citation
            </div>
            <Play/>
          </div>
    </section>
  );
}