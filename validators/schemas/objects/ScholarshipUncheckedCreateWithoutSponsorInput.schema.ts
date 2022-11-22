// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ScholarshipUncheckedCreateWithoutSponsorInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  description: Yup.string().required(),  playerId: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
