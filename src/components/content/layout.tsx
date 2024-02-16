"use client";
import theme from "@/styels/theme";
import styled from "styled-components";

const { device } = theme;

const StyledContent = styled.div`
  flex: 1;
  width: 80%;
  margin: auto;
  background-color: beige;
  font-size: 1.4rem;
  padding: 2rem 3rem;
  box-sizing: border-box;

  @media ${() => device.tablet} {
    width: 100%;
  }
`;

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyledContent>{children}</StyledContent>;
}
