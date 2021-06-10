import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const ContactContainer = styled.div`
  background-color: #090909;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ContactIcons = styled.div`
  color: #75c9c0;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000000;
  }

  @media screen and (max-width: 675px) {
    font-size: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const ContactLink = styled(Link)`
  color: #75c9c0;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #000000;
  }
`;

export const ContactContent = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ContactMethod = styled.h1`
  color: white;
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
`;

export const ContactMessage = styled.span`
  color: #75c9c0;
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
`;
