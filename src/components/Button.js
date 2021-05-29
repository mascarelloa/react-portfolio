import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: #00A29B;
  padding: ${({ large }) => (large ? "14px 48px" : "12px 30px;")};
  color: #ffffff;
  font-family:poppins;
  text-transform:uppercase;
  font-size:20px;
  font-weight:600;
  letter-spacing:1px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius:8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #666666;
  }
`;
