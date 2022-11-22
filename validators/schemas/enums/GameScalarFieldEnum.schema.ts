import * as Yup from 'yup';

export const GameScalarFieldEnumSchema = Yup.mixed().oneOf(["id","updatedAt","attendance","locationId","competitionId"])