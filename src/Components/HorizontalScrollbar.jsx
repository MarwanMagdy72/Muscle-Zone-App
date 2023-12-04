import React from "react";
import BodyPart from "./BodyPart";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import Slider from "react-slick";
import { Typography } from "@mui/material";
import ExerciseCard from './ExerciseCard';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart , isBodyParts }) => {
function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <Typography onClick={onClick} className={` left-arrow`} >
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  }
    function SampleNextArrow(props) {
      const {  onClick } = props;
      return (
        <Typography onClick={onClick} className={` right-arrow`} >
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
      );
    }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div >
      <Slider {...settings} >
        {data?.map((item, index) => (
          isBodyParts ? <BodyPart item={item} key={index} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item}/>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScrollbar;
