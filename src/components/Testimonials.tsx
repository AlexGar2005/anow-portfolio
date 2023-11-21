

const Testimonials = () => {
  return (
    <div className="1.5xl:py-[10rem] xl:py-[7rem] lg:py-[6rem] 1.5xl:px-[8rem]  bg-[#3A0F73]">
        <h1 className="ultra:text-[24rem] 2xl:text-[18rem] 1.5xl:text-[14rem] xl:text-[12rem] lg:text-[10rem] md:text-[8rem] sm:text-[6rem] pad:text-[5rem] mob:text-[4rem] lg:mt-[-4rem] md:mt-[-2rem] text-center 2xl:leading-[19rem] 1.5xl:leading-[14rem] xl:leading-[12rem] md:leading-[10rem] sm:leading-[8rem] pad:leading-[6rem] text-[#aaaaaa] opacity-10 tracking-wide">testimonials</h1>
        <div className="flex flex-col 2xl:gap-12 1.5xl:gap-6 2xl:mt-20 1.5xl:mt-12 xl:mt-8 lg:mt-6 ultra:mx-[32rem] 2xl:mx-[20%] lg:mx-[15%] md:mx-[10%] sm:mx-0 pad:mx-[5%] mob:mx-[2%] text-center text-white">
            <p className="2xl:text-3xl 1.5xl:text-2xl xl:text-xl sm:text-base pad:text-sm mob:text-sm font-[200]">What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design. What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design.</p>
            <div className="flex justify-center items-center 1.5xl:mt-0 lg:mt-8 pad:mt-4 mob:mt-3">
                <img src="ceo.png" alt="/" className="md:w-[125px] sm:w-[100px]"/>
                <div className="text-start">
                    <h4 className="xl:text-xl tracking-wide font-[300]">Sophie Nguyen</h4>
                    <span className="xl:text-xl tracking-wide font-[200]">CEO</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials