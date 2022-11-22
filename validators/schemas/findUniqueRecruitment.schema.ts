import * as Yup from 'yup';
import { RecruitmentWhereUniqueInputObjectSchema } from './internals'

export const RecruitmentFindUniqueSchema = Yup.object({ where: RecruitmentWhereUniqueInputObjectSchema }).required()