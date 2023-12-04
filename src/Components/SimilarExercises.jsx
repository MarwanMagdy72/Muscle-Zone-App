import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Slider from "react-slick";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
  name,
}) => {
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Typography onClick={onClick} className={` left-arrow`}>
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  }
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Typography onClick={onClick} className={` right-arrow`}>
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
  };
  return <Box sx={{ mt: { lg: "100px", xs: "0" } }}></Box>;
};

export default SimilarExercises;
