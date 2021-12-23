import './sass/about.scss';
function About() {
  return (
    <section id="about" className="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="about-inner">
        <div className="about-info">
          <p>
            Hello! My name is Niraj and I enjoy creating things that live on the
            internet. My interest in web development started back in 2020.
          </p>
          <p>
            I like building interactive and responsive websites. Building things
            is what I love the most. I am looking for new opportunities as
            React/Full Stack Developer. Currently am working at Deloitte as an
            ABAP Developer.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            <img src="mypic.jpg" width="500" height="500" alt="ugliest" />
            <div className="box"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
