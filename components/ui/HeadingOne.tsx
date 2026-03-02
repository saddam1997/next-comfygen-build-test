
const HeadingOne = ({text, color}) => {
  return (
    <h1 className={`text-${color} text-xl sm:text-xl lg:text-3xl xl:text-4xl font-bold`}>{text}</h1>
  )
}

export default HeadingOne
