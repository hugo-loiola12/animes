import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 AnimeFan. Todos os direitos reservados.</p>
        <ul className="mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <li>
            <a href="/about" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contato
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
