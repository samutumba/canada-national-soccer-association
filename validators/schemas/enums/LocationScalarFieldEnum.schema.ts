import * as Yup from 'yup';

export const LocationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","category","streetAddress","city","province","country","postalCode"])