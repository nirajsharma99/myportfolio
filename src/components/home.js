import './sass/home.scss';
function Home() {
  return (
    <section className="home">
      <div className="hs1 mt-5">
        <h1>Hi, my name is</h1>
      </div>
      <div className="hs2">
        <h2 className="big-heading">Niraj Sharma.</h2>
      </div>
      <div className="hs3">
        <h3 className="big-heading">I'm a Web-Dev Enthusiast!</h3>
      </div>
      <div className="hs4">
        <p>
          I like building things for the web. This is the only thing that keeps
          me going. I currently work at Deloitte. as an ABAP Developer.
        </p>
        <p className="more mt-5">More</p>
      </div>
    </section>
  );
}
export default Home;
