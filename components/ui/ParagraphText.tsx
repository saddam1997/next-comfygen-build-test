import { parseHTMLString } from "../../lib/parseHTML"

const ParagraphText = ({text, color}) => {
  return (
    <p className={`text-sm lg:text-[16px]  font-normal leading-relaxed text-${color}`}>

      {parseHTMLString(text)}
    </p>
  )
}

export default ParagraphText
