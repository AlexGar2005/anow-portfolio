type NewsProps = {
    address: string;
    date: string;
    title: string;
}

const NewsCard = ({address, date, title}:NewsProps) => {
  return (
    <div className="w-full 1.5xl:block xl:flex flex-col gap-2">
        <img src={`${address}`} alt="" className="w-full"/>
        <div className="flex md:justify-normal pad:justify-between mob:justify-between ultra:my-6 2xl:my-4 xl:my-2 md:my-1 items-center md:m-0 pad:m-2 pad:mb-1 mob:m-1 md:mb-0 sm:mb-1 gap-4">
            <div className="flex xl:gap-4 lg:gap-2 md:gap-1 sm:gap-4 pad:gap-3 mob:gap-2 text-[#FD8558]">
                <span className="ultra:text-xl 2xl:text-[1rem] md:text-[0.875rem]  tracking-[0.04em] font-[300]">lifestyle </span>
                <span className="ultra:text-xl 2xl:text-[1rem] md:text-[0.875rem]  tracking-[0.04em] font-[300]"> design</span>
            </div>
            <div className="flex items-center lg:gap-2 md:gap-1 pad:gap-2 mob:gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
                <span className="text-gray-400 ultra:text-xl 2xl:text-[1rem] lg:text-[0.875rem] md:text-[0.8rem] font-[200]">{date}</span>
            </div>
        </div>
        <h1 className="text-[#222222] ultra:text-4xl 2xl:text-3xl 2xl:leading-[2.25rem] 1.5xl:text-[1.6rem] 1.5xl:leading-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] md:text-[1.2rem] sm:text-[1.6rem] pad:text-[1.4rem] mob:text-[1.2rem] xl:leading-[2rem] lg:leading-[1.7rem] md:leading-[1.5rem] font-[300] 2xl:mr-24 1.5xl:mr-8  ultra:mb-6 2xl:mb-4 1.5xl:mb-2 xl:my-0 pad:my-1 md:ml-0 pad:ml-2 mob:ml-1">{title}</h1>
        <span className="text-[#fd8558] ultra:text-xl 2xl:text-[1rem] md:text-[0.875rem] tracking-[0.04em] font-[300] md:ml-0 pad:ml-2 mob:ml-1">view more</span>
    </div>
  )
}

export default NewsCard