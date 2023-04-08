import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="route-main-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
