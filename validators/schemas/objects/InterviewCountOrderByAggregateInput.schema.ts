// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const InterviewCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  stage: SortOrderSchema,  passed: SortOrderSchema,  at: SortOrderSchema,  comment: SortOrderSchema,  recruitmentId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
