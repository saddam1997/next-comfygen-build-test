import { parseHTMLString } from "../../lib/parseHTML"

const HeadingTwo = ({ text, color }) => {
  return (
    <h2 className={`xl:text-[28px] text-lg text-${color} sm:leading-tight lg:leading-tight xl:leading-[3rem]  font-bold`} >
      {parseHTMLString(text)}

    </h2>
  )
}

export default HeadingTwo
