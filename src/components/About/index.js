import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const applyThemeColorBg = isDarkTheme
        ? 'dark-bg-light-color'
        : 'light-bg-dark-color'

      return (
        <>
          <Navbar />
          <div className={`main-container ${applyThemeColorBg}`}>
            {isDarkTheme ? (
              <img
                className="route-main-image"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="route-main-image"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
