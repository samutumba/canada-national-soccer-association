// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventWhereInputObjectSchema } from '../internals';

export const GameEventListRelationFilterObjectSchema = Yup.object({
    every: GameEventWhereInputObjectSchema,  some: GameEventWhereInputObjectSchema,  none: GameEventWhereInputObjectSchema
});
