import * as Yup from 'yup';
import { RecruitmentUpdateInputObjectSchema, RecruitmentWhereUniqueInputObjectSchema } from './internals'

export const RecruitmentUpdateOneSchema = Yup.object({ data: RecruitmentUpdateInputObjectSchema, where: RecruitmentWhereUniqueInputObjectSchema  }).required()