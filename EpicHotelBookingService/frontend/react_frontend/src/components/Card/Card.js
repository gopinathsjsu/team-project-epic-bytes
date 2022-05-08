import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./Card.css";

export default function HotelCard(props) {
  const [hotelName, setHotelName] = useState(props.name);
  const [location, setLocation] = useState(props.loc);
  const [roomsCount, setRoomsCount] = useState(props.rooms);
  const [roomtype, setRoomtype] = useState(props.type);

  const onHotelUpdate = () => {
    //call api here
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
            label="No.of Rooms"
            value={roomsCount}
            onChange={(e) => {
              setRoomsCount(e.target.value);
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
            label="Type of Rooms"
            value={roomtype}
            onChange={(e) => {
              setRoomtype(e.target.value);
            }}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onHotelUpdate}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
