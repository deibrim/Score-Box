import SvgIconStyle from '../components/SvgIconStyle';
// ----------------------------------------------------------------------

export const getIcon = (path, color) => <SvgIconStyle src={path} sx={{ width: '100%', height: '100%', color }} />;
