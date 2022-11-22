// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { InjuryCountOrderByAggregateInputObjectSchema } from '../internals';;
import { InjuryMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { InjuryMinOrderByAggregateInputObjectSchema } from '../internals';

export const InjuryOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  playerId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: InjuryCountOrderByAggregateInputObjectSchema,  _max: InjuryMaxOrderByAggregateInputObjectSchema,  _min: InjuryMinOrderByAggregateInputObjectSchema
});
