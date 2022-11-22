// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { HeathRecordOrderByWithRelationInputObjectSchema } from '../internals';;
import { ScholarshipOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { RecruitmentOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { GameEventOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { InjuryOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { SquadOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { TeamOrderByRelationAggregateInputObjectSchema } from '../internals';

export const PlayerOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  dob: SortOrderSchema,  isDomestic: SortOrderSchema,  photo: SortOrderSchema,  gender: SortOrderSchema,  position: SortOrderSchema,  healthRecord: HeathRecordOrderByWithRelationInputObjectSchema,  heathRecordId: SortOrderSchema,  phone: SortOrderSchema,  streetAddress: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  country: SortOrderSchema,  postalCode: SortOrderSchema,  scholarship: ScholarshipOrderByRelationAggregateInputObjectSchema,  recruitment: RecruitmentOrderByRelationAggregateInputObjectSchema,  GameEvent: GameEventOrderByRelationAggregateInputObjectSchema,  Injury: InjuryOrderByRelationAggregateInputObjectSchema,  Squad: SquadOrderByRelationAggregateInputObjectSchema,  Team: TeamOrderByRelationAggregateInputObjectSchema
});
