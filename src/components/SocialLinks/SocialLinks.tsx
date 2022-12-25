import React from 'react'
import styles from './SocialLinks.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const SocialLinks = () => {
  const fontSize = {
    fontSize: 50
  }

  return (
    <span className={styles.container}>
        <a href='https://github.com/yinotherhino'><div className={styles.socialdiv}><FiGithub className={styles.icon} /></div></a>
        <a href='https://facebook.com/Bayino'><div className={styles.socialdiv}><FaFacebookF className={styles.icon} /></div></a>
        <a href='https://twitter.com/Moe_bolaji'><div className={styles.socialdiv}><BsTwitter className={styles.icon} /></div></a>
        <a href='https://linkedin.com/in/muhammed-bayero-51781a11b'><div className={styles.socialdiv}><FaLinkedinIn className={styles.icon}/></div></a>
    </span>
  )
}

export default SocialLinks