import React, { Component, Fragment } from "react";
import CountryListItem from "./CountryListItem";

class CountryList extends Component {
  render() {
    const {countries} = this.props
    return (
      <Fragment>
        {countries.map((country) => (
          <CountryListItem key={country.population} country={country} />
        ))}
      </Fragment>
    );
  }
}

export default CountryList;
