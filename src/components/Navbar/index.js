import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changingThemeNavbar = () => {
        toggleTheme()
      }

      const applyThemeColorBg = isDarkTheme
        ? 'navbar-dark-bg-light-color'
        : 'navbar-light-bg'

      return (
        <div className={`navbar-main-container ${applyThemeColorBg}`}>
          {isDarkTheme ? (
            <img
              className="navbar-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="logo"
            />
          ) : (
            <img
              className="navbar-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="logo"
            />
          )}
          <ul className="navbar-un-order-list-container">
            <Link to="/">
              <li>
                <button
                  type="button"
                  className={`navbar-list-item ${applyThemeColorBg}`}
                >
                  Home
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <button
                  className={`navbar-list-item ${applyThemeColorBg}`}
                  type="button"
                >
                  About
                </button>
              </li>
            </Link>
          </ul>
          <button type="button" onClick={changingThemeNavbar}>
            {isDarkTheme ? (
              <img
                className="navbar-logo-dark-light"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                className="navbar-logo-dark-light"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
