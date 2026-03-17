
const HeadingOne = ({text, color}) => {
  return (
    <h1 className={`text-${color} text-xl sm:text-xl lg:text-[36px] xl:text-[36px] font-bold`}>{text}</h1>
  )
}

export default HeadingOne
