// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereInputObjectSchema } from '../internals';

export const SquadListRelationFilterObjectSchema = Yup.object({
    every: SquadWhereInputObjectSchema,  some: SquadWhereInputObjectSchema,  none: SquadWhereInputObjectSchema
});
