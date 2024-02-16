import Image from "next/image";
import styles from "./page.module.css";
import MainLayout from "@/layout/layout";
import About from "@/components/content/About";
import Profile from "@/components/content/Profile";

export default function Home() {
  return (
    <MainLayout>
      <Profile />
      {/* <About />
      <div>Skills</div>
      <div>Project</div> */}
    </MainLayout>
  );
}
