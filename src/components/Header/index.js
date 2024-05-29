// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <nav clssName="header-container">
    <div clssName="logo-and-title-container">
      <img
        alt="wave"
        clssName="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 clssName="title">Wave</h1>
    </div>
    <ul clssName="nav-items-list">
    <li clssName="link-item">
    <Link clssName="route-limk" to="/">Home </Link>
    </li>
     <li clssName="link-item">
    <Link clssName="route-limk" to="about">About </Link>
    </li>
     <li clssName="link-item">
    <Link clssName="route-limk" to="content">Content </Link>
    </li>
    </ul>
  </nav>
)

export default Header
