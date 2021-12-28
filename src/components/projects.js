import './sass/projects.scss';
import { GitHub, LanguageTwoTone } from '@material-ui/icons';
import VanillaTilt from 'vanilla-tilt';
function Projects() {
  const projects = [
    {
      type: 'Featured Project',
      name: 'Fizzbee Player',
      pic: 'fizzbee.png',
      desc: 'A customisable music player using Spotify Web API and SDK (Note: Spotify premium is needed).Have implemented the YouTube API too, one can enjoy the music video on the same player.',
      techList: ['React', 'Node', 'Express', 'Axios', 'Material-UI'],
      links: [
        {
          github: 'https://github.com/nirajsharma99/fizzbee',
          website: 'http://fizzbee.herokuapp.com/',
        },
      ],
    },
    {
      type: 'Freelance Project',
      name: 'Portfolio + Gallery',
      pic: 'portgal.png',
      desc: 'A web app for a client to showcase her skills and artwork.Added a Gallery with slideshow and form.Has a separate admin section for my client to upload images and edit the homepage.',
      techList: [
        'React',
        'Firebase',
        'Material-UI',
        'aos',
        'email.js',
        'compressor.js',
      ],
      links: [
        {
          github: 'https://github.com/nirajsharma99/nishajhaportfolio',
          website: 'http://nishajha.netlify.app/',
        },
      ],
    },
    {
      type: 'Featured Project',
      name: 'Opinion Poll',
      pic: 'poll.png',
      desc: 'A real-time app where users can create anonymous polls.',
      techList: [
        'React',
        'Node',
        'Firebase',
        'Material-UI',
        'socket.io',
        'passport.js',
        'bcrypt.js',
      ],
      links: [
        {
          github: 'https://github.com/nirajsharma99/Opinion-poll',
          website: 'https://opinion-poll-app.herokuapp.com/',
        },
      ],
    },
  ];
  VanillaTilt.init(document.querySelectorAll('.project-image'), {
    max: 20,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
    gyroscope: true,
  });
  return (
    <section id="projects" className="projects">
      <h2 className="numbered-heading">My Recent Works</h2>
      <ul>
        {projects.map((project, i) => (
          <li className="project-inner" key={i}>
            <div className="project-content">
              <div>
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">
                  <a href={project.links[0].website}>{project.name}</a>
                </h3>
                <div className="project-desc">
                  <p>{project.desc}</p>
                </div>
                <ul className="project-tech-list">
                  {project.techList.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.links[0].github}>
                    <GitHub />
                  </a>
                  <a href={project.links[0].website}>
                    <LanguageTwoTone fontSize="medium" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.links[0].website}>
                <div className="img">
                  <div>
                    <img src={project.pic} alt={project.pic} />
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Projects;
