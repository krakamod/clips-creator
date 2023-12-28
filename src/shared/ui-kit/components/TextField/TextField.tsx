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

enum Width {
  Medium = 'medium',
  Large = 'large',
  Full = 'full',
}

const widthStylesMap = {
  [Width.Medium]: {},
  [Width.Large]: {
    minWidth: 256,
  },
  [Width.Full]: {},
};

const StyledTextField = styled(MUITextField, {
  shouldForwardProp: (prop) => prop !== 'width',
})<{ width: `${Width}` }>(({ width }) => widthStylesMap[width]);

interface TextFieldProps {
  children?: React.ReactNode;
  className?: string;
  type?: `${Type}`;
  name?: string;
  variant?: `${Variant}`;
  width?: `${Width}`;
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
  width = Width.Medium,
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
    <StyledTextField
      className={className}
      variant={variant}
      width={width}
      fullWidth={width === Width.Full}
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
    </StyledTextField>
  );
});

TextField.displayName = 'TextField';

export default TextField;
