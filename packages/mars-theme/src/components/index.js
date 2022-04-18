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
import { useState, useEffect } from "react";
import HomePage from "./homePage"
import HistoryPage from "./historyPage";

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
  // Get the data of the post.
  const content = state.source[data.type][data.id];
  console.log(content)

  const [lorem, setLorem] = useState("loading..")

  useEffect(() => {
    function removeHTML(str) {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = str;
      return tmp.textContent || tmp.innerText || "";
    }

    if (content !== undefined) {
      setLorem(removeHTML(content.content.rendered));
    }
  }, [content]);

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
          {data.route === "/history/" &&
            <HistoryPage />
          }
          <Switch>
            <Loading when={data.isFetching} />
            {/* <List when={data.isArchive} /> */}
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
            <HomePage when={data.isHome} lorem={lorem} />
          </Switch>
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
