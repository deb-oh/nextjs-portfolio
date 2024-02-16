import Image from "next/image";
import styles from "./page.module.css";
import MainLayout from "@/layout/layout";
import About from "@/components/About";

export default function Home() {
  return (
    <MainLayout>
      <About />
      <div>Skills</div>
      <div>Project</div>
    </MainLayout>
  );
}
