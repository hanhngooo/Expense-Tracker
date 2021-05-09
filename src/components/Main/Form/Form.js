import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyle from "./styles";
const Form = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            ...
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="Icome">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="date" label="Date" fullWidth />
        </Grid>
        <Button
          className={classes.button}
          variant="outline"
          corlor="primary"
          fullWidth
        >
          {" "}
          Create
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
