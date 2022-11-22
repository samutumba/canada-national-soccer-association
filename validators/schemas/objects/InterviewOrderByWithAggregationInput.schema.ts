// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InterviewCountOrderByAggregateInputObjectSchema } from '../internals';;
import { InterviewMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { InterviewMinOrderByAggregateInputObjectSchema } from '../internals';

export const InterviewOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  stage: SortOrderSchema,  passed: SortOrderSchema,  at: SortOrderSchema,  comment: SortOrderSchema,  recruitmentId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: InterviewCountOrderByAggregateInputObjectSchema,  _max: InterviewMaxOrderByAggregateInputObjectSchema,  _min: InterviewMinOrderByAggregateInputObjectSchema
});
