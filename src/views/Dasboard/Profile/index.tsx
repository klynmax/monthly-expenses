import { Grid, Typography, Avatar, Chip, Divider } from '@mui/material';

import Card from '../../../components/Design/Card';
import NestedList from '../../../components/Material-Ui/List';

export default function Profile() {
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
      <Card style={{ height: '100vh', padding: 20 }}>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          lg={12}
          xl={12}
        >
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" xl={3}>
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/52705719?v=4"
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" xl>
            <Typography sx={{ fontSize: 20, color: '#fff' }}>Klynsman Guedes</Typography>
            <Typography sx={{ fontSize: 12, color: '#7a7a7a' }}>01 de Janeiro de 2024</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          lg={12}
          xl={12}
          sx={{ marginTop: 4 }}
        >
          <Typography sx={{ fontSize: 18 }}>Resumo das finanças</Typography>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={8}
            sx={{ marginTop: 3 }}
          >
            <Typography sx={{ fontSize: 14, color: '#7a7a7a' }}>Total de ganhos</Typography>
            <Typography sx={{ fontSize: 28, color: '#b2f35f' }}>R$ 10.150,98</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={4}
            sx={{ marginTop: 5 }}
          >
            <Chip
              // icon={<AttachMoneyOutlinedIcon sx={{ color: '#b2f35f' }} />}
              label="+ R$ 630,00"
              variant="outlined"
              sx={{ borderColor: '#b2f35f', color: '#b2f35f' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          lg={12}
          xl={12}
          sx={{ marginTop: 1 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={8}
            sx={{ marginTop: 3 }}
          >
            <Typography sx={{ fontSize: 14, color: '#7a7a7a' }}>Total despesas</Typography>
            <Typography sx={{ fontSize: 28, color: '#ff5232' }}>R$ 8.674,23</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={4}
            sx={{ marginTop: 5 }}
          >
            <Chip
              // icon={<AttachMoneyOutlinedIcon sx={{ color: '#b2f35f' }} />}
              label="+ R$ 830,00"
              variant="outlined"
              sx={{ borderColor: '#ff5232', color: '#ff5232' }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          lg={12}
          xl={12}
          sx={{ marginTop: 1 }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={8}
            sx={{ marginTop: 3 }}
          >
            <Typography sx={{ fontSize: 14, color: '#7a7a7a' }}>Total poupado</Typography>
            <Typography sx={{ fontSize: 28, color: '#00ffff' }}>R$ 1.476,75</Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            xl={4}
            sx={{ marginTop: 5 }}
          >
            <Chip
              // icon={<AttachMoneyOutlinedIcon sx={{ color: '#b2f35f' }} />}
              label="+ R$ 476,75"
              variant="outlined"
              sx={{ borderColor: '#b2f35f', color: '#b2f35f' }}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: 30 }}>
          <Divider sx={{ width: '100%', background: '#7a7a7a' }} />
        </div>
        <Grid
          container
          display="flex"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          lg={12}
          xl={12}
          sx={{ marginTop: 1 }}
        >
          <Typography sx={{ fontSize: 18, marginTop: 2 }}>Transações Recentes</Typography>
          <div style={{ marginTop: 10 }}>
            <NestedList />
          </div>
        </Grid>
      </Card>
    </Grid>
  );
}
