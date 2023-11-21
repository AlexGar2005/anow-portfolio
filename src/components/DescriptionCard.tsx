type CardProps = {
    title: string;
    address: string;
    background: string;
    text: string;
}

const DescriptionCard = ({title, address, background, text}:CardProps) => {
  return (
    <div className="grid xl:grid-rows-images lg:grid-rows-images-lg md:grid-rows-images-md md:gap-[0] pad:gap-1 items-center 2xl:mx-16 ">
        <div className="flex h-[100%] items-center overflow-y-hidden justify-center">
            <div className={`2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 sm:w-10 sm:h-10 pad:h-16 pad:w-16 mob:h-14 mob:w-14 ${background} rounded-full z-0`}></div>
            <img src={`${address}`} alt="" className="z-10 2xl:w-auto lg:w-12 sm:w-10 pad:w-16 mob:w-14 relative lg:right-[35px] md:right-[25px] sm:right-[20px] pad:right-[35px] mob:right-[35px] lg:top-[10px]"/>
        </div>
        <h1 className="font-[300] 1.5xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-base pad:text-2xl mob:text-2xl  2xl:my-2 text-center">{title}</h1>
        <p className="text-center 1.5xl:text-base lg:text-sm sm:text-xs text-[#999999]">{text}</p>
    </div>
  )
}

export default DescriptionCard