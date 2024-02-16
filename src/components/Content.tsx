"use client";
import styled from "styled-components";

const StyledContent = styled.div`
  flex: 1;
  width: 80%;
  margin: auto;
  background-color: beige;
`;

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyledContent>{children}</StyledContent>;
}
