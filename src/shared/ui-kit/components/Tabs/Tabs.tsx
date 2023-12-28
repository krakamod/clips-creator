import MUITabs from '@mui/material/Tabs';
import { styled } from '../../styles';

const Line = styled('div')(({ theme }) => ({
  height: `calc(100% - ${theme.spacing(2)})`,
  width: 1,
  position: 'absolute',
  top: theme.spacing(1),
  backgroundColor: '#E1E1E1',
  transform: 'translateX(0.5px)',
}));

enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

interface TabsProps {
  children?: React.ReactNode;
  className?: string;
  orientation?: `${Orientation}`;
  value: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  orientation,
  value,
  onChange,
  ...rest
}) => (
  <MUITabs
    className={className}
    orientation={orientation}
    value={value}
    onChange={onChange}
    {...rest}
  >
    <Line />
    {children}
  </MUITabs>
);

export default Tabs;
