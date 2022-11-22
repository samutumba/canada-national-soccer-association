// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereInputObjectSchema } from '../internals';

export const CompetitionRelationFilterObjectSchema = Yup.object({
    is: CompetitionWhereInputObjectSchema,  isNot: CompetitionWhereInputObjectSchema
});
