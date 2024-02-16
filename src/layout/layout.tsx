"use client";

import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledAppLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledAppLayout>
  );
}
