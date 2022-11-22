import * as Yup from 'yup';

export const PlayerScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","dob","isDomestic","photo","gender","position","heathRecordId","phone","streetAddress","city","province","country","postalCode"])