const Footer = () => {
  const socialIcons = [
    {
      link: "https://github.com/ajanaku1",
      class: "bx bxl-github",
    },
    {
      link: "https://www.linkedin.com/in/dahunsi-ajanaku-5a080b286",
      class: "bx bxl-linkedin",
    },
    {
      link: "https://www.instagram.com/dahunsi___/",
      class: "bx bxl-instagram",
    },
  ];
  return (
    <footer className="footer">
      <div className="foot-icn">
        {socialIcons.map((icon, index) => (
          <a key={index} className="ftl">
            <i
              className={icon.class}
              onClick={() => window.open(icon.link)}
            ></i>
          </a>
        ))}
      </div>
      <p className="write_up">
        &copy; 2023 Ajanaku Dahunsi. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
