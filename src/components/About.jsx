import fcc from "../assets/fcc.jpeg";
import jsEC from "../assets/jsEC.png";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import tailwindIcon from "../assets/tailwindIcon.png";
import js from "../assets/js.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import jquery from "../assets/jquery.png";
import reactIcon from "../assets/reactIcon.png";
import vIcon from "../assets/vIcon.png";

const About = () => {
  const certs = [
    {
      src: fcc,
      name: "Freecodecamp Certificate",
      link: "https://freecodecamp.org/certification/fcc4e8d9d93-a74a-46af-a6d0-00699492db3e/responsive-web-design",
    },
    {
      src: jsEC,
      name: "Cisco Certificate",
      link: "https://www.credly.com/badges/5a8842de-4077-46fe-b5c5-f53f1677ead3/public_url",
    },
  ];
  const skills = [
    { src: htmlIcon, name: "html icon" },
    { src: cssIcon, name: "css icon" },
    { src: tailwindIcon, name: "tailwin icon" },
    { src: js, name: "javascript icon" },
    { src: git, name: "git icon" },
    { src: github, name: "github icon" },
    { src: jquery, name: "jquery icon" },
    { src: reactIcon, name: "react icon" },
    { src: vIcon, name: "vite icon" },
  ];

  return (
    <section className="about-section" id="about">
      <h3>About Me</h3>
      <p>
        {`" From tinkering with lines of code to crafting visually stunning
        designs, I thrive in the dynamic world where technology and creativity
        converge. " I am Ajanaku Dahunsi and you're welcome to my digital space!`}
        <br />
        <br />
        {`As someone who considers himself a code maverick, I've always been
        captivated by the intricate dance of ones and zeros that power our
        digital world. I've spent countless hours deciphering the language of
        machines and turning complex problems into elegant solutions. I revel in
        the challenge of building robust and scalable systems and I don't just
        stop at the pixels. I bring my love for aesthetics and functionality to
        create interfaces that resonate with users. When I'm not immersed in the
        digital world, you'll likely find me working out, reading a book,
        watching a movie or taking long walks.`}
      </p>
      <div className="about-content">
        <div id="certification">
          <h4>Certifications</h4>
          {certs.map((cert, index) => (
            <a key={index} href={cert.link}>
              <img src={cert.src} alt={cert.name} />
            </a>
          ))}
        </div>
        <div id="skills">
          <h4>My Tech Stack</h4>
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <span key={index} className="icon">
                <img src={skill.src} alt={skill.name} />
              </span>
            ))}
          </div>
          <p>
            {`In this ever-evolving tech landscape, I'm a perpetual student. But
            my learning extends beyond the realms of tech. I find joy in
            exploring diverse subjects and cultivating a curiosity that knows no
            bounds. From reading about the latest advancements to picking up a
            new hobby, I'm always seeking to broaden my horizons. To me every
            project is a puzzle waiting to be solved. My analytical mindset and
            love for problem-solving drive me to find innovative solutions to
            challenges. I thrive in collaborative environments, where diverse
            perspectives come together to create something greater than the sum
            of its parts.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
