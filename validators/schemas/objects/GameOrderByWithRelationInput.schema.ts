// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { GameEventOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CompetitionOrderByWithRelationInputObjectSchema } from '../internals';;
import { LocationOrderByWithRelationInputObjectSchema } from '../internals';

export const GameOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  team: TeamOrderByRelationAggregateInputObjectSchema,  events: GameEventOrderByRelationAggregateInputObjectSchema,  competition: CompetitionOrderByWithRelationInputObjectSchema,  updatedAt: SortOrderSchema,  location: LocationOrderByWithRelationInputObjectSchema,  attendance: SortOrderSchema,  locationId: SortOrderSchema,  competitionId: SortOrderSchema
});
