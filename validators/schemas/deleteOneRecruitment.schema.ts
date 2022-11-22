import * as Yup from 'yup';
import { RecruitmentWhereUniqueInputObjectSchema } from './internals'

export const RecruitmentDeleteOneSchema = Yup.object({ where: RecruitmentWhereUniqueInputObjectSchema  }).required()