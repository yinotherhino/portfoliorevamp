import React from 'react'
import { ButtonCompProject } from '../components/Buttons/Buttons'
import Technologies from '../components/Technologies/Technologies'
import styles from './projects.module.css'

const btnDatas = [
  {
    link:'https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo',
    icon:'fa-brands fa-node',
    text:' Express Rest API '
  },
  {
    link: 'https://github.com/yinotherhino/FACO',
     icon: 'fa-brands fa-node',
      text: ' Farmers Connect app '
  },
  {
    link: 'https://markazbaraje.org.ng/',
     icon: 'fa-brands fa-bootstrap',
     text: ' HTML CSS PHP project '
  },
  {
    link: 'https://yinotherhino.github.io/Drum%20Kit%20Starting%20Files/',
    icon: 'fa-brands fa-node',
    text: '  Drum kit '
  },
  {
    link: 'https://hub.docker.com/repository/docker/yinotherhino/expressapimoviesrest',
    icon: 'fa-brands fa-docker',
    text: ' Docker ' 
  },
  {
    link: 'https://github.com/yinotherhino/mini-challenges-2',
    icon: 'fa-brands fa-node',
    text: ' Algorithms '
  },
  {
    link: 'https://restapijade.herokuapp.com/',
    icon: 'fa-brands fa-python',
    text: '  Node Rest API & Pug '
  },
  {
    link: 'https://young-coast-20585.herokuapp.com/',
    icon: 'fa-brands fa-python',
    text: ' Django '
  },
  {
    link: 'https://github.com/yinotherhino/Express-Rest-Api',
    icon: 'fa-brands fa-node',
    text: '  Express Rest API ' 
  },
  {
    link: 'https://github.com/yinotherhino/AsyncJavascript',
    icon: 'fa-brands fa-node',
    text: ' Async javascript engineering problems '
  },
  {
    link: 'https://github.com/yinotherhino/QATesting',
    icon: 'fa-brands fa-node',
    text: '  Integration testing '
  },
  {
    link: 'https://github.com/yinotherhino/mini-challenges-3',
    icon: 'fa-brands fa-node',
    text: '  Algorithms 2 ' 
  },
  {
    link: 'https://github.com/yinotherhino/food_ordering_fullstack',
    icon: 'fa-brands fa-node',
    text: '  Food ordering app full-stack ',
    icon2: 'fa-brands fa-react'
  },
  {
    link: 'https://github.com/yinotherhino/DuplicateTransactionsProblem',
    icon: 'fa-brands fa-node',
    text: ' Duplicate transactions problem ' 
  },
  {
    link: 'https://github.com/yinotherhino/typescript-react',
    icon: 'fa-brands fa-react',
    text: '   React/Typescript '
  },
  {
    link: 'https://github.com/yinotherhino/RESTFUL_API',
    icon: 'fa-brands fa-node',
    text: '  Barebone node Rest API ',
  },
  {
    link: 'https://github.com/yinotherhino/Starwarsapi',
    icon: 'fa-solid fa-jedi',
    text: ' Starwars API consumption ',
  },

]

const Projects = () => {
  return (
      <div className={ ' px-md-5 pt-md-5 px-sm-3'} style={{backgroundColor:"#EAFDFC", height:"100vh"}} >
        {btnDatas.map((btndata, index)=>{
          let isLight=index%2 === 0 ? true:false;

          return (<ButtonCompProject
            key={index}
            link={btndata.link}
            icon={btndata.icon}
            text={btndata.text}
            isLight= {isLight}
          />)
        })}

        <Technologies />
      </div>
  )
}

export default Projects