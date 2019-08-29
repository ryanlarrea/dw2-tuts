import React from "react";

import { Container } from "./styles";
import home from "../../assets/home.svg";
import signin from "../../assets/signin.svg";
import Tutorial from "../../components/Tutorial";

export default function Home() {
  return (
    <Container>
      <header className="main-header">
        <h1>DW2 Tuts</h1>
      </header>

      <section>
        {/* article>(header>h2+p)+div>(p>lorem)*2 */}
        <Tutorial
          titulo="Introdução ao JavaScript"
          autor="Nome do Autor"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magni
          quae quidem vel. Ipsa voluptate dolorum fugit similique qui vero
          temporibus nam dicta autem dolore, cum voluptatem accusantium, est ad."
        />
        <Tutorial
          titulo="JavaScript Avançado"
          autor="Ryan L. dos Santos"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magni
          quae quidem vel. Ipsa voluptate dolorum fugit similique qui vero
          temporibus nam dicta autem dolore, cum voluptatem accusantium, est ad."
        />
      </section>

      <nav>
        <div>
          <img src={home} alt="Home" />
          <p>home</p>
        </div>
        <div>
          <img src={signin} alt="Login" />
          <p>login</p>
        </div>
      </nav>
    </Container>
  );
}
