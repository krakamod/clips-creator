import MUIDivider from '@mui/material/Divider';

enum Orientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

interface DividerProps {
  orientation?: `${Orientation}`;
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({
  orientation,
  children,
}) => {
  return (
    <MUIDivider
      orientation={orientation}
    >
      {children}
    </MUIDivider>
  );
};

export default Divider;
