import './sass/footer.scss';
import { GitHub, Instagram, LinkedIn, Telegram } from '@material-ui/icons';
function Footer() {
  return (
    <footer>
      <div className="fb">
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
      </div>
      <div className="fc">
        <a href="https://github.com/nirajsharma99">Built by Niraj Sharma</a>
      </div>
    </footer>
  );
}
export default Footer;
