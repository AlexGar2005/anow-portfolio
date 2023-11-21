import DescriptionCard from "./DescriptionCard"


const  Description = () => {
  return (
    <div className="ultra:px-[25rem] 2xl:pb-[6rem] 1.5xl:pb-[5rem] xl:pb-[4rem] lg:pb-[3rem] pad:pb-[2rem] 1.5xl:px-[15rem] xl:px-[10rem] lg:px-[6rem] md:px-[1rem] mob:px-[.5rem] xl:gap-3 lg:gap-4 md:gap-3 sm:gap-1 pad:gap-3 mob:gap-4 flex justify-between sm:flex-row pad:flex-col mob:flex-col border-b-4 border-[#F5F5F5] sm:my-0 pad:my-6 mob:my-6">
        <DescriptionCard title={"digital solutions"} address={"orange.png"} background={"bg-[#FD8558] opacity-10"} text={"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration"} />
        <DescriptionCard title={"creative strategy"} address={"Vector (1).png"} background={"bg-[#3A0F73] opacity-10"} text={"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration"} />
        <DescriptionCard title={"integrated marketing"} address={"Group.png"} background={"bg-[#70B446] opacity-10"} text={"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration"} />
    </div>
  )
}

export default Description