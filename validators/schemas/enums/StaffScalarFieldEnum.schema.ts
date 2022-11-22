import * as Yup from 'yup';

export const StaffScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","dob","phone","role","streetAddress","city","country","postalCode","accountId"])