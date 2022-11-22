// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { RecruitmentWhereInputObjectSchema } from '../internals';

export const RecruitmentRelationFilterObjectSchema = Yup.object({
    is: RecruitmentWhereInputObjectSchema,  isNot: RecruitmentWhereInputObjectSchema
});
