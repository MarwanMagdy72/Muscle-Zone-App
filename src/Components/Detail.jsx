import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, equipment, target } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: Target,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6" textTransform="capitalize">
          Exercises keep you strong.{" "}
          <span style={{ fontWeight: "bold" }}>{name}</span> {` `}
          is one of the best exercises to target your{" "}
          <span style={{ fontWeight: "bold" }}>{target}</span>. It help you
          improve Your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
