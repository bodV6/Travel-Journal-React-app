import earthLogo from "../images/Treetog-Junior-Earth.256.png";

function Header() {
  return (
    <header>
      <div className="earth-logo-container">
        <img className="earth-logo" src={earthLogo} alt="earth"></img>
      </div>
      <h2 className="header--title"> My Travel Journal</h2>
    </header>
  );
}

export default Header;
