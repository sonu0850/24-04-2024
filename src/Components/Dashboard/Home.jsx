import React from 'react'


import Table from './Table'
import Modal from './PopUpForm'
import ModalTwo from './ModalTwo'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../Store/AuthSlice/authSlice'

const Home = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state)=>state.authSlice.isOpen)
  console.log("isopenn", isOpen);
  return (
    // Dashboard Page 
    <>
     {/* // This is Modal PopUp Form  */}
    
  {/* <Modal/> */}
  {/* {isOpen && <ModalTwo/>} */}
  <button onClick={()=>{dispatch(openModal())}} className='bg-blue-400 px-4 rounded-md py-3'>Open form</button>
  {isOpen && <ModalTwo/>}
  <Table/>

  
    </>
  )
}

export default Home