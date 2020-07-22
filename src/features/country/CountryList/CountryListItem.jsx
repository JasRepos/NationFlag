import React, { Component, Fragment } from 'react'


class CountryListItem extends Component {
    render() {
        const {country} = this.props
        return (
            <Fragment>
           
           <h2>{country.name}</h2>
           <img alt="flag" height="100px"  src={country.flag} ></img>
              
            
          </Fragment>
        )
    }
}

export default CountryListItem