// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PlayerOrderByWithRelationInputObjectSchema } from '../internals';;
import { AccountOrderByWithRelationInputObjectSchema } from '../internals';;
import { InterviewOrderByRelationAggregateInputObjectSchema } from '../internals';

export const RecruitmentOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  player: PlayerOrderByWithRelationInputObjectSchema,  recruiter: AccountOrderByWithRelationInputObjectSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  passed: SortOrderSchema,  interviews: InterviewOrderByRelationAggregateInputObjectSchema,  resume: SortOrderSchema,  playerId: SortOrderSchema,  accountId: SortOrderSchema
});
