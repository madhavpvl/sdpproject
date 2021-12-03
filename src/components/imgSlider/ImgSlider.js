import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carausel {...settings}>
      <Wrap>
        <img src="/images/one.png" />
      </Wrap>
      <Wrap>
        <img src="/images/two.png" />
      </Wrap>
      <Wrap>
        <img src="/images/three.png" />
      </Wrap>
      <Wrap>
        <img src="/images/four.png" />
      </Wrap>
      <Wrap>
        <img src="/images/five.png" />
      </Wrap>
    </Carausel>
  );
}

export default ImgSlider;


const Carausel = styled(Slider) `
    margin-top: 1px;
    margin-bottom: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
        ul li button{
            &:before{ 
                font-size: 10px;
                color: rgb(150, 158, 171);
            }
        }
        li.slick-active button:before{
            color: white;
        }

        .slick-list{
            overflow: visible;
        }
        button{
            z-index: 1;
        }
`

const Wrap = styled.div `
       img{
        cursor: pointer;
        border: 4px solid #333;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px; 
        transition: 300ms;
        overflow-x: hidden;
           
        &:hover{
                border: 4px solid rgba(249, 249, 249, 0.8);
            }
       }
       
`
