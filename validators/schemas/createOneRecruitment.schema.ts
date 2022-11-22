import * as Yup from 'yup';
import { RecruitmentCreateInputObjectSchema } from './internals'

export const RecruitmentCreateSchema = Yup.object({ data: RecruitmentCreateInputObjectSchema  }).required()