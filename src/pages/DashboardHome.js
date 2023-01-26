// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { EventCard } from '../sections/@dashboard/home';
import Page from '../components/Page';

// ----------------------------------------------------------------------
const EventData = [
  {
    title: 'Versastyle: Toronto Toronto, Ontario Meridian Arts Centre 5040 Yonge St., North York, ON M2N 6R8',
    date: 'Mar 23 to Mar 26',
    locked: false,
    items: [
      {
        title: 'Entries Submitted',
        value: 72,
      },
      {
        title: 'Music Submitted',
        value: 15,
      },
    ],
  },
  {
    title: 'Versastyle: Toronto Toronto, Ontario Meridian Arts Centre 5040 Yonge St., North York, ON M2N 6R8',
    date: 'Mar 23 to Mar 26',
    locked: true,
    items: [
      {
        title: 'Entries Submitted',
        value: 72,
      },
      {
        title: 'Music Submitted',
        value: 15,
      },
    ],
  },
  {
    title: 'Versastyle: Toronto Toronto, Ontario Meridian Arts Centre 5040 Yonge St., North York, ON M2N 6R8',
    date: 'Mar 23 to Mar 26',
    locked: true,
    items: [
      {
        title: 'Entries Submitted',
        value: 72,
      },
      {
        title: 'Music Submitted',
        value: 15,
      },
    ],
  },
  {
    title: 'Versastyle: Toronto Toronto, Ontario Meridian Arts Centre 5040 Yonge St., North York, ON M2N 6R8',
    date: 'Mar 23 to Mar 26',
    locked: true,
    items: [
      {
        title: 'Entries Submitted',
        value: 72,
      },
      {
        title: 'Music Submitted',
        value: 15,
      },
    ],
  },
];
export default function DashboardHome() {
  // const theme = useTheme();

  return (
    <Page title="Event Selection">
      <Container maxWidth="xl">
        <Typography variant="subtitle2" sx={{ mb: 5 }}>
          All Events
        </Typography>
        <Grid container spacing={3}>
          {EventData.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <EventCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
