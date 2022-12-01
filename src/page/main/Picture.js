import { Margin } from "@mui/icons-material";
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
    <img
      ref={drag}
      src={url}
      
      width="100px"
      height="40px"
      maxWidth="100px"
      maxHeight="40px"
      // border="3px solid black"
      style={{alignItems:"center",border:"3px solid black" , padding:'3px'}}
      // { border: isDragging ? "1px solid pink" : "0px"},
    />
  );
}

export default Picture;
