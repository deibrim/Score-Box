import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            id="Path_338"
            data-name="Path 338"
            d="M150.812,25.631c29.768,0,57.545,10.33,81.141,28.27C207.888,26.767,177.26,10.48,143.624,10.48c-54.38,0-101.572,42.87-124.5,105.368C46.623,61.683,95.3,25.631,150.812,25.631Z"
            transform="translate(55.575 25.607)"
            fill="#b78103"
          />
          <path
            id="Path_339"
            data-name="Path 339"
            d="M150.459,168.3C87.953,167.269,35.722,123.848,19.47,65c6.094,66.8,58.6,119.383,123.449,120.519,43.246.792,82.039-21.383,105.713-55.886C222.927,154.287,188.314,169.094,150.459,168.3Z"
            transform="translate(56.592 158.821)"
            fill="#b78103"
          />
          <path
            id="Path_340"
            data-name="Path 340"
            d="M198.417,359.8c-80.164,0-145.17-75-145.17-167.521S118.254,24.792,198.417,24.792c33.714,0,64.733,13.292,89.345,35.536C257.407,23.209,214.356,0,166.618,0,74.617,0,0,86.085,0,192.279S74.617,384.593,166.618,384.593c47.739,0,90.79-23.209,121.105-60.328C263.15,346.509,232.132,359.8,198.417,359.8Z"
            fill="#ffc107"
          />
          <path
            id="Path_341"
            data-name="Path 341"
            d="M168.7,30.882,63.22,140.313l-7.071-14.428,76.453,5.75a3.4,3.4,0,0,1,2.216,1,2.641,2.641,0,0,1,.753,2.094,3.1,3.1,0,0,1-2.969,2.651L56.149,143.1a10.224,10.224,0,0,1-6.868-1.962,7.972,7.972,0,0,1-3.25-5.682,7.664,7.664,0,0,1,2.735-6.611l.313-.276L165.3,28.024a2.57,2.57,0,0,1,3.36,0,1.923,1.923,0,0,1,.039,2.858Z"
            transform="translate(133.674 66.945)"
            fill="#ffc107"
          />
          <line
            id="Line_70"
            data-name="Line 70"
            x1="77.273"
            y1="65.115"
            transform="translate(109.385 135.773)"
            fill="none"
            stroke="#b78103"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="Path_342"
            data-name="Path 342"
            d="M78.78,69.457c0,8.653-7.958,15.667-17.775,15.667S43.23,78.11,43.23,69.457,51.188,53.79,61.005,53.79,78.78,60.8,78.78,69.457Z"
            transform="translate(125.653 131.43)"
            fill="#b78103"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
