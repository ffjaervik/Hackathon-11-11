import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  objectFit: "contain",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CommentModal({comments,setComments}) {
   const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
    let handleSubmit = (e) => {console.log("Submitted with value:",e.target.value)}
  return (
    <>
      <Button onClick={handleOpen}>View Comment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Currently 0 comments
          </Typography>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea
              placeholder="Leave a Comment..."
              className="p-4"
              
              onChange={(e)=>{console.log(e.target.value)}}
            ></textarea>
          </Typography>
          <Button type="submit">Submit</Button>
</form>
        </Box>
      </Modal>
    </>
  );
}

export default CommentModal;
