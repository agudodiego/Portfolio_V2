import '../styles/Header.css';
import { Link } from "react-router-dom";
import logo from '../images/logos/logoAD.png';

const Header = () => {
  return (
    <main className="header_container container p-2 ">
      <div className="row d-flex align-items-center justify-content-around">
        <img className='logo col-1' src={logo} alt="logo A3D" />
        <div className="col-sm-10 d-flex justify-content-around">
          <Link className='link' to={'/'}><p className='link'>Home</p></Link>
          <Link className='link' to={'/about'}><p className='link'>About</p></Link>
          <Link className='link' to={'/projects'}><p className='link'>Projects</p></Link>
          <Link className='link' to={'/contact'}><p className='link'>Contact</p></Link> 
        </div>
      </div>
    </main>
  )
}

export default Header;