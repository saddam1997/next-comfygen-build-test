import { parseHTMLString } from "../../lib/parseHTML"

const HeadingThree = ({color, text}) => {
  return (
    <h3 className={`lg:text-3xl text-lg text-${color} font-bold`} >{parseHTMLString(text)}</h3>
  )
}

export default HeadingThree
