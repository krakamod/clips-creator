import SvgIcon from '../../components/SvgIcon';
import { type IconComponent } from '../IconComponent';

const InfoIcon: IconComponent = (props) => (
  <SvgIcon {...props} fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="currentColor" fill="none" />
    <path d="M8 4V7.55556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11.1133H8.00889" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default InfoIcon;
