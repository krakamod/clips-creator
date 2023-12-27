import MUITab from '@mui/material/Tab';

interface TabProps {
  className?: string;
  label: string;
  disabled?: boolean;
}

const Tab: React.FC<TabProps> = ({
  className,
  label,
  disabled,
  ...rest
}) => (
  <MUITab
    className={className}
    label={label}
    disabled={disabled}
    {...rest}
  />
);

export default Tab;
