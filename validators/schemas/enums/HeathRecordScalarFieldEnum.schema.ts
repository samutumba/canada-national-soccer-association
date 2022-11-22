import * as Yup from 'yup';

export const HeathRecordScalarFieldEnumSchema = Yup.mixed().oneOf(["id","cardNumber","issueDate","expiryDate"])