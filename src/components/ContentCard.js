import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "../App.css";

const ContentCard = ({ title, imageUrl }) => {
  return (
    <Card className="content-card">
      <CardMedia component="img" image={imageUrl} alt={title} />
      <Typography variant="h6" className="content-card-title">
        {title}
      </Typography>
    </Card>
  );
};

export default ContentCard;
