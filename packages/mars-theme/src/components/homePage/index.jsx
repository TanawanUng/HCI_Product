import React from "react";
import { styled } from "frontity";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ReplayIcon from "@mui/icons-material/Replay";
import History_card from "../historyPage/history_card";

export function HomePage(props) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ letterSpacing: 3, display: "flex", alignItems: "center" }}
            >
              <b>Product Customization</b>
              <ReplayIcon fontSize="large" />
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mt: 2, mb: 4, letterSpacing: 2 }}
            >
              {/* <Html2React html={content.content.rendered} /> */}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 28,
                  backgroundColor: "#f27f29",
                  width: 200,
                }}
              >
                <body1>สร้างออเดอร์</body1>
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 28,
                  backgroundColor: "#13334c",
                  width: 200,
                }}
              >
                ประวัติการสั่งสินค้า
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <iframe
              width="730"
              height="420"
              src="https://www.youtube.com/embed/5qap5aO4i9A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
        <History_card
          icon={<HourglassEmptyIcon />}
          title="Pending"
          amount="-"
          color="#f48d40"
          width={170}
        />
        <History_card
          icon={<CloseIcon />}
          title="Failure"
          amount="18"
          color="#e4606d"
          width={170}
        />
        <History_card
          icon={<CheckIcon />}
          title="Success"
          amount="120"
          color="#55b96d"
          width={170}
        />
        <History_card
          icon={<LocationCityIcon />}
          title="Total"
          amount="138"
          color="#425e72"
          width={170}
        />
      </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 24px;
  color: rgba(12, 17, 43);
`;
