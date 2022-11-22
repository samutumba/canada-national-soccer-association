// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutScholarshipInputObjectSchema } from '../internals';

export const ScholarshipCreateWithoutSponsorInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  description: Yup.string().required(),  player: PlayerCreateNestedOneWithoutScholarshipInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
