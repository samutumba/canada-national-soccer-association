// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByWithRelationInputObjectSchema } from '../internals';;
import { GameOrderByWithRelationInputObjectSchema } from '../internals';

export const GameEventOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  player: PlayerOrderByWithRelationInputObjectSchema,  minute: SortOrderSchema,  game: GameOrderByWithRelationInputObjectSchema,  gameId: SortOrderSchema,  playerId: SortOrderSchema,  type: SortOrderSchema
});
