import * as Yup from 'yup';
import { InterviewWhereUniqueInputObjectSchema } from './internals'

export const InterviewFindUniqueSchema = Yup.object({ where: InterviewWhereUniqueInputObjectSchema }).required()