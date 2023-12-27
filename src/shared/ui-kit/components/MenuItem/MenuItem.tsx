import { forwardRef } from 'react';
import MUIMenuItem from '@mui/material/MenuItem';

interface MenuItemProps {
  children?: React.ReactNode;
  value?: string;
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({
  children,
  value,
  ...rest
}, ref) => {
  return (
    <MUIMenuItem
      value={value}
      ref={ref}
      {...rest}
    >
      {children}
    </MUIMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
