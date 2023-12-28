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
          // display="flex"
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
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography sx={{ color: '#7a7a7a', fontSize: 22 }}>01, Janeiro - 2024</Typography>
            </Grid>
          </Grid>
          <Grid item display="flex" direction="row" lg xl>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography sx={style.title}>Entradas</Typography>
              <Typography sx={style.value}>R$ 8.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 1 }}>
              <Donut height={50} width={50} data="#b2f35f 30%, rgb(0,0,0,0.1) 30%" value="30%" />
            </Grid>
          </Grid>
          <Grid item display="flex" direction="row" lg xl>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography sx={style.title}>Despesas</Typography>
              <Typography sx={style.valueExit}>R$ 5.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 1 }}>
              <Donut height={50} width={50} data="#fe0f0f 70%, rgb(0,0,0,0.1) 30%" value="70%" />
            </Grid>
          </Grid>
          <Grid item display="flex" direction="row" lg xl>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography sx={style.title}>Economia</Typography>
              <Typography sx={style.valueSavings}>R$ 3.000,00</Typography>
            </Grid>
            <Grid item display="flex" direction="row" sx={{ marginLeft: 2 }}>
              <Donut height={50} width={50} data="#00ffff 30%, rgb(0,0,0,0.1) 30%" value="30%" />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
