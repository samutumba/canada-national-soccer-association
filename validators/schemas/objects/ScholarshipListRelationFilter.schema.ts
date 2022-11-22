// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ScholarshipWhereInputObjectSchema } from '../internals';

export const ScholarshipListRelationFilterObjectSchema = Yup.object({
    every: ScholarshipWhereInputObjectSchema,  some: ScholarshipWhereInputObjectSchema,  none: ScholarshipWhereInputObjectSchema
});
