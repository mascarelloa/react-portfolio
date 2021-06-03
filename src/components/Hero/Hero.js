import styled from "styled-components";
import heroimg from "../../hero1.jpg"

export const HeroContainer = styled.div`
  background: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index:2;
}
`;

export const HeroBackground = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width:100%;
  overflow: hidden;
`;

export const ImageBackground = styled.div`
  height: 100vh;
  overflow: hidden;
  -o-object-fit: cover;
  object-fit: cover;
  background: #222222;
  background-attachment:fixed;
  background-size:cover;
  background-image: url(${heroimg});
`;

export const HeroContent = styled.div`
  z-index: 3;
  /* max-width: 1200px; */
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #ffffff;
  font-size: 75px;
  text-align: center;
  font-family: poppins;
  text-transform: uppercase;

  @media screen and (max-width: 1050px) {
    font-size: 55px;
  }

  @media screen and (max-width: 786px) {
    font-size: 40px;
  }

  @media screen and (max-width: 675px) {
    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  margin-top: 0px;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  max-width: 800px;
  font-family: poppins;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

`;
