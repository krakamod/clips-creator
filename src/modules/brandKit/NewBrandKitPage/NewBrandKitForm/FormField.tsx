import Typography from '@shared/ui-kit/components/Typography';
import Grid from '@shared/ui-kit/components/Grid';
import { styled } from '@shared/ui-kit/styles';

const Controller = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

interface IFormFieldProps {
  label: string;
  controller: React.ReactNode;
}

const FormField: React.FC<IFormFieldProps> = ({
  label,
  controller,
}) => (
  <>
    <Grid xs={6}>
      <Typography>
        {label}
      </Typography>
    </Grid>
    <Controller xs={6}>
      {controller}
    </Controller>
  </>
);

export default FormField;
