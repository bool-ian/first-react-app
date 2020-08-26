import React, {Component} from "react";
import './App.css';
import 'react-slideshow-image/dist/styles.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Img from './deer';
import Img2 from './dragging';
import Img3 from './turkey';
import Img4 from './shooting';
import Img5 from './tree';
import Img6 from './wall';

class Home extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign: "center", marginBottom: 50, marginTop: 50}}>My Outdoor Life</h3>
        <p style={{textAlign: "center", paddingLeft: 500, paddingRight: 500}}>My name is Ian Gamble, and welcome to my page. I would describe myself as an
          avid outdoorsman, who also happens to be a software engineer. In fact, this page was built 100% from scratch, line by line, by your's
        truly!</p>
        <p style={{textAlign: "center", marginBottom: 50, paddingLeft: 500, paddingRight: 500}}>The purpose for this page is to share with you my stories, videos, and even some awesome wild game recipes. Whether you are a lifelong
        outdoorsman, or thinking about diving into the outdoor lifestyle, I hope this page has something for you.</p>
        <AliceCarousel autoPlay autoPlayInterval="5000" fadeOutAnimation={true}>
          <img src={Img} className="sliderimg" style={{alignItems: "center"}}/>
          <img src={Img2} className="sliderimg" style={{alignItems: "center"}}/>
          <img src={Img3} className="sliderimg" style={{alignItems: "center"}}/>
          <img src={Img4} className="sliderimg" style={{alignItems: "center"}}/>
          <img src={Img5} className="sliderimg" style={{alignItems: "center"}}/>
          <img src={Img6} className="sliderimg" style={{alignItems: "center"}}/>
        </AliceCarousel>

        <div style={{textAlign: "center", fontSize: 20}}>
          <a href="https://www.facebook.com/ian.gamble.39/" target={"_blank"} style={{font: "veranda"}}>FaceBook</a>
          <br/>
          <br/>
          <a href="https://www.instagram.com/ian_gamble/?hl=en" target={"_blank"}
             style={{font: "veranda"}}>Instagram</a>
        </div>

      </div>
    );
  }
}

export default Home;