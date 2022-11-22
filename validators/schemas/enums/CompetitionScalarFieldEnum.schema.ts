import * as Yup from 'yup';

export const CompetitionScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","sponsor","type","seasonId"])