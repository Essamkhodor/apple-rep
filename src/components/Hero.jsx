import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [videoSource, setVideoSource] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handlevideo = () => {
        if(window.innerWidth < 760) {
            setVideoSource(smallHeroVideo)
        } else {
            setVideoSource(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handlevideo);

        return() => {
            window.removeEventListener('resize' , handlevideo);
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity:1,
            delay:2,
        })

        gsap.to('#cta', {
            y:-50,
            opacity:1,
            delay:2,
            stagger:1,
        })
    }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-col flex-center'>
            <p id='hero' className='hero-title'>iPhone 15 pro</p>

            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSource}>
                    <source src={ videoSource } type='video/mp4'/>
                </video>
            </div>
        </div>

        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
            <a href='#highlights' className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $199/Month or $999</p>
        </div>
    </section>
  )
}

export default Hero