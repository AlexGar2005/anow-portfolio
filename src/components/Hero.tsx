import Button from "./Button";
import { motion } from "framer-motion";


const fadeInAnimationFromLeft = {
  initial: {
    opacity: 0,
    x:-100,
  },
  animate: {
    transition: {
      duration: .7,
      delay: .7
    },
    opacity: 1,
    x:0,
  }
}
const fadeInAnimationFromRight = {
  initial: {
    opacity: 0,
    x:100,
  },
  animate: {
    transition: {
      duration: 1.4,
      delay: .7
    },
    opacity: 1,
    x:0,
  }
}
const Hero = () => {
  return (
    <div className="relative w-full z-0 overflow-y-hidden">
        <img src="Frame (1).png" alt="" className=" w-full max-h-[88vh] object-cover hidden sm:block overflow-y-hidden "/>
        <div className="sm:absolute pad:relative mob:relative ultra:top-[40%] sm:top-[35%] mob:top-[35%]  sm:left-[50%] pad:left-[45%] mob:left-[50%] translate-x-[-50%] sm:mt-0 sm:mx-0 pad:mt-6 mob:mt-4 pad:mx-6 sm:text-white pad:text-[#252B42] mob:text-[#252B42] flex flex-col items-center">
            <motion.h1 
              className="2xl:text-9xl 1.5xl:text-7xl xl:text-6xl lg:text-5xl md:text-[2.4rem] sm:text-[2rem] pad:text-[2.25rem] mob:text-[1.75rem]  text-center 2xl:leading-[9rem] 1.5xl:leading-[5rem] xl:leading-[4.5rem] lg:leading-[3.5rem] sm:leading-[2.5rem] font-[200] xl:mb-4 lg:mb-2 sm:mb-0 pad:mb-0 mob:mb-0"
              variants={fadeInAnimationFromLeft}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}
            >
              design is thinking
            </motion.h1>
            <motion.h4 
              className="2xl:text-9xl 1.5xl:text-7xl xl:text-6xl lg:text-5xl md:text-[2.4rem] sm:text-[2rem] pad:text-[2.25rem] mob:text-[1.75rem] font-[200] xl:mb-8 sm:mb-4 pad:mb-2 mob:mb-4 text-center 2xl:leading-[9rem] 1.5xl:leading-[5rem] xl:leading-[4.5rem] lg:leading-[3.5rem] sm:leading-[2.5rem]"
              variants={fadeInAnimationFromRight}
              initial = 'initial'
              whileInView='animate'
              viewport={{
                  once: true,
              }}
            >
              made visual
            </motion.h4>
            <div className="flex pad:gap-4 mob:gap-2 flex-row">
                <Button type={"button"} title={"Playstore"} background={"bg-[#FD8558] border-none rounded-sm"} textColor={"text-white"} paddingButton={"2xl:py-5 2xl:px-16 hover:2xl:px-20 1.5xl:py-4 xl:py-3 1.5xl:px-12 1.5xl:px-12 xl:hover:px-14 xl:px-8  lg:px-5 lg:hover:px-8 md:py-2 md:px-5 sm:py-[0.4rem] sm:px-4 pad:py-[0.5rem] mob:py-2 pad:px-6 mob:px-5"} textStyle={"font-bold"} />
                <Button type={"button"} title={"App Store"} background={"bg-transparent rounded-sm border-[#FD8558] hover:bg-[#FD8558] hover:border-[#FD8558]  pad:border-[#FD8558] mob:border-[#FD8558]"} textColor={"sm:text-white pad:text-[#FA4A0C]"} paddingButton={"2xl:py-5 2xl:px-16  2xl:hover:px-20 1.5xl:py-4 xl:py-3 1.5xl:px-12 1.5xl:hover:px-14 xl:px-8 xl:hover:px-10  lg:px-5 lg:hover:px-8 md:py-2 md:px-5 sm:py-[0.4rem] sm:px-4 pad:py-[0.5rem] mob:py-2 pad:px-6 mob:px-5"} textStyle={"font-bold"} />
            </div>
        </div>
    </div>
  )
}

export default Hero
