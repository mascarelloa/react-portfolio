import React from 'react'
import { HeroContainer, HeroBackground, ImageBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper } from './Hero'
import { Button } from "../Button"
import "../../App.css"
import Pdf from "../../resume_may_2021.pdf"

const Hero = () => {

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
                <HeroP>  <h4>Fullstack Web Developer & Designer.</h4></HeroP>
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
