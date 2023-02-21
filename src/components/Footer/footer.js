/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./footer-style.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <label className="title-footer">Desenvolvido: @joaovictor</label>
      <div className="container-contacts">
        <ul>
          <li>
            <a href="#">
              <AiOutlineWhatsApp size={20} color="#25d366" />
              <label>(88) 99610-9661</label>
            </a>
          </li>
          <li>
            <a href="https://github.com/joaovictorgit">
              <AiOutlineGithub size={20} color="#6e5494" />
              <label>joaovictorgit</label>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joaovictordev/">
              <AiOutlineLinkedin size={20} color=" #0072b1" />
              <label>joaovictordev</label>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
