export enum Fieldset {
  Name = 'name',
  CallToAction = 'callToAction',
  CustomCallToAction = 'customCallToAction',
}

export interface IFieldset {
  [Fieldset.Name]: string;
  [Fieldset.CallToAction]: string;
  [Fieldset.CustomCallToAction]: string;
}
