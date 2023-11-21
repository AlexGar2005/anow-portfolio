

const Quote = () => {
  return (
    <div className="1.5xl:my-[10rem] xl:my-[8rem] lg:my-[6rem] md:my-[4rem] sm:my-[2rem] sm:mb-[4rem] ultra:mx-[30rem] 2xl:mx-[20rem] 1.5xl:mx-[15rem] xl:mx-[10rem] lg:mx-[6rem] md:mx-[1rem] flex sm:flex-row pad:flex-col mob:flex-col 2xl:gap-16 1.5xl:gap-10 xl:gap-8 lg:gap-6 md:gap-4">
        <img src="IMAGE.png" alt="/" className="1.5xl:w-[150%] xl:w-[120%] lg:w-[100%]" />
        <div className="flex flex-col justify-between sm:items-start pad:items-center mob:items-center 2xl:py-[4rem] 2xl:pt-0 1.5xl:pt-[2rem] xl:pt-[1rem] md:p-0 sm:p-2 sm:pb-0 sm:my-0 pad:my-4 mob:my-3 mob:mx-[.5rem]">
            <h2 className="2xl:text-4xl 1.5xl:text-3xl xl:text-2xl lg:text-xl sm:text-base pad:text-xl font-[300] tracking-wide sm:text-start pad:text-center mob:text-center">“ Our mission is to produce the <span className="text-[#FD8558] italic">highest quality</span> work for every clients, on every project with full of energy we have ”</h2>
            <div className="flex flex-col 2xl:gap-4 1.5xl:gap-2 sm:items-start pad:items-center mob:items-center sm:mt-0 pad:mt-4 mob:mt-3">
                <h3 className="2xl:text-3xl xl:text-2xl lg:text-xl sm:text-base pad:text-xl mob:text-xl  tracking-wide">Frankie Kao</h3>
                <span className="tracking-wide 2xl:text-xl text-[#CACACA]">ART DIRECTOR PAO</span>
            </div>
        </div>
    </div>
  )
}

export default Quote