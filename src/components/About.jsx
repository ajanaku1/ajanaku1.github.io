import fcc from "../assets/fcc.jpeg";
import jsEC from "../assets/jsEC.png";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import tailwindIcon from "../assets/tailwindIcon.png";
import js from "../assets/js.png";
import github from "../assets/github.png";
import jquery from "../assets/jquery.png";
import reactIcon from "../assets/reactIcon.png";
import vIcon from "../assets/vIcon.png";
import cordovaIcon from "../assets/apache-cordova.png";
import wpIcon from "../assets/wp.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";

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
    { src: github, name: "github icon" },
    { src: jquery, name: "jquery icon" },
    { src: reactIcon, name: "react icon" },
    { src: vIcon, name: "vite icon" },
    { src: php, name: "php icon" },
    { src: mysql, name: "mysql icon" },
    { src: cordovaIcon, name: "apache-cordova" },
    { src: wpIcon, name: "wordpress" },
  ];

  return (
    <section className="about-section" id="about">
      <h3 className="section_heading">About Me</h3>
      <p className="write_up">
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
        <div className="certification">
          <h4 className="subheading">Certifications</h4>
          {certs.map((cert, index) => (
            <a key={index} onClick={() => window.open(cert.link)}>
              <img src={cert.src} alt={cert.name} />
            </a>
          ))}
        </div>
        <div className="skills">
          <h4 className="subheading">My Tech Stack</h4>
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <span key={index} className="icon">
                <img src={skill.src} alt={skill.name} />
              </span>
            ))}
          </div>
          <p className="write_up">
            {`I have experience crafting digital experiences using a variety of tools and technologies.
             On the front end, I'm familiar with HTML, CSS, and JavaScript, and can navigate between 
             React and jQuery with ease. I have a keen eye for detail when it comes to styling and am 
             able to use Tailwind CSS to create beautiful designs. On the back end, I'm comfortable working 
             with Node.js and am currently diving into PHP and SQL to create complex functionality. 
             I'm also well-versed in Firebase, which allows me to build powerful applications quickly and easily. 
             When it comes to mobile development, I'm skilled in Apache Cordova and React Native, and 
             I can create versatile applications that work across a range of platforms. My proficiency extends 
             to a range of tools, from Vite to WordPress, and I'm able to use Git and GitHub for version control with ease.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
