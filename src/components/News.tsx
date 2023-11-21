import NewsCard from "./NewsCard"


const News = () => {
  return (
    <div className="2xl:my-24 1.5xl:my-12 md:my-8 pad:my-6 mob:my-4 2xl:mx-[20rem] 1.5xl:mx-[15rem] xl:mx-[10rem] lg:mx-[6rem] md:mx-[.5rem]">
        <div className='text-center sm:mb-12 pad:mb-8'>
            <span className='2xl:text-xl tracking-wide text-[#FD8558]'>THE DAILY PLANET</span>
            <h1 className='2xl:mt-16 1.5xl:mt-10 sm:text-5xl pad:text-4xl mob:text-3xl font-[300] tracking-wide'>our interactive news</h1>
        </div>
        <div className="flex md:flex-row pad:flex-col mob:flex-col justify-center xl:gap-16 lg:gap-8 pad:gap-4 mob:gap-3 mob:mt-3">
            <NewsCard address={"news-1.png"} date={"March 11, 2022"} title={"insights from interviewing the community"} />
            <NewsCard address={"news-2.png"} date={"June 24, 2023"} title={"excelent company and opportunities"} />
            <NewsCard address={"news-3.png"} date={"November 4, 2023"} title={"ways to increase your website"} />
        </div>
    </div>
  )
}

export default News