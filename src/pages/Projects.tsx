import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { ButtonComp } from '../components/Buttons/Buttons'
import Navbar from '../components/Navbar/Navbar'

const Projects = () => {
  return (
    <>
      <Navbar />

      <div>
        <ButtonComp type='project' text='whatsapp' >
          <AiOutlineWhatsApp />
        </ButtonComp>
      </div>
    </>
  )
}

export default Projects