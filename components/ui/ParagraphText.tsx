import React from 'react'

const ParagraphText = ({text, color}) => {
  return (
    <p className={`text-lg lg:text-[16px] font-normal leading-relaxed text-${color}`} dangerouslySetInnerHTML={{ __html: text}}></p>
  )
}

export default ParagraphText
