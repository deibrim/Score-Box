import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Stack, AppBar, Toolbar, IconButton, ListItemIcon, OutlinedInput } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Iconify from '../../components/Iconify';
import SvgIconStyle from '../../components/SvgIconStyle';
//
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280 + 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 80;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  borderBottom: '1px solid',
  borderColor: alpha(theme.palette.background.paper, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
    left: 280,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const [query, setQuery] = useState('');
  const { themeMode, onChangeMode } = useSettings();
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/star.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/layout.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <OutlinedInput
            fullWidth
            size="small"
            placeholder="Search"
            SelectProps={{ native: true }}
            value={query}
            variant="filled"
            onChange={(e) => setQuery(e.target.value)}
            startAdornment={
              <IconButton variant="contained" color="primary">
                <Icon icon="fe:search" height={18} />
              </IconButton>
            }
          />
        </form>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/brightness.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/history.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/notification.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton variant="contained">
          <SvgIconStyle src={`/static/icons/star.svg`} sx={{ width: 28, height: 28 }} />
        </IconButton>

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <NotificationsPopover /> */}
          {/* <Button
            size="small"
            onClick={() => onChangeMode(themeMode === 'dark' ? 'light' : 'dark')}
            sx={{
              py: 1,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              color: 'text.disabled',
              justifyContent: 'center',
              ...(themeMode === 'dark' && {
                color: 'primary.main',
              }),
            }}
          >
            <Icon icon={themeMode === 'light' ? 'eva:sun-fill' : 'eva:moon-fill'} width={28} height={28} />
          </Button> */}
          {/* <AccountPopover /> */}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
