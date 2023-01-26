// material
import { styled } from '@mui/material/styles';
import { Button, Card, Typography, IconButton, Stack } from '@mui/material';
// utils

import SvgIconStyle from '../../../components/SvgIconStyle';
// ----------------------------------------------------------------------

const RowStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  // justifyContent: '',
});

// ----------------------------------------------------------------------

export default function EventCard({ data }) {
  const { locked, title, date } = data;
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'right', mb: 3 }}>
        {date}
      </Typography>

      <Stack spacing={2}>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          {title}
        </Typography>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 2 }}>
            Entries Submitted
          </Typography>
          <Typography variant="body2">72</Typography>
        </RowStyle>

        <RowStyle>
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 2 }}>
            Music Submitted
          </Typography>
          <Typography variant="body2">15</Typography>
        </RowStyle>

        <Stack direction="row" spacing={1.5} justifyContent="flex-end">
          <Button variant="contained" color="warning" sx={{ borderRadius: 20 }}>
            Select Event
          </Button>

          {/* <IconButton variant="contained"> */}
          <SvgIconStyle
            src={locked ? `/static/icons/locked.svg` : `/static/icons/unlocked.svg`}
            sx={{ width: 28, height: 28 }}
          />
          {/* </IconButton> */}
        </Stack>
      </Stack>
    </Card>
  );
}
