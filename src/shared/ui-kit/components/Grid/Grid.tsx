import MUIGrid from '@mui/material/Unstable_Grid2';
import { type Spacing } from '../../ILayout';

enum AlignItems {
  Center = 'center',
  End = 'flex-end',
  FlexStart = 'flex-start',
  BaseLine = 'baseline',
}

enum JustifyContent {
  SpaceBetween = 'space-between',
  FlexEnd = 'flex-end',
}

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps<C extends React.ElementType = 'div'> {
  children?: React.ReactNode;
  container?: boolean;
  spacing?: Spacing;
  alignItems?: `${AlignItems}`;
  justifyContent?: `${JustifyContent}`;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  mb?: Spacing;
  component?: C;
}

type GridComponent = <C extends React.ElementType = 'div'>(
  props: GridProps<C> & Omit<React.ComponentProps<C>, keyof GridProps<C>>,
) => JSX.Element | null;

const Grid: GridComponent = ({
  children,
  container,
  spacing,
  alignItems,
  justifyContent,
  xs,
  sm,
  md,
  mb,
  lg,
  xl,
  component,
  ...rest
}) => (
  <MUIGrid
    container={container}
    spacing={spacing}
    alignItems={alignItems}
    justifyContent={justifyContent}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    mb={mb}
    component={component}
    {...rest}
  >
    {children}
  </MUIGrid>
);

export default Grid;
