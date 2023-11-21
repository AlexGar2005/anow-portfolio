import Button from "./Button"


const Info = () => {
  return (
    <div className="flex md:flex-row pad:flex-col mob:flex-col md:my-24 sm:my-12 mob:my-4 2xl:mx-[20rem] 1.5xl:mx-[15rem] xl:mx-[10rem] lg:mx-[6rem] md:mx-[.5rem] sm:mx-[2rem] pad:mx-[1rem] mob:mx-[0.5rem] justify-between">
        <div className="flex md:flex-col md:justify-normal pad:flex-row pad:justify-between mob:flex-row mob:justify-between">
            <div>
                <span className="text-[#222222] font-[200] 2xl:text-3xl 1.5xl:text-2xl md:text-xl sm:text-2xl tracking-wide">address</span>
                <h1 className="text-[#222222] tracking-wide 2xl:text-[3rem] 1.5xl:text-[2.25rem] xl:text-[2rem] lg:text-[1.85rem] sm:text-[1.7rem] mob:text-[1.2rem]  font-[300] xl:mr-24 mb-2 2xl:leading-[3.5rem] xl:leading-[2.5rem] lg:leading-[2rem] sm:leading-[1.8rem] mob:leading-[1.4rem] md:mt-0 sm:mt-4">14 tottenham road,</h1>
                <h1 className="text-[#222222] tracking-wide 2xl:text-[3rem] 1.5xl:text-[2.25rem] xl:text-[2rem] lg:text-[1.85rem] sm:text-[1.7rem] mob:text-[1.2rem] font-[300] xl:mr-24 mb-6 2xl:leading-[3.5rem] xl:leading-[2.5rem] lg:leading-[2rem] sm:leading-[1.8rem] mob:leading-[1.4rem]">london, england</h1>
            </div>
            <div className="2xl:mt-16">
                <span className="text-[#222222] font-[200] 2xl:text-3xl 1.5xl:text-2xl md:text-xl sm:text-2xl tracking-wide">information</span>
                <h1 className="text-[#222222] tracking-wide 2xl:text-[3rem] 1.5xl:text-[2.25rem] xl:text-[2rem] lg:text-[1.85rem] sm:text-[1.7rem] mob:text-[1.2rem] font-[300] xl:mr-24 mb-2 2xl:leading-[3.5rem] xl:leading-[2.5rem] lg:leading-[2rem] sm:leading-[1.8rem] mob:leading-[1.4rem] md:mt-0 sm:mt-4">info@yourdomain.com</h1>
                <h1 className="text-[#222222] tracking-wide 2xl:text-[3rem] 1.5xl:text-[2.25rem] xl:text-[2rem] lg:text-[1.85rem] sm:text-[1.7rem] mob:text-[1.2rem] font-[300] xl:mr-24 mb-0 2xl:leading-[3.5rem] xl:leading-[2.5rem] lg:leading-[2rem] sm:leading-[1.8rem] mob:leading-[1.4rem]">(+68) 12004509</h1>
            </div>
        </div>
        <div className="grid md:grid-cols-6 pad:grid-cols-form-sm mob:grid-cols-form-sm 1.5xl:grid-rows-3 lg:grid-rows-5 md:grid-rows-form-md gap-4 md:my-0 sm:my-4 pad:my-3">
            <input type="text" placeholder="Your name" className="border-[#EEEEEE] border-2 1.5xl:py-3 md:px-6 pad:px-2 mob:px-2 pad:py-2 mob:py-1 sm:col-span-3 pad:col-span-4 mob:col-span-4 lg:row-span-1"/>
            <input type="text" placeholder="Your e-mail" className="border-[#EEEEEE] border-2 1.5xl:py-3 md:px-6 pad:px-2 mob:px-2 pad:py-2 mob:py-1 sm:col-span-3 pad:col-span-4 mob:col-span-4 lg:row-span-1"/>
            <input type="text" placeholder="Your message" className="border-[#EEEEEE] border-2  px-6 w-full 2xl:h-[10rem] 1.5xl:h-[12rem] md:h-auto sm:h-[6rem] pad:h-[5rem] mob:h-[4rem] col-span-9 lg:row-span-3"/>
            <Button type={"button"} title={"Playstore"} background={"bg-[#FD8558] border-none rounded-sm"} textColor={"text-white"} paddingButton={"2xl:py-5 ultra:px-16  1.5xl:py-3 xl:py-3 1.5xl:px-10 xl:px-8  lg:px-5 md:py-2 md:px-5 sm:py-[0.4rem] sm:px-4 pad:py-[0.8rem] mob:py-3   sm:col-span-2 pad:col-span-3 mob:col-span-3 lg:row-span-1"} textStyle={"font-bold"} />

        </div>
    </div>
  )
}

export default Info