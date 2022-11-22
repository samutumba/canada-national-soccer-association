// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereInputObjectSchema } from '../internals';

export const CompetitionListRelationFilterObjectSchema = Yup.object({
    every: CompetitionWhereInputObjectSchema,  some: CompetitionWhereInputObjectSchema,  none: CompetitionWhereInputObjectSchema
});
