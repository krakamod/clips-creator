import { forwardRef } from 'react';
import MUITooltip from '@mui/material/Tooltip';

interface TooltipProps {
  children: React.ReactElement;
  title: string;
}

const Tooltip = forwardRef<HTMLElement, TooltipProps>((props, ref) => (
  <MUITooltip
    ref={ref}
    {...props}
  />
));

Tooltip.displayName = 'Tooltip';

export default Tooltip;
