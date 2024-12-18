import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { rightImg, watchImg } from '../utils'
import { ScrollTrigger } from 'gsap/all'
import VideoCarousel from './VideoCar'

gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {
    

    useGSAP(() => {

        

        gsap.to('#title', {
            opacity:1,
            y:0,
            scrollTrigger:{
                trigger:'#title',
                start: 'bottom bottom',
                end: 'top 60%',
                scrub:true,
            }
        })

        gsap.to('.link', {
            opacity:1,
            y:0,
            
            stagger:0.25,
            scrollTrigger:{
                trigger:'.link',
                start: 'bottom bottom',
                end: 'top 60%',
                scrub:true,
            }
        })

       

    }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc' >
        <div className='screen-max-width' >
            <div className='w-full mb-12 md:flex items-end justify-between' >
                <h1 id='title' className='section-heading'>Get The Highlights</h1>

                <div className='flex flex-wrap items-end gap-5'>
                    <p className='link'>Watch the film<img src={ watchImg } className='ml-2' /></p>
                    <p className='link'>Watch the event<img src={ rightImg } className='ml-2' /></p>
                </div>
            </div>

            <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights