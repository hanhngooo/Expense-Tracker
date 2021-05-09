import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./style";
import useTransactions from "../../useTransactions";

const Details = ({ detailClass, title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={classes[`${detailClass}`]}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
