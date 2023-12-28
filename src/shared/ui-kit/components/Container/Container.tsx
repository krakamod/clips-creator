import { forwardRef } from 'react';
import MUIContainer from '@mui/material/Container';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  className,
  ...rest
}, ref) => (
  <MUIContainer
    className={className}
    ref={ref}
    {...rest}
  >
    {children}
  </MUIContainer>
));

Container.displayName = 'Container';

export default Container;
