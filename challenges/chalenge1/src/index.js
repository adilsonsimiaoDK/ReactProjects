import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="duka.jpg" alt="Adilson Simiao" />;
}

function Intro() {
  return (
    <div>
      <h1>Adilson Simiao</h1>

      <p>
        Adilson is a highly skilled web developer, specializing in both
        front-end and back-end technologies. With a solid background in computer
        science and practical experience, Duka demonstrates proficiency in
        JavaScript, HTML, CSS, React.js, and Node.js. Recognized for his
        collaborative approach, he is passionate about problem-solving and
        contributing to innovative projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="🦾" color="lightblue" />
      <Skill skill="CSS" emoji="👋" color="blue" />
      <Skill skill="JavaScript" emoji="😍" color="orange" />
      <Skill skill="React" emoji="💚" color="yellow" />
      <Skill skill="Linux" emoji="🌞" color="orangered" />
      {/* Adicione outras habilidades conforme necessário */}
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
