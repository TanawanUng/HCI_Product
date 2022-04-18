import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import { Grid, Box} from "@mui/material";
import Avatar from '@mui/material/Avatar';

// import { useState } from "react";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';



const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={7}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
            <Avatar src="/static/images/Logo.png" sx={{ width: 56, height: 56, mr:2 }} />
            <Box>
            <StyledLink link="/">
              <Title>{state.frontity.title}</Title>
            </StyledLink>
            <Description>{state.frontity.description}</Description>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <MobileMenu />
            <Nav />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 2px;
  font-family: Open Sans;
  color: rgba(0, 0, 0, 1);
  letter-spacing: 2px;
`;

const Description = styled.p`
  margin: 0;
  font-family: Prompt;
  color: rgba(0, 0, 0, 1);
  letter-spacing: 1.5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
