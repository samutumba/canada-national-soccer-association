// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { RecruitmentOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { StaffOrderByRelationAggregateInputObjectSchema } from '../internals';

export const AccountOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  username: SortOrderSchema,  password: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  recruitment: RecruitmentOrderByRelationAggregateInputObjectSchema,  Staff: StaffOrderByRelationAggregateInputObjectSchema
});
