import Typography from '@shared/ui-kit/components/Typography';
import Stack from '@shared/ui-kit/components/Stack';

interface ITabPanelProps {
  title: string;
  tooltip?: React.ReactNode;
  fieldset: React.ReactNode;
}

const TabPanel: React.FC<ITabPanelProps> = ({
  title,
  tooltip,
  fieldset,
}) => {
  return (
    <Stack spacing={4.5}>
      <Stack spacing={0.5} direction="row">
        <Typography variant="h5">
          {title}
        </Typography>

        {tooltip}
      </Stack>

      {fieldset}
    </Stack>
  );
};

export default TabPanel;
