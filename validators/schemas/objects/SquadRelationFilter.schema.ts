// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereInputObjectSchema } from '../internals';

export const SquadRelationFilterObjectSchema = Yup.object({
    is: SquadWhereInputObjectSchema,  isNot: SquadWhereInputObjectSchema
});
