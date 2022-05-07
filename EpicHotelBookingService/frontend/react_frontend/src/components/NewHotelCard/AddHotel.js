import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./AddHotel.css";
import { ApiInstance } from "../../api/axiosInstance";


export default function AddNewHotelCard(props) {
  const { onClose, open } = props;

  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [hotelAddress, setaddress] = useState("");
  const [hotelEmail, setemail] = useState("");
  const [hotelPhone, setphone] = useState("");
  const [hotelBasePrice, setprice]  = useState("");
  const [hoteldesc, setdesc] = useState("");



  const onHotelAdd = () => {
    //call api here
    ApiInstance.post("hotels", { hotelName,hoteldesc, location,hotelAddress, hotelEmail, hotelPhone,hotelBasePrice,})
  };

  return (
    <Dialog fullWidth maxWidth="md" onClose={onClose} open={open}>
      <DialogTitle>Add New Hotel</DialogTitle>
      <DialogContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-name"
            label="Name"
            value={hotelName}
            onChange={(e) => {
              setHotelName(e.target.value);
            }}
          />
        </Typography>
        <Typography
                  className="typography-spacing-add"
                  variant="body2"
                  color="text.secondary"
                >
                  <TextField
                    fullWidth
                    id="outlined-roomtype"
                    label="Hotel Desc"
                    value={hoteldesc}
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                  />
                </Typography>
        <Typography
          fullWidth
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-location"
            label="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Typography>
        <Typography
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-rooms"
            label="Hotel Address"
            value={hotelAddress}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
        </Typography>
        <Typography
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-roomtype"
            label="Enter Email"
            value={hotelEmail}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </Typography>

        <Typography
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-roomtype"
            label="hotelPhone"
            value={hotelPhone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </Typography>


        <Typography
          className="typography-spacing-add"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            fullWidth
            id="outlined-roomtype"
            label="Price"
            value={hotelBasePrice}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </Typography>



      </DialogContent>
      <DialogActions>
        <Button size="small" onClick={onHotelAdd}>
          Add
        </Button>
        <Button size="small" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
