import Bar from "./Bar"


const Skills = () => {
  return (
    <div className="1.5xl:my-[10rem] xl:my-[8rem] lg:my-[6rem] md:my-[4rem] sm:my-[3rem] pad:my-[2rem] mob:my-[2rem] 2xl:mx-[20rem] 1.5xl:mx-[15rem] xl:mx-[10rem] lg:mx-[6rem] sm:mx-[1rem] pad:mx-[0.5rem] mob:mx-[0.5rem] flex md:flex-row pad:flex-col mob:flex-col">
        <div className="lg:w-[115%] md:py-16 sm:pb-8 md:text-start pad:text-center mob:text-center">
            <span className="1.5xl:text-xl tracking-wide text-[#FD8558]">OUR SKILLS</span>
            <h3 className="1.5xl:text-6xl xl:text-5xl xl:leading-[3.5rem] lg:text-4xl pad:text-3xl mob:text-2xl font-[300] tracking-wide my-2 md:text-left 1.5xl:leading-[4.8rem]">modern digital creative agency</h3>
            <p className="text-[#999999] 2xl:text-2xl xl:text-xl font-[300] lg:mt-6">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
        </div>
        <div className="w-full flex flex-col ultra:justify-normal 1.5xl:justify-around md:justify-center gap-12 md:ml-[5rem] sm:my-0 pad:my-4 mob:my-3">
            <Bar title={"illustration"} description={"90%"} progress={"w-[90%]"} />
            <Bar title={"web design"} description={"80%"} progress={"w-[80%]"} />
            <Bar   title={"development"} description={"95%"} progress={"w-[95%]"} />
        </div>
    </div>
  )
}

export default Skills