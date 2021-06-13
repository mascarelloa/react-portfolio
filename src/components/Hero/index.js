import React from 'react'
import { HeroContainer, HeroBackground, ImageBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper } from './Hero'
import { Button } from "../Button"
import "../../App.css"
import Pdf from "../../Resume_06-2021.pdf"
import { init } from "ityped"
import {useEffect, useRef } from "react"

const Hero = () => {
    
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['web developer. ', 'designer. ', 'content creator. ' ]})
    }, [])

    const onResumeClick = ()  => {
        window.open(Pdf);
      }

    return (
        <HeroContainer>
            <HeroBackground>
                <ImageBackground/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Antoinette Mascarello</HeroH1>
                <HeroP>  <h4>I am a <span ref={textRef}> </span></h4></HeroP>
                <HeroButtonWrapper>
                    <Button to="projects">
                        Latest Work
                    </Button>

                    <Button onClick={onResumeClick}>
                        View Resume
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default Hero;
