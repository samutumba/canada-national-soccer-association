// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CompetitionOrderByRelationAggregateInputObjectSchema } from '../internals';

export const SeasonOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  startDate: SortOrderSchema,  endDate: SortOrderSchema,  Competition: CompetitionOrderByRelationAggregateInputObjectSchema
});
