import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ country, setCountry }) {
  const options = useMemo(() => countryList().getData(), []);
  return <Select options={options} value={country} onChange={setCountry} />;
}

export default CountrySelector;
