// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereInputObjectSchema } from '../internals';

export const RecruitmentListRelationFilterObjectSchema = Yup.object({
    every: RecruitmentWhereInputObjectSchema,  some: RecruitmentWhereInputObjectSchema,  none: RecruitmentWhereInputObjectSchema
});
