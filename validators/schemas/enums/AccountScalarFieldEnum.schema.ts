import * as Yup from 'yup';

export const AccountScalarFieldEnumSchema = Yup.mixed().oneOf(["id","username","password","updatedAt","createdAt"])