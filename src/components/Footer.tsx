"use client";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 30px 40px;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>Gyeong</div>
      <div>Copyright@2024 All Rights Reserved</div>
    </StyledFooter>
  );
}
