import React from 'react'
import ApiSupport from './ApiSupport'

const Index = ({GameApiData}) => {
  return (
    <div>
      <ApiSupport GameApiData={GameApiData}/>
    </div>
  )
}

export default Index
