"use client";
import theme from "@/styels/theme";
import { useState } from "react";
import styled from "styled-components";

const { device, colors } = theme;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  align-items: center;
  font-size: 1.4rem;

  .header-name {
    font-size: 2rem;
  }

  .header-menu {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      padding: 1rem 2rem;
      cursor: pointer;
    }
  }

  .header-menu-btn {
    display: none;
  }

  @media ${() => device.tablet} {
    flex-direction: column;
  }

  @media ${() => device.mobile} {
    .header-name {
      align-self: flex-start;
    }
    .header-menu {
      display: none;
      position: absolute;
      top: 100%;
      background-color: white;
      &.active {
        display: block;
        width: 100%;
        text-align: center;
      }
      li {
        margin: 0.5rem;
        border-radius: 0.2rem;
        &:hover {
          background-color: ${() => colors.accent};
        }
      }
    }
    .header-menu-btn {
      display: block;
      position: absolute;
      top: 2.3rem;
      right: 2rem;
    }
  }
`;

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <StyledHeader>
      <div className="header-name">Gyeong</div>
      <ol className={`header-menu ${active && "active"}`}>
        <li onClick={() => setActive(false)}>ABOUT</li>
        <li onClick={() => setActive(false)}>SKILLS</li>
        <li onClick={() => setActive(false)}>PROJECT</li>
      </ol>
      <div
        className="header-menu-btn"
        onClick={() => setActive((props) => !props)}
      >
        햄버거버튼
      </div>
    </StyledHeader>
  );
}
