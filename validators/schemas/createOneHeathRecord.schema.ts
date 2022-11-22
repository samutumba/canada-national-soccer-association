import * as Yup from 'yup';
import { HeathRecordCreateInputObjectSchema } from './internals'

export const HeathRecordCreateSchema = Yup.object({ data: HeathRecordCreateInputObjectSchema  }).required()