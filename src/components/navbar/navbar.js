import { useState } from 'react';
import { MenuItems } from './menu-items';
import '../sass/navbar.scss';
import Hamburger from './hamburger';
/*import Aos from 'aos';
import 'aos/dist/aos.css';*/

function Navbar() {
  /*useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);*/
  const [on, SetOn] = useState(false);
  const closeMenu = () => {
    SetOn(!on);
  };
  return (
    <nav className="NavbarItems">
      <div className="menu-icon">
        <Hamburger on={on} closeMenu={closeMenu} />
      </div>
      <span className="nav-name">logo</span>
      <div className={on ? 'nav-contents active' : 'nav-contents'}>
        <ol className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url} onClick={closeMenu}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ol>
        <a href="resume.pdf" className="resume-button">
          Resume
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
