import Image from "next/image";

const Gallery = ({ Data }: any) => {
  return (
    <div className="w-full max-w-7xl space-y-2 mx-auto py-2 lg:px-0 px-4">

      {Data.heading && (
        <div className="py-4">
          {/* <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-1">
            Our Culture
          </p> */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            <span className="relative inline-block">
              {Data.heading}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-400 rounded-full" />
            </span>
          </h2>
        </div>
      )}



      {/* Top Grid */}
      <div className="grid lg:grid-cols-4 gap-2 bg-gray-100">
        {Data?.galleryData.map((col: any, colIndex: any) => (
          <div key={colIndex} className={`${col.columnHeight} space-y-2 w-full`}>
            {col.items.map((item: any, index: any) => (
              <div key={index} className={`${item.height} w-full rounded-md`}>
                <Image
                  src={item.src}
                  alt=""
                  width={450}
                  height={220}
                  className="rounded-md h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid lg:grid-cols-12 gap-2 py-2 rounded-md">
        {Data?.bottomImages.map((img: any, index: any) => (
          <div key={index} className={`${img.col} rounded-md`}>
            <Image
              src={img.src}
              alt=""
              width={950}
              height={620}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;










// import Image from 'next/image'

// const index = () => {
//     return (
//         <div className='w-full max-w-7xl space-y-2 mx-auto py-2'>
//             <div className='grid lg:grid-cols-4 gap-2 bg-gray-100'>
//                 <div className='h-[500px] space-y-2 w-full '>
//                     <div className='h-[40%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-2.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                     <div className='h-[60%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-10.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                 </div>
//                 <div className='h-[500px] space-y-2  w-full '>
//                     <div className='h-[50%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-3.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                     <div className='h-[50%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-6.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                 </div>
//                 <div className='h-[500px] space-y-2  w-full '>
//                     <div className='h-[50%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-4.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                     <div className='h-[50%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-5.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                 </div>
//                 <div className='h-[500px] space-y-2  w-full'>
//                     <div className='h-[40%] w-full  rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-9.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                     <div className='h-[60%] w-full rounded-md'>
//                         <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-8.webp"} alt='' width={450} height={220} className=' rounded-md h-full bg-cover' />
//                     </div>
//                 </div>
//             </div>
//             <div className="grid lg:grid-cols-12 gap-2 py-2 rounded-md">
//                 <div className='col-span-8  rounded-md'>
//                    <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-11.webp"} alt='' width={950} height={620} className=' rounded-md w-full h-full bg-cover' />
//                 </div>
//                  <div className='col-span-4  rounded-md'>
//                     <Image src={"https://www.comfygen.com/comfygen-images/life-at-comfygen/image-12.webp"} alt='' width={950} height={620} className=' rounded-md w-full h-full bg-cover' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default index
