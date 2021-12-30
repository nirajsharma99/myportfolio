import './sass/matrix.scss';

function Matrix() {
  return (
    <div className="matrix-holder">
      {Array(100)
        .fill()
        .map((slok, i) => (
          <span
            key={i}
            style={{ animationDelay: `${Math.floor(Math.random() * 20)}s` }}
          >
            {Array(Math.round(Math.random() * 50))
              .fill()
              .map(() => Math.round(Math.random()))}
          </span>
        ))}
    </div>
  );
}
export default Matrix;
