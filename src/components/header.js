import '../css/global.css';
import '../css/header.css';


function Header(){
    return(
        <header className="header-content">
            <div>
              {/* <img className="img-logo" src={logoClinica} alt="Logo da clínica" /> */}
              <p>Clínica de Nutrição</p>            
            </div>
        </header>
    )
};

export default Header;