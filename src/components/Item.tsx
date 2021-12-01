import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DutchCityInterface } from "../interfaces";
import { makeStyles } from "@mui/styles";

interface ItemInterface {
  data: DutchCityInterface;
}

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
    border: "1px solid #e7e7e7",
  },
});

const Item = ({ data: { city, admin_name, population } }: ItemInterface) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          {city}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{admin_name}</Typography>
        <Typography variant="body2">{population}</Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
