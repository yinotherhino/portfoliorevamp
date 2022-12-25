import React from 'react'
import styles from './GithubStats.module.css'

const GithubStats = () => {
  return (
    <img src="https://github-readme-stats.vercel.app/api?username=yinotherhino&include_all_commits=true&count_private=true&show_icons=true&line_height=30&title_color=EAFDFC&icon_color=EAFDFC&text_color=EAFDFC&bg_color=0A2647" className={styles.githubimg} alt="Yinotherhino Github Stats" />
  )
}

export default GithubStats