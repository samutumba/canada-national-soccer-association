import * as Yup from 'yup';

export const InstitutionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","address","city","province","postal_code","category"])