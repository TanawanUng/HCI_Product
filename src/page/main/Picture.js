import { Margin } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor2) => ({
      isDragging: !!monitor2.isDragging(),
    }),
  }));
  return (
    <Box
      ref={drag}
      component="img"
      src={url}

      // border="3px solid black"
      sx={{ alignItems: "center", width: { xs: "64px", sm: "128px" } }}
    // { border: isDragging ? "1px solid pink" : "0px"},
    />
  );
}

export default Picture;
