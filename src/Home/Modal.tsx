import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  async function submit() {
    const res:any = await axios.post("https://trello-sjph.onrender.com/refer/refer",{Useremail:"arpitdev323@gmail.com",email:email});
    if (res.status === 200) {
      // Show success toast
      toast.success("Email submitted successfully!");
    } else {
      // Show error toast
      toast.error("Failed to submit email. Please try again.");
      setOpen(false);
    }
    
    setOpen(false);
  }
  return (
    <div>
      <button
        className="text-white bg-blue-500 rounded-md py-2 px-12 text-2xl font-light"
        onClick={handleOpen}
      >
        Refer Now
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Email id
          </Typography>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button variant="contained" onClick={submit}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
      <Toaster/>
    </div>
  );
}
