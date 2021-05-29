import styled from "styled-components";

export const SkillsContainer = styled.div`
  background: #00A29B;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align:center;
`;

export const SkillsWrapper = styled.div`
 display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`

export const SkillsH1 = styled.h1`
  color: #ffffff;
  font-family: poppins;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  margin-bottom: 50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Bar = styled.div`
height:5px;
width:75px;
background-color:#ffffff;
text-align:center;
margin-top:10px
`

export const SkillsColumn1 = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SkillsColumn2 = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
