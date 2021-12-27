import { useRef } from 'react';
import './sass/loader.scss';

const getVideoSrc = (width) => {
  if (width >= 1080) return 'loader720p.mp4';
  if (width >= 720) return 'loader480p.mp4';
  return 'loader480p.mp4';
};

function Loader() {
  const loaderRef = useRef();
  const src = getVideoSrc(window.innerWidth);
  const closeLoader = () => {
    loaderRef.current.style.display = 'none';
  };
  return (
    <div className="loader" ref={loaderRef}>
      <video autoPlay playsInline muted src={src} onEnded={closeLoader} />
    </div>
  );
}
export default Loader;
