
import Button from './Button'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='text-center'>
        <div className='text-center md:mb-10 sm:mb-6'>
            <span className='2xl:text-xl tracking-wide text-[#FD8558]'>OUR TEAM</span>
            <h1 className='sm:mt-4 md:text-5xl sm:text-4xl pad:text-3xl mob:text-3xl mob:flex-wrap font-[300] tracking-wide'>Meet Our Awesome Team</h1>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:gap-4 ultra:mx-[35rem] 2xl:mx-[20rem] 1.5xl:mx-[15rem] xl:mx-[10rem] sm:mt-0 pad:mt-4 mob:mt-3 '>
            <TeamCard address={'anna.png'} title={'Anna Brown'} career={'Creative Director'} />
            <TeamCard address={'andy.png'} title={'Andy Crown'} career={'SEO manager'} />
            <TeamCard address={'katy.png'} title={'Katy Necker'} career={'Designer'} />
            <TeamCard address={'margo.png'} title={'Margo Kesslin'} career={'Developer'} />
            <TeamCard address={'kanye.png'} title={'Kanye Jones'} career={'Art Director'} />
            <TeamCard address={'marta.png'} title={'Marta White'} career={'Tester'} />
        </div>
        <Button type={"button"} title={"Start work"} background={"bg-[#FD8558] border-none rounded-sm"} textColor={"text-white"} paddingButton={"2xl:py-5 2xl:px-16 2xl:hover:px-20 1.5xl:py-4 xl:py-3 1.5xl:px-12 1.5xl:hover:px-14 xl:px-8 xl:hover:px-10  lg:px-5 md:py-2 md:px-5 sm:py-[0.4rem] sm:px-6 sm:hover:px-10 sm:py-[0.8rem] pad:py-[0.8rem] mob:py-3 pad:px-12 mob:px-10 2xl:my-20 1.5xl:my-16 xl:my-10 lg:my-8 sm:my-6 pad:my-4 mob:my-6"} textStyle={"font-bold"} />
    </div>
  )
}

export default Team