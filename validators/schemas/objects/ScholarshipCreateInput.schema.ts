// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateNestedOneWithoutScholarshipInputObjectSchema } from '../internals';;
import { PlayerCreateNestedOneWithoutScholarshipInputObjectSchema } from '../internals';

export const ScholarshipCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  description: Yup.string().required(),  sponsor: InstitutionCreateNestedOneWithoutScholarshipInputObjectSchema,  player: PlayerCreateNestedOneWithoutScholarshipInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
