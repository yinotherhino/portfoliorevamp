import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { ButtonCompProject } from '../components/Buttons/Buttons'

const Projects = () => {
  return (
    <>
      <div>
        <ButtonCompProject text='whatsapp' >
          <AiOutlineWhatsApp />
        </ButtonCompProject>
      </div>
    </>
  )
}

export default Projects