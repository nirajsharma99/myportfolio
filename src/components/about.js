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
            Hello! My name is Niraj. I'm passionate about web design and
            development. Building things is what I love the most, I like to code
            things from scratch, and enjoy bringing ideas to life in the
            browser.I love learning new and better ways to create seamless user
            experiences with clean, efficient, and scalable code.
          </p>
          <p>
            I am looking for new opportunities as React/Full Stack Developer.
            Currently am working at Deloitte as an ABAP Developer.
          </p>

          <p className="fw-bold">I love</p>
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
