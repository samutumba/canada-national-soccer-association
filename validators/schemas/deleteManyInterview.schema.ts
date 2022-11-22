import * as Yup from 'yup';
import { InterviewWhereInputObjectSchema } from './internals'

export const InterviewDeleteManySchema = Yup.object({ InterviewWhereInputObjectSchema  }).required()