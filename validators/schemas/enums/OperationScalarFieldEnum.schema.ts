import * as Yup from 'yup';

export const OperationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","type","date","injuryId","createdAt","updatedAt"])