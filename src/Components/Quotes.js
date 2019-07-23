import React, { Component } from "react";

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quotesSearch: ""
    };
  }
  //   componentDidMount() {
  //     fetch("http://localhost:3002/quotes")
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         this.setState({
  //           quotes: data
  //         });
  //       });
  //   }
  handleChange = e => {
    this.setState({
      quotesSearch: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    fetch(`http://localhost:3002/quotes/search?term=${this.state.quotesSearch}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quotes: data
        });
      });
  };
  render() {
    return (
      <div>
        <h1>Hello from the quotes component</h1>{" "}
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="quotes"
            value={this.state.quotesSearch}
          />
          <button onClick={this.handleClick} type="submit">
            submit
          </button>
        </form>
        <ul>
          {this.state.quotes.map(quote => {
            return <li>{quote.quote + " " + quote.author}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Quotes;
