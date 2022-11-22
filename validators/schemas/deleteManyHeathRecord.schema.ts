import * as Yup from 'yup';
import { HeathRecordWhereInputObjectSchema } from './internals'

export const HeathRecordDeleteManySchema = Yup.object({ HeathRecordWhereInputObjectSchema  }).required()