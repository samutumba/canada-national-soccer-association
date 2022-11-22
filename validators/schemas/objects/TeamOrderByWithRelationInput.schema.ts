// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { SquadOrderByWithRelationInputObjectSchema } from '../internals';;
import { GameOrderByWithRelationInputObjectSchema } from '../internals';

export const TeamOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  starters: PlayerOrderByRelationAggregateInputObjectSchema,  formation: SortOrderSchema,  shirtColor: SortOrderSchema,  squad: SquadOrderByWithRelationInputObjectSchema,  squadId: SortOrderSchema,  Game: GameOrderByWithRelationInputObjectSchema,  gameId: SortOrderSchema
});
