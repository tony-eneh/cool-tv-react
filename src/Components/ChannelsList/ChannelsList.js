import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import favouriteIcon from "../../images/love-icon.png";

export default class ChannelsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
      channels: [],
    };
    // this.show = this.show.bind(this);
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL || "http://localhost:4200/api/channels")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          channels: data,
          isLoading: false,
        });
      })
      .catch((err) =>
        this.setState({
          error: err,
          isLoading: false,
        })
      );
  }

  shout() {
    alert("ewoo");
  }

  render() {
    return (
      <>
        <Header className="header" />

        <section className="main">
          {/* <!-- TODO put placeholder image in video element below --> */}
          <div className="channels-title">
            <span>CHANNELS</span>

            <span className={["a-class", "another-class"]}>Channels</span>
          </div>
          <ul className="channels-list">
            {this.state.isLoading && <li>Loading...</li>}
            {this.state.error && (
              <>
                <li>
                  An Error occured while Loading your channels. Try refreshing
                  the browser
                </li>
                <li>{this.state.error.message}</li>
              </>
            )}
            {!this.state.isLoading &&
              !!this.state.channels.length &&
              this.state.channels.map((channel) => (
                <li key={channel.id}>{channel.name}</li>
              ))}
          </ul>
          {/* shout is a function defined in this component */}
          <button
            onClick={this.shout}
            style={{ backgroundColor: "yellow", borderRadius: "5px" }}
          >
            Y'ello
          </button>
        </section>
      </>
    );
  }
}
