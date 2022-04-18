import { useEffect } from "react";
import { connect, styled } from "frontity";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Divider
} from "@mui/material";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const History_card = ({ icon, title, amount, color, width }) => {
  return (
    <Card sx={{ minWidth: width }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Avatar sx={{ bgcolor: `${color}`, width: 32, height: 32, mr: 1 }}>
            {icon}
          </Avatar>
          <Typography component="h2" variant="p" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Typography
          component="p"
          variant="h4"
          sx={{ my: 2, textAlign: "center" }}
        >
          {amount}
        </Typography>
        <Divider
          sx={{ background: `${color}`, borderBottomWidth: 3 }}
          variant="middle"
        />
      </CardContent>
    </Card>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(History_card);
