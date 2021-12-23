function Hamburger({ on, closeMenu }) {
  return (
    <div className={'wrapper-menu ' + (on && 'open')} onClick={closeMenu}>
      <div className="line-menu half start"></div>
      <div className="line-menu"></div>
      <div className="line-menu half end"></div>
    </div>
  );
}

export default Hamburger;
