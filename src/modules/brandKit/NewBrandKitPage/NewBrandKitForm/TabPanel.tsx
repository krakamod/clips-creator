import Typography from '@shared/ui-kit/components/Typography';
import Stack from '@shared/ui-kit/components/Stack';
import { styled } from '@shared/ui-kit/styles';

const Panel = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  flexGrow: 1,
}));

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
    <Panel spacing={4}>
      <Stack spacing={0.5} direction="row" alignItems="center">
        <Typography variant="h4">
          {title}
        </Typography>

        {tooltip}
      </Stack>

      {fieldset}
    </Panel>
  );
};

export default TabPanel;
