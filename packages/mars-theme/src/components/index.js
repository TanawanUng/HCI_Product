import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import EnhancedTableHead from './table/table'
import BasicCard from './table/card'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ReplayIcon from '@mui/icons-material/Replay';
import { yellow } from '@mui/material/colors';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data)
  console.log(data.route === "/")
  console.log(data.route === "/about-us/")
  const contents = state.source.get(state.router.link);
  const content = state.source[contents.type][contents.id];

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Stack>
          {data.route === "/" &&
            <div>
              <Box sx={{ flexDirection: 'row', mt: 8, mb: 2 }}>
                <Typography sx={{ display: 'inline-block' }} variant="h4" component="div">
                  <b>Product Customization</b>
                </Typography>
                <Typography sx={{ display: 'inline-block', pl: '2em' }} variant="h5" component="div">
                  Create Order | History
                </Typography>
              </Box>
              <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                <BasicCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" width={275} />
                <BasicCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" width={275} />
                <BasicCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" width={275} />
                <BasicCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" width={275} />
              </Stack>
              <EnhancedTableHead />
            </div>
          }
          {/* <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch> */}
          {data.route === "/about-us/" &&
            <Box sx={{ flexGrow: 1, mt: 8 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Typography variant="h5" gutterBottom component="div" sx={{ letterSpacing: 3, display: 'flex', alignItems: 'center' }}>
                    <b>Product Customization</b><ReplayIcon fontSize="large" />
                  </Typography>
                  <Typography variant="body1" gutterBottom sx={{ width: '380px', mt: 2, mb: 4, letterSpacing: 2 }}>
                    {content.content.rendered}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#f27f29", width: 200 }}>สร้างออเดอร์</Button>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: 28, backgroundColor: "#13334c", width: 200 }}>ประวัติการสั่งสินค้า</Button>
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <iframe width="640" height="360" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                    <BasicCard icon={<HourglassEmptyIcon />} title="Pending" amount="-" color="#f48d40" width={155} />
                    <BasicCard icon={<CloseIcon />} title="Failure" amount="18" color="#e4606d" width={155} />
                    <BasicCard icon={<CheckIcon />} title="Success" amount="120" color="#55b96d" width={155} />
                    <BasicCard icon={<LocationCityIcon />} title="Total" amount="138" color="#425e72" width={155} />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          }
        </Stack>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 3px 3px rgba(0,0,0,0.2);
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
