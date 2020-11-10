import React,{Fragment} from 'react';
const currencyNames = {
  r: 'Rupee',
  d: 'Dollar'
};
function toDollar(dollar) {
  console.log("From To Dollar");
  return (dollar / 71.57);
}

function toRupee(rupee) {
  console.log("From To Rupee");
  return (rupee * 71.57);
}




function tryConvert(currencyValue, convert) {
  console.log("from trycovert" + convert(parseFloat(currencyValue)));
  const input = parseFloat(currencyValue);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('From Currency Change fun() :' + e.target.value);
    this.props.onCurrencyChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    const currency = this.props.currency;
    return (


      <div className="form-group form-group-sm">
        <label htmlFor="organisation">Enter value in {currencyNames[currency]}:</label>
        <input className="form-control" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}
class RsToDollar extends React.Component {


  constructor(props) {
    super(props);
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.state = { value: '', currency: 'r' };
  }

  handleRupeeChange(value) {
    console.log("From Rupee Change function")
    this.setState({ currency: 'r', value });
  }

  handleDollarChange(value) {
    console.log("From Dollar Change function")
    this.setState({ currency: 'd', value });
  }

  render() {
    const currency = this.state.currency;
    const value = this.state.value;
    const rupee = currency === 'r' ? tryConvert(value, toRupee) : value;
    const dollar = currency === 'd' ? tryConvert(value, toDollar) : value;

    return (
      <div>
        <CurrencyInput
          currency="r"
          value={rupee}
          onCurrencyChange={this.handleRupeeChange} />
        <CurrencyInput
          currency="d"
          value={dollar}
          onCurrencyChange={this.handleDollarChange} />
   <Fragment>
      <dt>Term</dt>
      <dd>Description</dd>
    </Fragment>
      </div>
      
    );
  }
}
export default RsToDollar