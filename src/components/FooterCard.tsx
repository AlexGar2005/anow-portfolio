type FooterProps = {
    title: string;
    colFi: string;
    colS: string;
    colT: string;
    colFo: string;
}

const FooterCard = ({title, colFi, colS, colT, colFo}:FooterProps) => {
  return (
    <div className="md:my-0 pad:my-2">
        <h1 className="text-white 2xl:text-4xl lg:text-2xl pad:text-xl mob:text-xl">{title}</h1>
        <div className="flex flex-col 2xl:gap-2  sm:gap-1 2xl:text-base mt-4">
            <span className="text-white opacity-60">{colFi}</span>
            <span className="text-white opacity-60">{colS}</span>
            <span className="text-white opacity-60">{colT}</span>
            <span className="text-white opacity-60">{colFo}</span>
        </div>
    </div>
  )
}

export default FooterCard