import Typography from '@shared/ui-kit/components/Typography';
import Grid from '@shared/ui-kit/components/Grid';

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
    <Grid xs={6}>
      {controller}
    </Grid>
  </>
);

export default FormField;
