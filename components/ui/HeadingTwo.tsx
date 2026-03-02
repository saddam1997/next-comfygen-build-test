const HeadingTwo = ({ text, color }) => {
  return (
    <h2 className={`lg:text-3xl text-lg text-${color}  font-bold`} dangerouslySetInnerHTML={{ __html: text }}></h2>
  )
}

export default HeadingTwo
