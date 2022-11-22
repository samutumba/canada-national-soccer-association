// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { GameEventCountOrderByAggregateInputObjectSchema } from '../internals';;
import { GameEventAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { GameEventMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { GameEventMinOrderByAggregateInputObjectSchema } from '../internals';;
import { GameEventSumOrderByAggregateInputObjectSchema } from '../internals';

export const GameEventOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  minute: SortOrderSchema,  gameId: SortOrderSchema,  playerId: SortOrderSchema,  type: SortOrderSchema,  _count: GameEventCountOrderByAggregateInputObjectSchema,  _avg: GameEventAvgOrderByAggregateInputObjectSchema,  _max: GameEventMaxOrderByAggregateInputObjectSchema,  _min: GameEventMinOrderByAggregateInputObjectSchema,  _sum: GameEventSumOrderByAggregateInputObjectSchema
});
