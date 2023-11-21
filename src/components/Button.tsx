

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    background: string;
    full?: boolean;
    margin?: string;
    textColor: string;
    paddingButton: string;
    textStyle: string;
}

const Button = ({type, title, background, full, margin, paddingButton, textColor, textStyle}:ButtonProps) => {
    return (
      <button 
      className={`cursor-pointer rounded-full ${paddingButton}  ${margin} gap-3  border-white border-2 transition-all  duration-300 ${background} ${textColor}  ${full && 'w-full'}`}
      type={type}
      >
        
          <label className={`${textStyle} cursor-pointer 1.5xl:text-2xl xl:text-xl sm:text-base  whitespace-nowrap pad:text-base mob:text-sm transition-all  duration-300 ${background}`}>{title}</label>
      </button>
    )
  }

export default Button