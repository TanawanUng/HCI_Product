import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import { Avatar, Box } from '@mui/material';

const Header = ({ state }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Avatar
        alt="Logo"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, ml: 3 }}
      />
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </Box>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  margin-top: -0.5rem;
  color: rgba(0, 0, 0, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
