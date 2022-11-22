// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionWhereInputObjectSchema } from '../internals';

export const InstitutionRelationFilterObjectSchema = Yup.object({
    is: InstitutionWhereInputObjectSchema,  isNot: InstitutionWhereInputObjectSchema
});
