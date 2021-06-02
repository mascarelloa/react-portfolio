import React from 'react'
import {AboutContainer, AboutWrapper, AboutH1, Bar, AboutH2, Self, AboutH3, AboutP} from "./About"
import self from "../../self.jpg"

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutWrapper>
                    <AboutH1>
                        The Dev
                        <Bar />
                    </AboutH1>
                    <Self>
                    <img src={self}/>
                </Self>
                    <AboutH3>
                        In west central Florida, born and raised,
                    </AboutH3>
                    <AboutH3>
                        On the computer is where I spent most of my days.
                    </AboutH3>
                    <AboutH3>
                        Chillin' out, maxin', relaxin' all cool,
                    </AboutH3>
                    <AboutH3>
                        Coding on myspace outside of school...
                    </AboutH3>
                    <AboutP>
                    My name is Antoinette, informally known as "Annie." I am a graduate from the University of Central Florida (Go Knights!). I am an aspiring web developer and designer looking to take the tech world by storm. As a proud product of the early 90s, the World Wide Web has always been a part of my life. I've witnessed it evolve from extraterrestrial-sounding dial up noises to lightning fast loads and I can't wait to see what the future holds. When I'm not coding, you can find me reading mystery novels, listening to vinyl records, rollerskating, and geeking out to anything Sci-Fi.
                    </AboutP>
                </AboutWrapper>
            </AboutContainer>  
        </>
    )
}

export default About;