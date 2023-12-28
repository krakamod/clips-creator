import { forwardRef } from 'react';
import MUIButton from '@mui/lab/LoadingButton';

export enum Type {
  Submit = 'submit',
  Button = 'button',
}

enum Color {
  Inherit = 'inherit',
  Primary = 'primary',
  Secondary = 'secondary',
}

enum Variant {
  Text = 'text',
  Contained = 'contained',
  Outlined = 'outlined',
}

interface ButtonProps {
  children: React.ReactNode;
  type?: `${Type}`;
  color?: `${Color}`;
  variant?: `${Variant}`;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  type,
  color,
  variant = Variant.Contained,
  loading,
  disabled,
  onClick,
  ...rest
}, ref) => (
  <MUIButton
    ref={ref}
    type={type}
    color={color}
    variant={variant}
    loading={loading}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {children}
  </MUIButton>
));

Button.displayName = 'Button';

export default Button;
