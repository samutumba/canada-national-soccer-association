import * as Yup from 'yup';

export const SeasonScalarFieldEnumSchema = Yup.mixed().oneOf(["id","startDate","endDate"])