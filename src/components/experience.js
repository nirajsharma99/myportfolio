import './sass/experience.scss';
import './sass/about.scss';

import { useState } from 'react';
function Experience() {
  const worked = [
    {
      title: 'SAP ABAP Developer',
      company: 'Deloitte',
      location: 'Hyderabad, India',
      range: 'Sept 2021 - Present',
      url: 'https://www2.deloitte.com/us/en.html',
      content: [
        ' NetWeaver-Development WebAppSer ABAP Developer.',
        'Am a backend ABAP developer at Deloitte working on a project of USA’s one of the top telecom companies.',
        'In the bootcamp training by Deloitte I was trained in ABAP and OO ABAP.',
        'Had some hands-on experience in Reports, BAPIs, AIF, Interfaces and Classes.',
      ],
    },
  ];
  const [selected, setSelected] = useState(worked[0]);

  return (
    <section id="experience" className="experience">
      <h2 className="numbered-heading">Experiences</h2>
      <div className="inner">
        <div className="tabList">
          {worked.map((item, index) => (
            <button
              className={
                'tabButtons ' + (selected.company === item.company && 'active')
              }
              onClick={() => setSelected(item)}
              role="tab"
              key={index}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="tabPanels">
          <div className="tabPanels-inner">
            <h3>
              <span>{selected.title}</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a href={selected.url} className="link">
                  {selected.company}
                </a>
              </span>
            </h3>
            <p className="range">{selected.range}</p>
            <div>
              <ul>
                {selected.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
