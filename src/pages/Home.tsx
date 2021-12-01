import { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import {
  List,
  ListRowProps,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import Item from "../components/Item";
import { Cities } from "../utils/constants";
import { DutchCityInterface } from "../interfaces";
import { searchCitiesByName } from "../helper/function";

const useStyles = makeStyles({
  autoSizerWrapper: {
    height: "75vh",
  },
});

const Home = () => {
  const [searchedCities, setSearchedCities] = useState<DutchCityInterface[]>(
    []
  );

  useEffect(() => {
    setSearchedCities(Cities);
  }, []);

  const classes = useStyles();

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  const onSearch = (text: string) => {
    setSearchedCities([...searchCitiesByName(Cities, text)]);
  };

  const renderRow = ({ key, index, style, parent }: ListRowProps) => {
    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <Item key={index} data={searchedCities[index]} />
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search
        </Typography>
        <TextField
          placeholder="Search by city"
          fullWidth
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className={classes.autoSizerWrapper}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={cache.current.rowHeight}
                rowRenderer={renderRow}
                rowCount={searchedCities.length}
                deferredMeasurementCache={cache.current}
              />
            )}
          </AutoSizer>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
