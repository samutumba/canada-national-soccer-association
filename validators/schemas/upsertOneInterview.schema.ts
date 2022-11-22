import * as Yup from 'yup';
import { InterviewWhereUniqueInputObjectSchema, InterviewCreateInputObjectSchema, InterviewUpdateInputObjectSchema } from './internals'

export const InterviewUpsertSchema = Yup.object({ where: InterviewWhereUniqueInputObjectSchema, data: InterviewCreateInputObjectSchema, update: InterviewUpdateInputObjectSchema  }).required()