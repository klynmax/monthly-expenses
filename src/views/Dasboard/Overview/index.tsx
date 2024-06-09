import { Grid, Typography } from '@mui/material';

import Card from '../../../components/Design/Card';
import Donut from '../../../components/Design/Donut';

import style from './style';

export default function Overview() {
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
    >
      <Card style={{ height: 100 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          xs={12}
          sm={12}
          lg={12}
          xl={12}
          sx={{ gap: 6, padding: 2 }}
        >
          <Grid item display="flex" direction="row" lg xl>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              lg
              xl
            >
              <Typography sx={style.title}>Entradas</Typography>
              <Typography sx={style.value}>R$ 8.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 1 }} xl={4}>
              <Donut height={60} width={60} data="#b2f35f 30%, rgb(0,0,0,0.1) 30%" value="30%" />
            </Grid>
          </Grid>
          <Grid item display="flex" direction="row" lg xl>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              lg
              xl
            >
              <Typography sx={style.title}>Despesas</Typography>
              <Typography sx={style.valueExit}>R$ 5.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 1 }} xl={5}>
              <Donut height={60} width={60} data="#ff5232 70%, rgb(0,0,0,0.1) 30%" value="70%" />
            </Grid>
          </Grid>
          <Grid item display="flex" direction="row" lg xl>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              lg
              xl
            >
              <Typography sx={style.title}>Economia</Typography>
              <Typography sx={style.valueSavings}>R$ 3.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 2 }} xl={4}>
              <Donut height={60} width={60} data="#00ffff 30%, rgb(0,0,0,0.1) 30%" value="30%" />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
