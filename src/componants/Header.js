import '../css/Menu.css';

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="header">
          <h1 className="header-text">Thomas Birmingham |</h1>
          <h2 className="header-text">Developpeur Front-End</h2>
          <h2 className="header-text">| Epitech 2022 Paris</h2>
        </div>
        <nav className="menu">
            <ul>
                <li><a href="/" className="menu-text">Présentation</a></li>
                <li><a href="/" className="menu-text">P_ Pro</a></li>
                <li><a href="/" className="menu-text">P_ Epitech</a></li>
                <li><a href="/" className="menu-text">P_ Perso</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
