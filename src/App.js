import React from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
        className={classes.grid}
      >
        <Grid item xs={12} sm={4}>
          <Details detailClass="income" title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details detailClass="expense" title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
