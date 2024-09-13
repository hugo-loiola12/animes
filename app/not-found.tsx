import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";
import Gif from "../app/data/imgs/2594596_3e505.gif";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>Erro 404</h1>
      <h3 style={styles.message}>Oops! Página não encontrada.</h3>
      <Image src={Gif} alt="Page not found" width={150} height={150} />
      <p style={styles.text}>
        Parece que a página que você está procurando não existe.
      </p>
      <Link href={"/"} style={styles.button}>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "system-ui",
    color: "#333",
  },
  errorCode: {
    fontSize: "96px",
    margin: "0",
    color: "#FF6347",
    fontFamily: "monospace",
  },
  message: {
    fontSize: "24px",
    margin: "10px 0 20px 0",
  },
  text: {
    fontSize: "18px",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#FF6347",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.1s ease",
  },
};

export default NotFound;
