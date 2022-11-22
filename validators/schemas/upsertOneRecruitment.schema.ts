import * as Yup from 'yup';
import { RecruitmentWhereUniqueInputObjectSchema, RecruitmentCreateInputObjectSchema, RecruitmentUpdateInputObjectSchema } from './internals'

export const RecruitmentUpsertSchema = Yup.object({ where: RecruitmentWhereUniqueInputObjectSchema, data: RecruitmentCreateInputObjectSchema, update: RecruitmentUpdateInputObjectSchema  }).required()