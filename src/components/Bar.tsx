type BarProps = {
    title: string;
    description: string;
    progress: string;
}

const Bar = ({title, progress, description}: BarProps) => {
  return (
    <div>
        <div className="flex justify-between items-center mb-2">
            <h1 className="2xl:text-3xl 1.5xl:text-3xl xl:text-2xl md:text-xl pad:text-2xl mob:text-2xl font-[300] text-[#222222] tracking-wide">{title}</h1>
            <p className="text-[999999] xl:text-xl font-[300]">{description}</p>
        </div>
        <div className="bg-[#EEEEEE]">
            <div className={`lg:h-[13px] pad:h-[10px] mob:h-[10px] ${progress} gradient`}></div>
        </div>
    </div>
  )
}

export default Bar