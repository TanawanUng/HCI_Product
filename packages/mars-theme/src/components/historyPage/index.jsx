import React from "react";
import { styled } from "frontity";
import EnhancedTable from "./history_table";
import History_card from "./history_card";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import AllInboxRoundedIcon from "@mui/icons-material/AllInboxRounded";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ReplayIcon from "@mui/icons-material/Replay";

export function HistoryPage(props) {
  return (
    <Container>
      <Title>Product Customization</Title>
      <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
        <History_card
          icon={<HourglassEmptyIcon />}
          title="Pending"
          amount="-"
          color="#f48d40"
          width={300}
        />
        <History_card
          icon={<CloseIcon />}
          title="Failure"
          amount="18"
          color="#e4606d"
          width={300}
        />
        <History_card
          icon={<CheckIcon />}
          title="Success"
          amount="120"
          color="#55b96d"
          width={300}
        />
        <History_card
          icon={<LocationCityIcon />}
          title="Total"
          amount="138"
          color="#425e72"
          width={300}
        />
      </Stack>
      <EnhancedTable />
    </Container>
  );
}

const Container = styled.div`
  width: 1080px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 24px;
  color: rgba(12, 17, 43);
`;
