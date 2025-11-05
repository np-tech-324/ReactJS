import React from 'react'

const RightCard1 = () => {
  return (
    <div className='h-full w-full absolute top-0 py-5 px-4 flex flex-col justify-between'>
            <h3 className='h-12 w-12 rounded-full text-2xl text-black font-medium bg-white flex items-center justify-center '>1</h3>
            <div >
                <h3 className='text-xl leading-relaxed text-gray-400 font-bold '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel impedit doloribus asperiores deserunt numquam nobis. Saepe, possimus iste! Animi, quibusdam?</h3>
                <div className='flex justify-between mt-20'>
                    <button className='bg-blue-600 px-5 py-2 text-xl rounded-full'>Satisfied</button>
                <button className='bg-blue-600 rounded-full px-4 py-4  text-xl '><i class="ri-arrow-right-line"></i></button>
                </div>
                
            </div>
        </div>
  )
}

export default RightCard1