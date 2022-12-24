import { useEffect, useState } from "react";

export default function AllCountries() {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        // console.log(data);
      });
  }, []);

  console.log(countriesData);
  return (
    <div>
      AllCountries
      {countriesData?.map((country, index) => {
        console.log(country);
        return (
          <h1>
            index {index} || Country Name: {country.name.common}
          </h1>
        );
      })}
    </div>
  );
}
