import * as Yup from 'yup';

export const InjuryScalarFieldEnumSchema = Yup.mixed().oneOf(["id","playerId","createdAt","updatedAt"])