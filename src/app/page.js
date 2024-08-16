'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../../public/barbearia.png"
import Banner from "../../public/banner.jpg"
import { FiMoon, FiSun } from "react-icons/fi";
export default function Home() {
    const [ isDark, setIsDark] = useState(false)

    const changeMode = () => {
      setIsDark(!isDark)
    }
  return (
    <div className={isDark ? styles.dark_mode : styles.light_mode}>
      <header className={styles.header}>
        <div>
          <Image className={styles.logo} src={Logo}/>
          <button onClick={changeMode}>
            {isDark ? <FiSun/> : <FiMoon/>}
          </button>
        </div>
      </header>
      
      <section className={styles.section_banner}>
        <Image className={styles.banner} src={Banner}/>
      </section>

      <section className={styles.section_info}>
        <div>
          <h1>Bem-Vindo a Barber Shoop</h1>
          <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
          <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
          <p className={styles.signature}>S. Kelly</p>
        </div>
      </section>
    </div>
  );
}
