import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import posterImage from "../../images/fight-lady.jpg";
// import RxPlayer from "rx-player";
// import ShakaPlayer from 'shaka-player-react';
import Hls from "hls.js";

export default class ChannelsSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channelPath: window.location.pathname, channel: {} };
  }

  componentDidMount() {
    fetch(`http://localhost:4200/api${this.state.channelPath}`)
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          channel: data[0],
        }); /** it's actually a unit length array, so you take the first member */
        console.log(`got this data: ${JSON.stringify(data)}`);
        console.log(`data name: ${data.name}`);
      })
      .then(() => {
        var video = document.querySelector("video.channel-stream");
        var videoSrc = this.state.channel.url;
        if (Hls.isSupported()) {
          var hls = new Hls();
          hls.loadSource(videoSrc);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
          });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = videoSrc;
          video.addEventListener("loadedmetadata", function () {
            video.play();
          });
        }
      });
  }

  render() {
    return (
      <>
        <Header></Header>
        <section className="main channel-single">
          <div className="back-nav-overlay" onclick="toggleOverlay()">
            <Link to="/channels" className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                <path
                  id="Shape 3"
                  className="shp0"
                  d="M12.57 214.24L233.7 15.22C242.3 7.48 252.61 3.6 264.61 3.6C276.38 3.6 286.57 7.48 295.18 15.22L320.65 38.15C329.26 45.48 333.56 54.66 333.56 65.66C333.56 76.67 329.26 85.84 320.65 93.18L221.13 183.06L460.26 183.06C472.04 183.06 481.6 186.88 488.96 194.52C496.32 202.16 500 211.39 500 222.19L500 261.32C500 272.13 496.32 281.35 488.96 288.99C481.6 296.63 472.04 300.45 460.26 300.45L221.13 300.45L320.65 390.03C329.26 397.78 333.56 407.05 333.56 417.85C333.56 428.65 329.26 437.92 320.65 445.67L295.18 468.6C286.35 476.13 276.15 479.91 264.61 479.91C252.83 479.91 242.53 476.13 233.7 468.6L12.57 269.58C4.19 262.04 0 252.76 0 241.75C0 230.55 4.19 221.38 12.57 214.24L12.57 214.24Z"
                />
              </svg>
            </Link>
          </div>
          {/* <!-- TODO put placeholder image in video element below --> */}
          <video
            className="channel-stream"
            poster={posterImage}
            onclick="toggleOverlay()"
            controls
          />
          <h3 className="channel-title">
            {this.state.channel.name || "ewoo title"}
          </h3>
          <div className="channel-description">
            <h4>Description</h4>
            <p>{this.state.channel.description}</p>
          </div>
        </section>
      </>
    );
  }
}
