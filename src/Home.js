import React, {Component} from "react";
import './App.css';
import 'react-slideshow-image/dist/styles.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './index';
import Img from './deer';
import Img2 from './dragging';
import Img3 from './turkey';
import Img4 from './shooting';
import Img5 from './tree';
import Img6 from './wall';
import facebook from './facebook';
import instagram from './instagram';
import youtube from './youtube';
import ninetofivelogo from './ninetofivelogo';



class Home extends Component {
  render() {
    return (
      <div>
        <h4 className={"bigLogo"}>
          <img src={ninetofivelogo} height={"400"} width={"400"}/>
        </h4>
        <h1 className={"title"} style={{textAlign: "center", marginBottom: 50, marginTop: 10}}>Nine2Five Outdoors</h1>
        <p style={{textAlign: "center", paddingLeft: 500, paddingRight: 500}}>My name is Ian Gamble, and welcome to my page. I would describe myself as an
          outdoor enthusiast, who also happens to be a software engineer. In fact, this page was built 100% from scratch, line by line, by your's
        truly!</p>
        <p style={{textAlign: "center", marginBottom: 50, paddingLeft: 500, paddingRight: 500}}>The purpose for this page is to share with you my stories, videos, and even some awesome wild game recipes. Whether you are a lifelong
        outdoorsman, or thinking about diving into the outdoor lifestyle, I hope this page has something for you.</p>

        <div className={"links"}>
        <a href={"https://www.facebook.com/ian.gamble.39/"} target={"_blank"} rel={"noopener noreferrer"}>
          <img src={facebook} alt={""} className={"Facebook"} width={"70"} height={"70"}/>
        </a>
          <a href={"https://www.instagram.com/ian_gamble/?hl=en"} target={"_blank"} rel={"noopener noreferrer"}>
            <img src={instagram} alt={""} className={"Instagram"} width={"75"} height={"75"}/>
          </a>
          <a href={"https://www.youtube.com/user/lizardSEALMAN1"} target={"_blank"} rel={"noopener noreferrer"}>
            <img src={youtube} alt={""} className={"Youtube"} width={"135"} height={"75"}/>
          </a>
        </div>

          <AliceCarousel autoPlay autoPlayInterval="4000" fadeOutAnimation={false}>
            <img src={Img} className="sliderimg"/>
            <img src={Img2} className="sliderimg"/>
            <img src={Img3} className="sliderimg"/>
            <img src={Img4} className="sliderimg"/>
            <img src={Img5} className="sliderimg"/>
            <img src={Img6} className="sliderimg"/>
          </AliceCarousel>

      </div>
    );
  }
}

export default Home;