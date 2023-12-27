import MUITypography from '@mui/material/Typography';

export enum Variant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Body1 = 'body1',
  Body2 = 'body2',
  Subtitle1 = 'subtitle1',
  Subtitle2 = 'subtitle2',
  Caption = 'caption',
}

export enum Color {
  Inherit = 'inherit',
  Primary = 'primary',
  Secondary = 'secondary',
  TextPrimary = 'text.primary',
  TextSecondary = 'text.secondary',
}

enum Align {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Justify = 'justify',
}

interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
  variant?: `${Variant}`;
  color?: `${Color}`;
  align?: `${Align}`;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
  color,
  align,
  ...rest
}) => (
  <MUITypography
    className={className}
    variant={variant}
    color={color}
    align={align}
    {...rest}
  >
    {children}
  </MUITypography>
);

export default Typography;
