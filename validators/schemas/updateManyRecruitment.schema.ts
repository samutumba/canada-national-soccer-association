import * as Yup from 'yup';
import { RecruitmentUpdateManyMutationInputObjectSchema, RecruitmentWhereInputObjectSchema } from './internals'

export const RecruitmentUpdateManySchema = Yup.object({ data: RecruitmentUpdateManyMutationInputObjectSchema, where: RecruitmentWhereInputObjectSchema  }).required()