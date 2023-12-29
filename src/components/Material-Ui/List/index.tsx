import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Grid, Typography } from '@mui/material';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 /*bgcolor: 'background.paper'*/ }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ background: '#21222d', textAlign: 'left', color: '#7a7a7a' }}
        >
          Últimas atividades
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <div
            style={{
              background: 'rgba(220, 220, 220, 0.1)',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <LocalAtmOutlinedIcon sx={{ color: '#7a7a7a' }} />
          </div>
        </ListItemIcon>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginLeft: 1, width: 140 }}
        >
          <ListItemText primary="13° salário" />
          <Typography sx={{ fontSize: 12, textAlign: 'left', color: '#7a7a7a' }}>Ganho</Typography>
        </Grid>
        <Typography sx={{ fontSize: 12, color: '#b2f35f' }}>+R$ 2.154,00</Typography>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <div
            style={{
              background: 'rgba(220, 220, 220, 0.1)',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ color: '#7a7a7a' }} />
          </div>
        </ListItemIcon>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginLeft: 1, width: 140 }}
        >
          <ListItemText primary="Supermercado" />
          <Typography sx={{ fontSize: 12, textAlign: 'left', color: '#7a7a7a' }}>
            Despesa
          </Typography>
        </Grid>
        <Typography sx={{ fontSize: 12, color: '#ff5232' }}>-R$154,00</Typography>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <div
            style={{
              background: 'rgba(220, 220, 220, 0.1)',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <TextSnippetOutlinedIcon sx={{ color: '#7a7a7a' }} />
          </div>
        </ListItemIcon>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginLeft: 1, width: 140 }}
        >
          <ListItemText primary="Fatura água" />
          <Typography sx={{ fontSize: 12, textAlign: 'left', color: '#7a7a7a' }}>
            Despesa
          </Typography>
        </Grid>
        <Typography sx={{ fontSize: 12, color: '#ff5232' }}>-R$73,00</Typography>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <div
            style={{
              background: 'rgba(220, 220, 220, 0.1)',
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              borderRadius: 10,
            }}
          >
            <LocalAtmOutlinedIcon sx={{ color: '#7a7a7a' }} />
          </div>
        </ListItemIcon>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ marginLeft: 1, width: 140 }}
        >
          <ListItemText primary="Aluguel apt" />
          <Typography sx={{ fontSize: 12, textAlign: 'left', color: '#7a7a7a' }}>Ganho</Typography>
        </Grid>
        <Typography sx={{ fontSize: 12, color: '#b2f35f' }}>+R$ 1.350,00</Typography>
      </ListItemButton>
    </List>
  );
}
