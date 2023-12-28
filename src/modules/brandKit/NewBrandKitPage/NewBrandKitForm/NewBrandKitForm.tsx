import { memo, useCallback } from 'react';
import { useForm, Controller, type SubmitHandler, FormProvider } from 'react-hook-form';

import Typography from '@shared/ui-kit/components/Typography';
import Stack from '@shared/ui-kit/components/Stack';
import TextField, { emptySelectValue } from '@shared/ui-kit/components/TextField';
import Divider from '@shared/ui-kit/components/Divider';
import Button from '@shared/ui-kit/components/Button';
import { styled } from '@shared/ui-kit/styles';

import Tabs from './Tabs';
import OutroTabPanel from './OutroTabPanel';
import { Fieldset, type IFieldset } from './Fieldset';
import { fillWithDefaultValues } from './values';
import useController, { Status } from '../../controller';

const Body = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  paddingBottom: theme.spacing(1),
}));

const NewBrandKitFrom: React.FC = () => {
  const { status, controller } = useController();

  const methods = useForm<IFieldset>({
    defaultValues: fillWithDefaultValues(),
  });
  const { handleSubmit, formState: { errors }, control } = methods;

  const onSubmit: SubmitHandler<IFieldset> = useCallback((data) => {
    const callToAction: string = (data.callToAction !== emptySelectValue)
      ? data.callToAction
      : data.customCallToAction;

    void controller.createOutro({
      name: data.name,
      callToAction,
    });
  }, [controller]);

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

      <Button
        type="submit"
        loading={status === Status.Pending}
      >
        Save
      </Button>
    </Stack>
  );
};

export default memo(NewBrandKitFrom);
