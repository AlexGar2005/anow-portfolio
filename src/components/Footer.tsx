import FooterCard from "./FooterCard"


const Footer = () => {
  return (
    <div className="md:grid grid-cols-footer pad:flex pad:flex-col  xl:gap-0 lg:gap-2 bg-[#111111] xl:py-24 lg:py-16 md:py-10 sm:py-0 pad:py-4 mob:py-4 2xl:px-[20rem] 1.5xl:px-[15rem] xl:px-[10rem] lg:px-[6rem] md:px-[1rem] sm:mt-0 pad:mt-4">
        <div className="relative 2xl:bottom-4 xl:bottom-2">
            <h1 className="text-white 2xl:text-6xl 1.5xl:text-5xl xl:text-4xl md:text-3xl sm:text-5xl pad:text-4xl mob:text-3xl font-[400] md:text-start pad:text-center mob:text-center">anow</h1>
            <div className="text-white opacity-60 2xl:mt-4 1.5xl:mt-3 sm:mt-2 2xl:gap-4 lg:gap-2 md:gap-0 pad:gap-2 mob:gap-1 flex lg:flex-row md:flex-col md:justify-normal pad:justify-center mob:justify-center text-base ">
                <span>+(0712) 819 79 555 |</span>
                <span>M: info@example.com</span>
            </div>
        </div> 
        <div className="flex xl:justify-between lg:justify-end md:justify-normal pad:justify-around mob:justify-center mob:grid mob:grid-cols-2 mob:mx-10 xl:gap-0 lg:gap-12 md:gap-8 md:my-0 sm:my-4 pad:my-3 mob:my-6 mob:gap-8">
            <FooterCard title={"Home"} colFi={"Home Portfolio"} colS={"Home Agency"} colT={"Home Architecture"} colFo={"Home Testimonials"} />
            <FooterCard title={"Portfolio"} colFi={"Masonry Portfolio"} colS={"Grid Portfolio"} colT={"Metro Portfolio"} colFo={"Service Details"} />
            <FooterCard title={"Blog"} colFi={"Blog Style 1"} colS={"Blog Style 2"} colT={"Blog Style 3"} colFo={"Licensing"} />
        </div>    
    </div>
  )
}

export default Footer