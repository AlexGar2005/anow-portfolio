type TeamProps = {
    address: string;
    title: string;
    career: string;
}

const TeamCard = ({address, title, career}: TeamProps) => {
  return (
    <div className="relative">
        <img src={`${address}`} alt="" className="w-full" />
        <div className="absolute ultra:top-44 sm:top-[45%] pad:top-[50%] mob:top-[50%]  w-full translate-x-[-50%] left-[50%] text-center text-white  ">
            <h1 className="1.5xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl pad:text-4xl mob:text-3xl font-[200]">{title}</h1>
            <p className="xl:text-2xl lg:text-xl md:text-base sm:text-xl pad:text-2xl mob:text-2xl font-[200]">{career}</p>
        </div>
    </div>
  )
}

export default TeamCard