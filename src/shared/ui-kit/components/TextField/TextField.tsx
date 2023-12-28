import { forwardRef } from 'react';
import MUITextField from '@mui/material/TextField';
import MenuItem from '../MenuItem';
import { styled } from '../../styles';

export const emptySelectValue = 'none';

const PlaceholderMenuItem = styled(MenuItem)(() => ({
  display: 'none',
}));

enum Type {
  Text = 'text',
}

enum Variant {
  Outlined = 'outlined',
}

interface TextFieldProps {
  children?: React.ReactNode;
  className?: string;
  type?: `${Type}`;
  name?: string;
  variant?: `${Variant}`;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  rows?: number;
  multiline?: boolean;
  select?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  children,
  className,
  type = Type.Text,
  name,
  variant = Variant.Outlined,
  label,
  placeholder,
  defaultValue,
  value,
  error,
  helperText,
  disabled,
  multiline,
  select,
  rows,
  onBlur,
  onFocus,
  onChange,
}, ref) => {
  const isSelectWithPlaceholder = (select ?? false) && (placeholder != null);

  return (
    <MUITextField
      className={className}
      variant={variant}
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      defaultValue={isSelectWithPlaceholder && (defaultValue == null)
        ? emptySelectValue
        : defaultValue}
      value={value}
      error={error}
      helperText={helperText}
      disabled={disabled}
      multiline={multiline}
      select={select}
      rows={rows}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      ref={ref}
    >
      {isSelectWithPlaceholder && (
        <PlaceholderMenuItem value={emptySelectValue}>
          {placeholder}
        </PlaceholderMenuItem>
      )}
      {children}
    </MUITextField>
  );
});

TextField.displayName = 'TextField';

export default TextField;
