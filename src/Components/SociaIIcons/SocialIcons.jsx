import React from 'react'
import style from './SocialIcons.module.css'
import linkedin_icon from '../../assets/icons/linkedin.svg'
import github_icon from '../../assets/icons/github.svg'
import youtube_icon from '../../assets/icons/youtube.svg'  
import facebook_icon from '../../assets/icons/facebook.svg'
import { lazy, Suspense } from "react";

const SocialIcons = (props) => {

    const mq = window.matchMedia("(max-width: 40em)").matches;

    return (

        <div className={style.img}> 

        <Suspense >
<a href="https://github.com/yorliana" target="_blank">                      <img className={style.icon} src={github_icon}></img></a>
<a href="https://www.facebook.com/yorlianalourde.munozvera/" target="_blank"><img className={style.icon}src={facebook_icon} ></img></a>
<a href="https://www.youtube.com/channel/UC_DCCUorLgKotVaIg5JWSYw" target="_blank"><img className={style.icon} src={youtube_icon}></img></a>
<a href="https://www.linkedin.com/in/yorliana-mu%C3%B1oz-02bb4921a/" target="_blank"><img className={style.icon} src={linkedin_icon}></img></a>
</Suspense>
</div>
    )
}

export default SocialIcons