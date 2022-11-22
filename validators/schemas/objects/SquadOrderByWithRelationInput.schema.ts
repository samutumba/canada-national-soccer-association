// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { InstitutionOrderByWithRelationInputObjectSchema } from '../internals';;
import { StaffOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CompetitionOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { LocationOrderByWithRelationInputObjectSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';

export const SquadOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  players: PlayerOrderByRelationAggregateInputObjectSchema,  institution: InstitutionOrderByWithRelationInputObjectSchema,  staff: StaffOrderByRelationAggregateInputObjectSchema,  competition: CompetitionOrderByRelationAggregateInputObjectSchema,  institutionId: SortOrderSchema,  home: LocationOrderByWithRelationInputObjectSchema,  homeColor: SortOrderSchema,  awayColor: SortOrderSchema,  Team: TeamOrderByRelationAggregateInputObjectSchema,  locationId: SortOrderSchema
});
