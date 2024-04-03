import hero from "../assets/hero.jpg";
const HomeSec = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="text-6xl font-extrabold dark:text-white text-black">
          Ajanaku Dahunsi - Software Engineer & Quantity Surveyor
        </h1>
        <div className="hero-container">
          <img
            className="w- h-full rounded-full"
            src={hero}
            alt="Dahunsi Ajanaku's Photo"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSec;
