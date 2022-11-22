// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TeamCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TeamMinOrderByAggregateInputObjectSchema } from '../internals';

export const TeamOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  formation: SortOrderSchema,  shirtColor: SortOrderSchema,  squadId: SortOrderSchema,  gameId: SortOrderSchema,  _count: TeamCountOrderByAggregateInputObjectSchema,  _max: TeamMaxOrderByAggregateInputObjectSchema,  _min: TeamMinOrderByAggregateInputObjectSchema
});
