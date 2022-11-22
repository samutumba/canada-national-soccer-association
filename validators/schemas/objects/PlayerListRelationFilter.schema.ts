// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerWhereInputObjectSchema } from '../internals';

export const PlayerListRelationFilterObjectSchema = Yup.object({
    every: PlayerWhereInputObjectSchema,  some: PlayerWhereInputObjectSchema,  none: PlayerWhereInputObjectSchema
});
