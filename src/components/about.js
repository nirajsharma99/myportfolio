import './sass/about.scss';
function About() {
  const skills = [
    'HTML5',
    'JavaScript (ES6+)',
    'React',
    'Node',
    'Firebase',
    'Express.js',
  ];
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

          <p>
            <h5>I love</h5>
          </p>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
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
