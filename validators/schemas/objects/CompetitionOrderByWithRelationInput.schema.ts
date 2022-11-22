// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SeasonOrderByWithRelationInputObjectSchema } from '../internals';;
import { SquadOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { GameOrderByRelationAggregateInputObjectSchema } from '../internals';

export const CompetitionOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  sponsor: SortOrderSchema,  type: SortOrderSchema,  season: SeasonOrderByWithRelationInputObjectSchema,  seasonId: SortOrderSchema,  Squad: SquadOrderByRelationAggregateInputObjectSchema,  Game: GameOrderByRelationAggregateInputObjectSchema
});
