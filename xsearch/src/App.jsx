import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchCountries, setSearchCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      let countriesData = await fetch(
        "https://xcountries-backend.labs.crio.do/all",
      );
      let countries = await countriesData.json();
      setCountries(countries);
    } catch (error) {
      console.error("Error fetching data: ", error);
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setSearchCountries(filtered);
  }, [searchText, countries]);

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="container">
        {searchCountries.map((country, index) => {
          return (
            <div className="countryCard" key={country.name + index}>
              <img src={country.flag} alt={country.abbr} />
              <span>{country.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
