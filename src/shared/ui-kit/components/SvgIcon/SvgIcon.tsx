import { forwardRef } from 'react';
import MUISvgIcon from '@mui/material/SvgIcon';

enum Size {
  Inherit = 'inherit',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

enum Color {
  Inherit = 'inherit',
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface SvgIconProps {
  children?: React.ReactNode;
  className?: string;
  viewBox?: string;
  size?: `${Size}`;
  color?: `${Color}`;
  fill?: string;
}

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(({
  children,
  className,
  viewBox = '0 0 16 16',
  size = Size.Medium,
  color = Color.Inherit,
  fill,
}, ref) => (
  <MUISvgIcon
    ref={ref}
    className={className}
    fontSize={size}
    color={color}
    viewBox={viewBox}
    fill={fill}
  >
    {children}
  </MUISvgIcon>
));

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
