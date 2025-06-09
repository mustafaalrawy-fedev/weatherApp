import './App.css';
import CityWeatherInfo from './components/CityWeatherInfo';
import Header from './components/Header';
import ThemeProvider from './components/providers/ThemeProvider';
import SplashScreen from './components/utils/SplashScreen';
import ThemeToggle from './components/utils/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <SplashScreen>
        <>
          <section className='container my-5 py-5'>
            <Header />
            <CityWeatherInfo />
          </section>
          <ThemeToggle />
        </>
      </SplashScreen>
    </ThemeProvider>
  );
}

export default App;
