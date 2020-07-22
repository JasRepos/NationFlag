import React, { Component, Fragment } from 'react'
import CountryList from '../CountryList/CountryList'
import { connect } from 'react-redux'

const mapState = state => ({
    countries: state.countries.countries,
})

class CountryDashboard extends Component {
    

    render() {

        const {countries} = this.props
        return (
            <Fragment>
                <CountryList countries={countries} />
                
            </Fragment>
        )
    }
}

export default connect(mapState)(CountryDashboard)