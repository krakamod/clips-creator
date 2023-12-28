import { forwardRef } from 'react';
import MUIIconButton from '@mui/material/IconButton';

enum Type {
  Button = 'button',
}

interface IconButtonProps {
  children?: React.ReactNode;
  type?: `${Type}`;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  children,
  type,
  onClick,
  ...rest
}, ref) => (
  <MUIIconButton
    type={type}
    onClick={onClick}
    ref={ref}
    {...rest}
  >
    {children}
  </MUIIconButton>
));

IconButton.displayName = 'IconButton';

export default IconButton;
