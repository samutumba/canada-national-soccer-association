import * as Yup from 'yup';

export const InterviewScalarFieldEnumSchema = Yup.mixed().oneOf(["id","stage","passed","at","comment","recruitmentId","createdAt","updatedAt"])