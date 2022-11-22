// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { RecruitmentCountOrderByAggregateInputObjectSchema } from '../internals';;
import { RecruitmentMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { RecruitmentMinOrderByAggregateInputObjectSchema } from '../internals';

export const RecruitmentOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  passed: SortOrderSchema,  resume: SortOrderSchema,  playerId: SortOrderSchema,  accountId: SortOrderSchema,  _count: RecruitmentCountOrderByAggregateInputObjectSchema,  _max: RecruitmentMaxOrderByAggregateInputObjectSchema,  _min: RecruitmentMinOrderByAggregateInputObjectSchema
});
