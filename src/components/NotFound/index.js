import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const applyThemeColorBg = isDarkTheme
        ? 'dark-bg-light-color'
        : 'light-bg-dark-color'

      return (
        <div className={`main-container ${applyThemeColorBg}`}>
          <img
            className="route-main-image"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt=" not found"
          />

          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
