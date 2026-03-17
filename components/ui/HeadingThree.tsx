import React from 'react'

const HeadingThree = ({color, text}) => {
  return (
    <h3 className={`lg:text-3xl  text-lg text-${color}  font-bold`} dangerouslySetInnerHTML={{ __html: text }}></h3>
  )
}

export default HeadingThree
