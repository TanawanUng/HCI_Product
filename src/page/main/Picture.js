import React, { useMemo } from "react";
import { Margin } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDrag } from "react-dnd";

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor2) => ({
      isDragging: !!monitor2.isDragging(),
    }),
  }));

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  // let xxs = getRandomInt(-5, 5);
  // let yxs = getRandomInt(-5, 60);

  // let xsm = getRandomInt(-10, 10);
  // let ysm = getRandomInt(0, 40);

  // let xmd = getRandomInt(-10, 10);
  // let ymd = getRandomInt(-5, 60);

  // let xlg = getRandomInt(-5, 3);
  // let ylg = getRandomInt(-5, 40);

  // let xxl = getRandomInt(-15, 15);
  // let yxl = getRandomInt(-5, 40);

  //============================= XS
  const xxs = useMemo(() => {
    return getRandomInt(-5, 5);
  }, []);
  const yxs = useMemo(() => {
    return getRandomInt(-5, 60);
  }, []);
  //============================= SM
  const xsm = useMemo(() => {
    return getRandomInt(-10, 10);
  }, []);
  const ysm = useMemo(() => {
    return getRandomInt(0, 40);
  }, []);
  //============================= MD
  const xmd = useMemo(() => {
    return getRandomInt(-10, 10);
  }, []);
  const ymd = useMemo(() => {
    return getRandomInt(-5, 60);
  }, []);
  //============================= LG
  const xlg = useMemo(() => {
    return getRandomInt(-5, 3);
  }, []);
  const ylg = useMemo(() => {
    return getRandomInt(-5, 40);
  }, []);
  //============================= XL
  const xxl = useMemo(() => {
    return getRandomInt(-15, 15);
  }, []);
  const yxl = useMemo(() => {
    return getRandomInt(-5, 40);
  }, []);

  return (
    <Box
      ref={drag}
      component="img"
      src={url}

      // border="3px solid black"
      sx={{
        alignItems: "center",
        width: { xs: "64px", sm: "128px", md: "64px", lg: "128px" },
        m: { xs: -1, sm: 0 },
        position: "relative",
        top: { xs: `${yxs + id}%`, sm: `${ysm + id}%`, md: `${ymd + id}%`, lg: `${ylg + id}%`, xl: `${yxl + id}%` },
        left: { xs: `${xxs + id}%`, sm: `${xsm + id}%`, md: `${xmd + id}%`, lg: `${xlg + id}%`, xl: `${xxl + id}%` },
      }}
    // { border: isDragging ? "1px solid pink" : "0px"},
    />
  );
}

export default Picture;
