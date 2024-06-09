import { Grid, Typography } from '@mui/material';
import Card from '../../../components/Design/Card';
import AreaChart from '../../../components/ApexCharts/AreaBar';
import MainExpenses from '../../../components/ApexCharts/BarCharts/mainExpenses';

export default function MainExpensesView() {
  return (
    <Grid
      container
      // display="flex"
      direction="row"
      // alignItems="center"
      justifyContent="center"
      xs={12}
      sm={12}
      lg={12}
      xl={12}
      sx={{ marginTop: 2 }}
    >
      <Card style={{ height: 400, padding: 1 }}>
        <MainExpenses />
      </Card>
    </Grid>
  );
}
