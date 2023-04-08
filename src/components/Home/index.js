import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const applyThemeColorBg = isDarkTheme
        ? 'dark-bg-light-color'
        : 'light-bg-dark-color'

      return (
        <div className={`home-main-container ${applyThemeColorBg}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
          )}
          <h1>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
