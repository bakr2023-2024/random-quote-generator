import React from "react";
import "./App.css";
class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      theme: "",
    };
    this.handleNewQuoteBtn = this.handleNewQuoteBtn.bind(this);
  }
  async handleNewQuoteBtn(event) {
    event.preventDefault();
    const newQuote = await this.props.generateQuote();
    const themeColor = this.props.generateColor();
    document.getElementById("container").style.backgroundColor = themeColor;
    this.setState((state) => ({
      content: newQuote.content,
      author: newQuote.author,
      theme: themeColor,
    }));
  }
  async componentDidMount() {
    const newQuote = await this.props.generateQuote();
    const themeColor = this.props.generateColor();
    document.getElementById("container").style.backgroundColor = themeColor;
    this.setState((state) => ({
      content: newQuote.content,
      author: newQuote.author,
      theme: themeColor,
    }));
  }
  render() {
    return (
      <div id="quote-box" style={{ color: this.state.theme }}>
        <h3 id="text">
          <i className="fa fa-quote-left"></i>&nbsp;
          {this.state.content}
        </h3>
        <p id="author">{this.state.author}</p>
        <div className="container-fluid d-flex justify-content-between p-0 m-0">
          <div className="links">
            <a
              href={`https://twitter.com/intent/tweet?text="${this.state.content}"%20${this.state.author}%20%23quotes`}
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <button style={{ backgroundColor: this.state.theme }}>
                <i className="fa-brands fa-twitter"></i>
              </button>
            </a>
            <a href="https://tumblr.com" target="_blank" rel="noreferrer">
              <button style={{ backgroundColor: this.state.theme }}>
                <i className="fa-brands fa-tumblr"></i>
              </button>
            </a>
          </div>
          <div className="newQuote">
            <button
              id="new-quote"
              style={{ backgroundColor: this.state.theme }}
              onClick={this.handleNewQuoteBtn}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Quote;
