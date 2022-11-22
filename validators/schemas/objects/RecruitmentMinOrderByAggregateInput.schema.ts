// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const RecruitmentMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  passed: SortOrderSchema,  resume: SortOrderSchema,  playerId: SortOrderSchema,  accountId: SortOrderSchema
});
