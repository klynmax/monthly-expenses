import { Grid } from '@mui/material';
import Overview from '../../views/Dasboard/Overview';

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
      // sx={{ background: 'red' }}
    >
      {/* <Overview /> */}
      <Grid item direction="row" justifyContent="flex-start" alignItems="center" lg={8} xl={8}>
        <Overview />
      </Grid>
      {/* <Grid item direction="row" justifyContent="flex-start" alignItems="center" lg={4} xl={4}>
        <h1>Lado Direito</h1>
      </Grid> */}
    </Grid>
  );
};
