"use client";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;

  .header-menu {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      padding: 10px 20px;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.device?.tablet} {
    flex-direction: column;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-name">Gyeong</div>
      <ol className="header-menu">
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>PROJECT</li>
      </ol>
    </StyledHeader>
  );
}
