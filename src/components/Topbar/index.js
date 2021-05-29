import React from 'react'
import { TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink } from "./Topbar"

const Topbar = ({ isOpen, toggle }) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink onClick={toggle} to="about">
                        About
                    </TopbarLink>
                    <TopbarLink onClick={toggle} to="projects">
                        Projects
                    </TopbarLink>
                    <TopbarLink onClick={toggle} to="contact">
                        Contact
                    </TopbarLink>
                    <TopbarLink onClick={toggle} to="contact">
                        Resume
                    </TopbarLink>
                </TopbarMenu>
            </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar;
