import css from "./AuthorPage.module.css";
import { FaGithub, FaTelegram, FaLinkedinIn } from "react-icons/fa";

export default function AuthorPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Nazar Kotiv</h1>
      <div className={css.wrapper}>
        <div className={css.containerImage}>
          <img
            className={css.img}
            src="/Nazar-Kotiv.jpg"
            alt="Author Image"
          ></img>
        </div>
        <div className={css.text}>
          <h3>About Me</h3>
          <p>
            I am a Junior Frontend Developer. I focus on HTML5, CSS3, JS, React,
            and English. Development, practice, and working toward the goal are
            crucial for me. I am skilled in analyzing problems and thinking of
            solutions to troubleshoot and solve technical issues accurately. I
            have work experience in a managerial position. I can make quick
            decisions and cooperate with people. I always try to fulfill
            deadlines, and I am well-organized.
          </p>
        </div>
      </div>

      <nav className={css.nav}>
        <ul className={css.ul}>
          <li className={css.ulIteam}>
            <span className={css.icon}>
              <FaGithub />
            </span>
            <a
              className={css.link}
              target="_blank"
              href="https://github.com/Nazar-Kotiv"
            >
              GitHub
            </a>
          </li>
          <li className={css.ulIteam}>
            <span className={css.icon}>
              <FaLinkedinIn />
            </span>
            <a
              className={css.link}
              target="_blank"
              href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B7%D0%B0%D1%80-kotiv-2b25702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              LinkedIn
            </a>
          </li>
          <li className={css.ulIteam}>
            <span className={css.icon}>
              <FaTelegram />
            </span>
            <a
              className={css.link}
              target="_blank"
              href="https://t.me/Nazar_Kotiv"
            >
              Telegram
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
