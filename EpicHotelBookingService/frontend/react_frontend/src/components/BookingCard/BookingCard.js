import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./BookingCard.css";
import { ApiInstance, SecureAPIInstance } from "../../api/axiosInstance";

export default function BookingCard(props) {
  const {
    image,
    bookingId,
    hotelName,
    checkInDate,
    roomType,
    rooms,
    removeBookings,
  } = props;

  const onCancelClick = (event) => {
    alert("call api here to cancel the booking");
    SecureAPIInstance.post("/remove", {})
      .then((response) => [removeBookings(response.bookingId)])
      .catch((err) => {});
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Motel 6" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bookingId}
        </Typography>

        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          Name : {hotelName}
        </Typography>
        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          checkInDate: {checkInDate}
        </Typography>
        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          No.of Rooms : {rooms}
        </Typography>
        <Typography
          className="typography-spacing"
          variant="body2"
          color="text.secondary"
        >
          roomType : {roomType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={onCancelClick}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
