import React from "react";
import { observer } from "mobx-react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { DialogActions } from "@material-ui/core";
import { GiSpades,GiHearts,GiDiamonds,GiClubs } from "react-icons/gi";

import { appStore } from "../../store/AppStore";
import { getRandomSlots, getResults } from "../../common/helpers";
import Slots from "./GameSlots";

function GameDialog({ open, setOpen }) {
  const [spinnedSlots, setSpinnedSlots] = React.useState([<GiSpades/>, <GiSpades/>, <GiSpades/>]);
  const [resultText, setResultText] = React.useState("");
  const { spin, score } = appStore;

  const handleGameClose = () => {
    setResultText("");
    setSpinnedSlots(['GiSpades', 'GiSpades','GiSpades']);
    setOpen(false);
  };

  const handleFakeSpin = async () => {
    const fakeSlots = ['GiSpades', 'GiSpades', 'GiSpades'];
    await handleSpin(fakeSlots);
  };

  const handleSpin = (slots = []) => {
    setResultText("");

    const randomSlots = slots.length ? slots : getRandomSlots();

    setSpinnedSlots(randomSlots);

    const { amount, text } = getResults(randomSlots);

    spin({
      amount,
      slots: randomSlots
    });

    setResultText(text);
  };

  const isUserHasEnoughScore = () => score > 1;

  return (
    <Dialog
      open={open}
      onClose={handleGameClose}
      aria-labelledby="form-dialog-title"
      
    >
      <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>Spin <hr/></DialogTitle>
     
      <DialogContent>
        <Slots slots={spinnedSlots} />
        <DialogContentText>
          {isUserHasEnoughScore()
            ? resultText
            : "Ooops. Your limit finished"}
        </DialogContentText>
<hr/>
        <DialogActions>
          {isUserHasEnoughScore() && (
            <>
              <Button onClick={handleSpin} color="primary" variant="contained" >
                SPIN
              </Button>
              <Button onClick={handleFakeSpin} style={{backgroundColor:"green"}} variant="contained" >
                Try Fake Spin
              </Button>
            </>
          )}
          <Button onClick={handleGameClose} style={{backgroundColor:"#C31017"}} variant="contained" >
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default observer(GameDialog);
