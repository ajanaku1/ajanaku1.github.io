const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h3 className="section_heading">CONTACT</h3>
      <p className="write_up">
        {`I'm open to new opportunities and collaborations! 
            If you have a project in mind or want to discuss anything 
            tech-related, feel free to reach out. Click the let's 
            talk button below to send me an email.`}
      </p>
      <div className="btn-box">
        <a href="mailto:mykdahunsi@gmail.com">{`Let's Talk!`}</a>
      </div>
    </section>
  );
};

export default Contact;
