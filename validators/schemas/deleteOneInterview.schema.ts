import * as Yup from 'yup';
import { InterviewWhereUniqueInputObjectSchema } from './internals'

export const InterviewDeleteOneSchema = Yup.object({ where: InterviewWhereUniqueInputObjectSchema  }).required()