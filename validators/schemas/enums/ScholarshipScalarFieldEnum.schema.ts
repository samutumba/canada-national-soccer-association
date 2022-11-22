import * as Yup from 'yup';

export const ScholarshipScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","description","institutionId","playerId","createdAt","updatedAt"])