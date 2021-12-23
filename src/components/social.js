import './sass/footer.scss';
import { email } from '../config';
import { GitHub, Instagram, LinkedIn, Telegram } from '@material-ui/icons';
function Social() {
  return (
    <>
      <div className="fbl">
        <a href="https://github.com/nirajsharma99">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/niraj-sharma-40132b165">
          <LinkedIn />
        </a>
        <a href="https://t.me/bazoooka99">
          <Telegram />
        </a>
        <a href="https://www.instagram.com/niraj.sharma__">
          <Instagram />
        </a>
        <div className="vl"></div>
      </div>
      <div className="fbr">
        <a href={'mailto:' + email}>{email}</a>
        <div className="vl"></div>
      </div>
    </>
  );
}
export default Social;
