import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const ContactContainer = styled.div`
  background-color: #000000;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ContactIcons = styled.div`
  color: #00a29b;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 675px) {
    font-size: 40px;
    margin-left: 15px;
  margin-right: 15px;
  }
`;

export const ContactContent= styled.h1`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
width:50%;

`
export const IconWrapper = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
`

export const Contact = styled.h1`
color: white;
font-family:roboto;
font-weight: 400;
font-size:18px;
`

export const ContactMessage = styled.span`
color:#00a29b;
font-family:roboto;
font-weight: 400;
font-size:18px;
`