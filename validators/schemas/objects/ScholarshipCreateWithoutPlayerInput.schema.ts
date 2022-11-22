// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateNestedOneWithoutScholarshipInputObjectSchema } from '../internals';

export const ScholarshipCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  description: Yup.string().required(),  sponsor: InstitutionCreateNestedOneWithoutScholarshipInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
