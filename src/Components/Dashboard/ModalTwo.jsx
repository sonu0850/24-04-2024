import React from 'react'
import Details from './Form'


const ModalTwo = () => {
  return (
   <>
   <>
  {/* component */}
  <div className="fixed z-50 inset-0 flex items-center justify-center ">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
    <div className=" rounded-lg text-left   shadow-xl transform transition-all ">
      <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
       <Details/>
      </div>
     
    </div>
  </div>
</>

   </>
  )
}

export default ModalTwo