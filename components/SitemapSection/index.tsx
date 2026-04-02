import React from 'react'
import Card from './Card'

const index = ({ sitemapData }: { sitemapData: any[] }) => {
  return (
    <div>
       
      <Card sitemapData={sitemapData} />
    </div>
  )
}

export default index
