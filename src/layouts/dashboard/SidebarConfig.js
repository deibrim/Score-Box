// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/static/icons/${name}.svg`} sx={{ width: '100%', height: '100%' }} />;

const ICONS = {
  event: getIcon('Buildings'),
  setting: getIcon('GearSix'),
};

const sidebarConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'dashboards',
    items: [
      // MANAGEMENT : USER
      {
        title: 'Event Selection',
        path: '/event-selection',
        icon: ICONS.event,
        children: [{ title: 'events', path: '/event' }],
      },
    ],
  },
  {
    subheader: 'global settings',
    items: [
      // MANAGEMENT : USER
      {
        title: 'Setting',
        path: '/event-selection',
        icon: ICONS.setting,
        children: [{ title: 'events', path: '/event' }],
      },
    ],
  },
];

export default sidebarConfig;
