import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { SecureAPIInstance } from "../../api/axiosInstance";
import Notification  from "../../components/Notification/Notification"
    import ConfirmDialog  from "../../components/ConfirmDialog/ConfirmDialog"

import "./Card.css";

export default function HotelCard(props) {
  const [hotelName, setHotelName] = useState(props.name);
  const [location, setLocation] = useState(props.loc);
  //const [roomsCount, setRoomsCount] = useState(props.rooms);
  //const [roomtype, setRoomtype] = useState(props.type);
  const [hotelId, setHotelId] = useState(props.id);


  const [hotelDescription, setHotelDescription] = useState(props.desc);
  const [hotelAddress, setHotelAddress] = useState(props.address);
  const [hotelEmail, setHotelEmail] = useState(props.email);
  const [hotelPhone, setHotelPhone] = useState(props.phone);
  const [hotelBasePrice, setHotelBasePrice] = useState(props.price);
  const [notify , setNotify] = useState({isOpen:false, message:'',type:''})
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

  console.log(props)


  const { removeHotel } = props;

  //added now
  const { updateHotel} = props;


//added now
  const onHotelUpdate = () => {
  setConfirmDialog({
                ...confirmDialog,
                isOpen: false
            })
       SecureAPIInstance.put("/hotels/"+hotelId, {hotelName,hotelDescription, location,hotelAddress, hotelEmail, hotelPhone,hotelBasePrice,})
         .then((response) => [updateHotel(response.id)])
         .catch((err) => {});

          setNotify({
             isOpen:true,
             message:'updated Successfully',
             type:'success'
             })

  };


  const onHotelDelete = () => {
   setConfirmDialog({
              ...confirmDialog,
              isOpen: false
          })
    SecureAPIInstance.delete("/hotels/"+hotelId, {})
      .then((response) => [removeHotel(response.id)])
      .catch((err) => {});
        setNotify({
                  isOpen: true,
                  message: 'Deleted Successfully',
                  type: 'error'
              })

  };

  const { image } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Motel 6" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            id="outlined-name"
            label="Name"
            value={hotelName}
            onChange={(e) => {
              setHotelName(e.target.value);
            }}
          />
        </Typography>


        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          <TextField
            id="outlined-location"
            label="Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Typography>


     <Typography
              className="typography-spacing"
              variant="body2"
              color="text.secondary"
            >
              <TextField
                id="outlined-rooms"
                label="Hotel Description"
                value={hotelDescription}
                onChange={(e) => {
                  setHotelDescription(e.target.value);
                }}
              />
            </Typography>
            <Typography
              className="typography-spacing"
              variant="body2"
              color="text.secondary"
            >
              <TextField
                id="outlined-roomtype"
                label="Hotel Address"
                value={hotelAddress}
                onChange={(e) => {
                  setHotelAddress(e.target.value);
                }}
              />
            </Typography>

      <Typography
               className="typography-spacing"
               variant="body2"
               color="text.secondary"
             >
               <TextField
                 id="outlined-rooms"
                 label="Hotel Email"
                 value={hotelEmail}
                 onChange={(e) => {
                   setHotelEmail(e.target.value);
                 }}
               />
             </Typography>
             <Typography
               className="typography-spacing"
               variant="body2"
               color="text.secondary"
             >
               <TextField
                 id="outlined-roomtype"
                 label="Hotel Phone"
                 value={hotelPhone}
                 onChange={(e) => {
                   setHotelPhone(e.target.value);
                 }}
               />
             </Typography>

     <Typography
                    className="typography-spacing"
                    variant="body2"
                    color="text.secondary"
                  >
                    <TextField
                      id="outlined-roomtype"
                      label="Hotel Base Price"
                      value={hotelBasePrice}
                      onChange={(e) => {
                        setHotelBasePrice(e.target.value);
                      }}
                    />
      </Typography>

      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={() => {   setConfirmDialog({
                                                                                                                     isOpen: true,
                                                                                                                     title: 'Are you sure to update this record?',
                                                                                                                     subTitle: "You can't undo this operation",
                                                                                                                 onConfirm: () => {onHotelUpdate()}
                                                                                                                 })
                                                                                                             }}>
          Update
        </Button>

        <Button variant="contained" size="small"   onClick={() => {
                                                                                                 setConfirmDialog({
                                                                                                     isOpen: true,
                                                                                                     title: 'Are you sure to delete this record?',
                                                                                                     subTitle: "You can't undo this operation",
                                                                                                     onConfirm: () => { onHotelDelete() }
                                                                                                 })
                                                                                             }}>
          Delete
        </Button>
      </CardActions>

          <Notification
                        notify={notify}
                        setNotify={setNotify}
                    />
                    <ConfirmDialog
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                    />
    </Card>


  );
}
