import { Grid } from '@mui/material';
import Overview from '../../views/Dasboard/Overview';
import ExpenseIncome from '../../views/Dasboard/Overview-expense-income';
import Profile from '../../views/Dasboard/Profile';

export const Dashboard: React.FC = () => {
  return (
    <Grid
      container
      // display="flex"
      // direction="row"
      // alignItems="center"
      // justifyContent="center"
      xs={12}
      sm={12}
      lg={12}
      xl={12}
      sx={{ gap: 2 }}
    >
      <Grid item direction="row" justifyContent="flex-start" alignItems="center" lg={4} xl={3}>
        <Profile />
      </Grid>
      <Grid item direction="row" justifyContent="flex-start" alignItems="center" lg={8} xl={8}>
        <Overview />
        <ExpenseIncome />
      </Grid>
      {/* <Grid item direction="row" justifyContent="flex-start" alignItems="center" lg={4} xl={3}>
        <Profile />
      </Grid> */}
    </Grid>
  );
};
