// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const GameMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  updatedAt: SortOrderSchema,  attendance: SortOrderSchema,  locationId: SortOrderSchema,  competitionId: SortOrderSchema
});
