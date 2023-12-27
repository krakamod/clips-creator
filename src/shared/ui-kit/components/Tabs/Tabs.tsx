import MUITabs from '@mui/material/Tabs';

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
    {children}
  </MUITabs>
);

export default Tabs;
