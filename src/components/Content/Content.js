import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { observer } from "mobx-react";

import { appStore } from "../../store/AppStore";
import GameHistoryTable from "./GameHistoryTable";
import GameDialog from "./GameDialog";
import { GiSpades, GiHearts, GiDiamonds, GiClubs } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    flexDirection: "column",

  },
  leftcontent: {
    backgroundImage: `url(${"Images/img2.jpg"})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',

  },
  gameBegin: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(15),
    flexGrow: 1,
    borderRadius: "10px",
    padding: "10px"
  }
}));

function Content() {
  const classes = useStyles();

  const { username, login } = appStore;

  const [gameOpen, setGameOpen] = React.useState(false);

  const startGame = async () => {
    if (!username) {
      await login("Guest");
    }

    setGameOpen(true);
  };

  return (

    <Container component="main" className={classes.content}>
      <Grid container>
        <Grid item xs={6} className={classes.leftcontent}>

          <Button
            className={classes.gameBegin}
            variant="contained"
            color="secondary"
            onClick={startGame}
          >
            Start game as {username || "a guest"}
          </Button>
          <GameDialog open={gameOpen} setOpen={setGameOpen} />
        </Grid>

        <Grid item xs={6}>
          <GameHistoryTable />
        </Grid>


      </Grid>


    </Container>
  );
}

export default observer(Content);
