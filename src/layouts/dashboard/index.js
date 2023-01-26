import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Outlet } from 'react-router-dom';
// material
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import DashboardSidebarRight from './DashboardSidebarRight';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
const FooterStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
        <Box sx={{ flexGrow: 1 }} />
        <FooterStyle>
          <Typography variant="caption" component="p">
            © 2023 ScoreBox
          </Typography>
        </FooterStyle>
      </MainStyle>
      <DashboardSidebarRight isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
    </RootStyle>
  );
}
