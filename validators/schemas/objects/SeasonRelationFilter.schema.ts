// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonWhereInputObjectSchema } from '../internals';

export const SeasonRelationFilterObjectSchema = Yup.object({
    is: SeasonWhereInputObjectSchema,  isNot: SeasonWhereInputObjectSchema
});
