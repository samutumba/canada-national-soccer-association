// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ScholarshipOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { SquadOrderByRelationAggregateInputObjectSchema } from '../internals';

export const InstitutionOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  address: SortOrderSchema,  city: SortOrderSchema,  province: SortOrderSchema,  postal_code: SortOrderSchema,  category: SortOrderSchema,  scholarship: ScholarshipOrderByRelationAggregateInputObjectSchema,  Squad: SquadOrderByRelationAggregateInputObjectSchema
});
