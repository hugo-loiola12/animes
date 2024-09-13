import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>Erro 404</h1>
      <h3 style={styles.message}>Oops! Página não encontrada.</h3>
      <img
        src={"app/data/imgs/2594596_3e505.gif"}
        alt="Page not found"
        style={styles.gif}
      />
      <p style={styles.text}>
        Parece que a página que você está procurando não existe.
      </p>
      <Link href={"/"} style={styles.button}>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "monospace",
    color: "#333",
  },
  errorCode: {
    fontSize: "96px",
    margin: "0",
    color: "#FF6347",
  },
  message: {
    fontSize: "24px",
    margin: "10px 0 20px 0",
  },
  gif: {
    width: "300px",
    borderRadius: "10px",
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
    transition: "background-color 0.3s ease",
  },
};

export default NotFound;
