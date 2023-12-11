import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  handle = event => {
    console.log(event.target.value)
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state
    const filteredId = countryAndCapitalsList.filter(
      each => each.id === countryId,
    )
    console.log(filteredId)
    const {id, country} = filteredId[0]
    console.log(id)

    return (
      <div className="bg-card">
        <div className="country-capital-card">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            value={id}
            onChange={this.handle}
            className="capitals-dropdown"
            name="capitals"
            id="capitals"
          >
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="capitals" className="text">
            is capital of which country?
          </label>
          <h1 className="country-heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
