import React, { useState } from 'react'
import { HeroContainer, HeroBackground, ImageBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper } from './Hero'
import { Button } from "../Button"
import "../../App.css"
import heroimg from "../../hero1.jpg"

const Hero = () => {



    return (
        <HeroContainer>
            <HeroBackground>
                <ImageBackground>
                    {/* <img src={heroimg}/> */}
                </ImageBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Antoinette Mascarello</HeroH1>
                <HeroP>  <h4>Fullstack Web Developer & Designer.</h4></HeroP>
                <HeroButtonWrapper>
                    <Button to="projects">
                        Latest Work
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default Hero;