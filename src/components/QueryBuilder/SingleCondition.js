import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const styles = {
  displayFlex: {
    display: "flex"
  }
};

function SingleCondition({ data, removeBlock, updateBlock }) {
  const [state, setState] = useState([]);

  const options = select2.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option
    };
  });
  return (
    <p>
      <div style={styles.displayFlex}>
        <Autocomplete
          id="fields"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Field" />}
        />
        <Autocomplete
          id="trigger"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Field" />}
        />
        <Autocomplete
          id="operator"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Field" />}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={1}
        />
        <button onClick={() => removeBlock(data.id)}>X</button>
        {/* <button onClick={() => updateBlock(data.id, { op: "=", value: 42 })}>
          Update
        </button> */}
      </div>
      {JSON.stringify(data)}
    </p>
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const select2 = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 }
];
export default SingleCondition;
