import * as Yup from 'yup';
import { InterviewUpdateInputObjectSchema, InterviewWhereUniqueInputObjectSchema } from './internals'

export const InterviewUpdateOneSchema = Yup.object({ data: InterviewUpdateInputObjectSchema, where: InterviewWhereUniqueInputObjectSchema  }).required()