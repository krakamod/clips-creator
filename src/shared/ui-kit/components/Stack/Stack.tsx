import { forwardRef } from 'react';
import MUIStack from '@mui/material/Stack';
import { type Spacing } from '../../ILayout';

enum Direction {
  Column = 'column',
  Row = 'row',
}

enum AlignItems {
  Center = 'center',
  End = 'flex-end',
  FlexStart = 'flex-start',
  BaseLine = 'baseline',
}

export enum JustifyContent {
  SpaceBetween = 'space-between',
  FlexEnd = 'flex-end',
  Center = 'center',
}

interface StackProps<C extends React.ElementType> {
  children?: React.ReactNode;
  className?: string;
  direction?: `${Direction}`;
  spacing?: Spacing;
  alignItems?: `${AlignItems}`;
  justifyContent?: `${JustifyContent}`;
  component?: C;
}

type StackComponent = <C extends React.ElementType = 'div'>(
  props: StackProps<C> & Omit<React.ComponentProps<C>, keyof StackProps<C>>,
  ref?: React.ForwardedRef<HTMLDivElement>
) => JSX.Element | null;

const Stack: StackComponent = ({
  children,
  className,
  spacing,
  direction,
  alignItems,
  justifyContent,
  ...rest
}, ref) => (
  <MUIStack
    className={className}
    spacing={spacing}
    direction={direction}
    alignItems={alignItems}
    justifyContent={justifyContent}
    ref={ref}
    {...rest}
  >
    {children}
  </MUIStack>
);

export default forwardRef(Stack) as StackComponent;
