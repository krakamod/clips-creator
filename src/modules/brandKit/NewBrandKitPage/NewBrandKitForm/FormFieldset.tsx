import Grid from '@shared/ui-kit/components/Grid';

interface IFormFieldsetProps {
  children: React.ReactNode;
}

const FormFieldset: React.FC<IFormFieldsetProps> = ({
  children,
}) => (
  <div>
    <Grid container spacing={6}>
      {children}
    </Grid>
  </div>
);

export default FormFieldset;
