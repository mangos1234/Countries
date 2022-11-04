import "./App.css";
import Navbar from './modules/Navbar';
import SearchBar from './modules/SearchBar';
import Filter from './modules/Filter'
import CountryCard from './modules/CountryCard'
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [darkMode, setDarkMode] = useState(false);
  let sectionclasses = `main ${darkMode && 'darkmain'}`;

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }, [])
  
  const dark = () => {
    console.log("dark")
    setDarkMode(prev=>!prev)
  }

  const FilterChangeHandler = ({value}) => {
    setFilteredData(data.filter(country => country.continents[0].includes(value)));
  }
  
  const SearchHandler = ({value}) => {
    setFilteredData(data.filter(country => country.name.official.toLowerCase().includes(value)));
  }

  let displayedCountries = filteredData.length > 0 ? filteredData : data;

  return(
    <section className={sectionclasses}>
      <Navbar onDark={dark} mode={darkMode} />
      <SearchBar mode={darkMode} onSearch={SearchHandler} />
      <Filter mode={darkMode} onFilterChange={FilterChangeHandler} />
      <div className="cardContainer">
        {displayedCountries.map(country=>{
          return <CountryCard mode={darkMode} country={country} key={country.name.official}/>
        })}
      </div>
    </section>
  )
}

export default App;