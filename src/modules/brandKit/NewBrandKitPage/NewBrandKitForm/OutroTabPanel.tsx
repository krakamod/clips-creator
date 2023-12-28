import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TextField, { emptySelectValue } from '@shared/ui-kit/components/TextField';
import MenuItem from '@shared/ui-kit/components/MenuItem';
import Tooltip from '@shared/ui-kit/components/Tooltip';
import IconButton from '@shared/ui-kit/components/IconButton';
import InfoIcon from '@shared/ui-kit/icons/InfoIcon';

import TabPanel from './TabPanel';
import FormFieldset from './FormFieldset';
import FormField from './FormField';
import { Fieldset, type IFieldset } from './Fieldset';

const predefinedCallToActions = [{
  id: '1',
  name: 'Listen on Spotify',
}, {
  id: '2',
  name: 'Listen on Apple',
}, {
  id: '3',
  name: 'Listen on Google',
}];

const OutroTabPanel: React.FC = () => {
  const { formState: { errors }, watch, setValue } = useFormContext<IFieldset>();

  const callToAction = watch(Fieldset.CallToAction);
  const customCallToAction = watch(Fieldset.CustomCallToAction);

  useEffect(() => {
    if ((callToAction !== emptySelectValue) && (customCallToAction !== '')) {
      setValue(Fieldset.CustomCallToAction, '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callToAction, setValue]);

  useEffect(() => {
    if ((customCallToAction !== '') && (callToAction !== '')) {
      setValue(Fieldset.CallToAction, emptySelectValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customCallToAction, setValue]);

  return (
    <TabPanel
      title="Outro"
      tooltip={(
        <Tooltip title="We will show the call to action at the end of the clip">
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      )}
      fieldset={(
        <FormFieldset>
          <FormField
            label="Call to action"
            controller={(
              <Controller
                name={Fieldset.CallToAction}
                render={({ field }) => (
                  <TextField
                    select
                    placeholder="Select"
                    error={Boolean(errors[Fieldset.CallToAction])}
                    helperText={errors[Fieldset.CallToAction]?.message}
                    {...field}
                  >
                    {predefinedCallToActions.map((callToAction) => (
                      <MenuItem key={callToAction.id} value={callToAction.name}>
                        {callToAction.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
                rules={{
                  validate: value =>
                    (value !== emptySelectValue) || (customCallToAction !== '')
                      ? true
                      : 'At least one field is required',
                }}
              />
            )}
          />

          <FormField
            label="Custom call to action"
            controller={(
              <Controller
                name={Fieldset.CustomCallToAction}
                render={({ field }) => (
                  <TextField
                    placeholder="The Most Amazing Podcast Ever!"
                    multiline
                    rows={3}
                    error={Boolean(errors[Fieldset.CustomCallToAction])}
                    helperText={errors[Fieldset.CustomCallToAction]?.message}
                    {...field}
                  />
                )}
                rules={{
                  validate: value =>
                    (value !== '') || (callToAction !== emptySelectValue)
                      ? true
                      : 'At least one field is required',
                }}
              />
            )}
          />
        </FormFieldset>
      )}
    />
  );
};

export default OutroTabPanel;
