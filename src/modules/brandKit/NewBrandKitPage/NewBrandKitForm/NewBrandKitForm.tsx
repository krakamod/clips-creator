import { memo, useCallback } from 'react';
import { useForm, Controller, type SubmitHandler, FormProvider } from 'react-hook-form';

import Typography from '@shared/ui-kit/components/Typography';
import Stack from '@shared/ui-kit/components/Stack';
import TextField from '@shared/ui-kit/components/TextField';
import Divider from '@shared/ui-kit/components/Divider';
import Button from '@shared/ui-kit/components/Button';
import { styled } from '@shared/ui-kit/styles';

import Tabs from './Tabs';
import OutroTabPanel from './OutroTabPanel';
import { Fieldset, type IFieldset } from './Fieldset';
import { fillWithDefaultValues } from './values';

const Body = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  paddingBottom: theme.spacing(1),
}));

const NewBrandKitFrom: React.FC = () => {
  const methods = useForm<IFieldset>({
    defaultValues: fillWithDefaultValues(),
  });
  const { handleSubmit, formState: { errors }, control } = methods;

  const onSubmit: SubmitHandler<IFieldset> = useCallback((data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4.5} direction="row" alignItems="center">
        <Typography variant="h4">
          Brand kit name
        </Typography>

        <Controller
          name={Fieldset.Name}
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="Name"
              error={Boolean(errors[Fieldset.Name])}
              helperText={errors[Fieldset.Name]?.message}
              {...field}
            />
          )}
          rules={{ required: 'Name is required' }}
        />
      </Stack>

      <Body spacing={2} direction="row">
        <Tabs />

        <FormProvider {...methods}>
          <OutroTabPanel />
        </FormProvider>
      </Body>

      <Divider />

      <Button type="submit">Save</Button>
    </Stack>
  );
};

export default memo(NewBrandKitFrom);
