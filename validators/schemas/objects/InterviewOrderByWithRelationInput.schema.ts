// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { RecruitmentOrderByWithRelationInputObjectSchema } from '../internals';

export const InterviewOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  stage: SortOrderSchema,  passed: SortOrderSchema,  at: SortOrderSchema,  Recruitment: RecruitmentOrderByWithRelationInputObjectSchema,  comment: SortOrderSchema,  recruitmentId: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema
});
