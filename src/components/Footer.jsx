const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-icn">
        <a onClick={() => window.open("https://github.com/ajanaku1")}>
          <i className="bx bxl-github"></i>
        </a>
        <a
          onClick={() =>
            window.open("https://www.linkedin.com/in/dahunsi-ajanaku-5a080b286")
          }
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a onClick={() => window.open("https://www.instagram.com/dahunsi___/")}>
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <p>&copy; 2023 Ajanaku Dahunsi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
