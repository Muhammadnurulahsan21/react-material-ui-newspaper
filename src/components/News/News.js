import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const News = (props) => {
  const { title, description, urlToImage } = props.article;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        min-height="194"
        image={urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default News;
