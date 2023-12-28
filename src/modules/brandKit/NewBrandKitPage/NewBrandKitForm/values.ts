import { emptySelectValue } from '@shared/ui-kit/components/TextField';
import { Fieldset, type IFieldset } from './Fieldset';

const defaultValues: IFieldset = {
  [Fieldset.Name]: '',
  [Fieldset.CallToAction]: emptySelectValue,
  [Fieldset.CustomCallToAction]: '',
};

export const fillWithDefaultValues = (): IFieldset => defaultValues;
