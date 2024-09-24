import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div>
      <div className='uppercase inline-flex gap-2 items-center  '>
        <p className='text-500  '>{text1} <span className='text-500 '> {text2}</span></p>
      </div>
    </div>
  )
}

export default Title