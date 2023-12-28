import Grid from '@shared/ui-kit/components/Grid';

interface IFormFieldsetProps {
  children: React.ReactNode;
}

const FormFieldset: React.FC<IFormFieldsetProps> = ({
  children,
}) => (
  <Grid container spacing={6}>
    {children}
  </Grid>
);

export default FormFieldset;
