import * as Yup from 'yup';
import { RecruitmentWhereInputObjectSchema } from './internals'

export const RecruitmentDeleteManySchema = Yup.object({ RecruitmentWhereInputObjectSchema  }).required()