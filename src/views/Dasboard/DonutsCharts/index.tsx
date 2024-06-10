import { Grid } from '@mui/material';
import CardTitle from '../../../components/Design/CardTitle';
import EntryExpenses from '../../../components/ApexCharts/DonutCharts/entryExpenses';

export const DonutsCharts = () => {
  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      lg={12}
      xl={12}
      sx={{ marginTop: 2, gap: 1 }}
    >
      <Grid item display="flex" direction="row" justifyContent="center" alignItems="center" lg xl>
        <CardTitle>
          <EntryExpenses />
        </CardTitle>
      </Grid>
      <Grid item display="flex" direction="row" justifyContent="center" alignItems="center" lg xl>
        <CardTitle>
          <EntryExpenses />
        </CardTitle>
      </Grid>
      <Grid item display="flex" direction="row" justifyContent="center" alignItems="center" lg xl>
        <CardTitle>
          <EntryExpenses />
        </CardTitle>
      </Grid>
    </Grid>
  );
};
