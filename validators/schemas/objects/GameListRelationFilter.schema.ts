// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereInputObjectSchema } from '../internals';

export const GameListRelationFilterObjectSchema = Yup.object({
    every: GameWhereInputObjectSchema,  some: GameWhereInputObjectSchema,  none: GameWhereInputObjectSchema
});
