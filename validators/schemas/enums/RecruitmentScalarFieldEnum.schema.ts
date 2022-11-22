import * as Yup from 'yup';

export const RecruitmentScalarFieldEnumSchema = Yup.mixed().oneOf(["id","createdAt","updatedAt","passed","resume","playerId","accountId"])