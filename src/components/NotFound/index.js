import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
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
            <img
              className="route-main-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />

            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
