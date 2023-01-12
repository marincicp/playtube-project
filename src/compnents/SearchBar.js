import "../compnents/scss/style.scss";
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="searchBar-container">
        <div className="left-side">
          <div className="logo-box">
            <ion-icon className="logo" name="logo-youtube"></ion-icon>
          </div>
          <div>
            <h2>PlayTube</h2>
          </div>
        </div>
        <form onSubmit={this.onFormSubmit} className="form">
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search ..."
          />

          <button>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
