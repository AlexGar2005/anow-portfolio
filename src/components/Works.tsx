

const Works = () => {
  return (
    <div className='2xl:mt-8 xl:mt-6 lg:mt-0 md:mt-4'>
        <h1 className="2xl:text-[16rem] 1.5xl:text-[14rem] xl:text-[12rem] lg:text-[10rem] md:text-[8rem] pad:text-[6rem] xl:mt-[-3rem] lg:mt-0 md:mt-[-3rem] sm:mt-[-1.5rem] pad:mt-[-3rem] 1.5xl:leading-[17rem] xl:leading-[14rem] lg:leading-[12rem] md:leading-[10rem] pad:leading-[8rem]  text-[#F7F7F7] tracking-wide text-right 2xl:pr-12 1.5xl:pr-10">works</h1>
        <div className="grid sm:grid-cols-nav">
            <div className="sm:block pad:flex mob:flex">
                <img src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full"/>
                <img src="https://images.pexels.com/photos/7209396/pexels-photo-7209396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full"/>
            </div>
            <img src="https://images.pexels.com/photos/2891225/pexels-photo-2891225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full"/>
            <div className="sm:block pad:flex mob:flex">
                <img src="https://images.pexels.com/photos/7209396/pexels-photo-7209396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full"/>
                <img src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Works