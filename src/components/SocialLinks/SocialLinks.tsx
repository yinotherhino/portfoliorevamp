import React from 'react'
import styles from './SocialLinks.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = () => {
  return (
    <>
        <a href='https://github.com/yinotherhino'><GitHubIcon /></a>
        <a href='https://github.com/yinotherhino'><FacebookIcon /></a>
        <a href='https://github.com/yinotherhino'><TwitterIcon /></a>
        <a href='https://github.com/yinotherhino'><LinkedInIcon /></a>
    </>
  )
}

export default SocialLinks