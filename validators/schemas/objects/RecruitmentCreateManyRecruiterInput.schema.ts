// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const RecruitmentCreateManyRecruiterInputObjectSchema = Yup.object({
    id: Yup.string(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  passed: Yup.boolean(),  resume: Yup.mixed().oneOfSchemas([Yup.string()]),  playerId: Yup.string().required()
});
