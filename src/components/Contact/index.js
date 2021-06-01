import React from "react";
import {
  ContactContainer,
  ContactIcons,
  ContactContent,
  IconWrapper,
  ContactMethod,
  ContactMessage
} from "./Contact";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { SiMailDotRu } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <IconWrapper>
          <ContactIcons>
            <a id="contact" href="" target="_blank"><SiMailDotRu /></a>
            </ContactIcons>
            <ContactIcons>
            <a
              id="contact"
              href="https://www.linkedin.com/in/antoinette-mascarello-15988b94/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </ContactIcons>
            <ContactIcons>
            <a
              id="contact"
              href="https://github.com/mascarelloa"
              target="_blank"
            >
              <FaGithub />
            </a>
          </ContactIcons>
          
          <ContactIcons>
            <a
              id="contact"
              href="https://www.facebook.com/mascarelloa"
              target="_blank"
            >
              <GrFacebookOption />
            </a>
          </ContactIcons>
          <ContactIcons>
            <a
              id="contact"
              href="https://www.instagram.com/anniemascara/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </ContactIcons>
          <ContactIcons>
            <a
              id="contact"
              href="https://www.pinterest.com/anniemascara/"
              target="_blank"
            >
              <FaPinterestP />
            </a>
          </ContactIcons>
        
          <ContactIcons>
            <a
              id="contact"
              href="https://twitter.com/anniemascara"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </ContactIcons>
        </IconWrapper>
      
      </ContactContainer>
    </>
  );
};

export default Contact;
