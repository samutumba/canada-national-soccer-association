import * as Yup from 'yup';
import { HeathRecordUpdateManyMutationInputObjectSchema, HeathRecordWhereInputObjectSchema } from './internals'

export const HeathRecordUpdateManySchema = Yup.object({ data: HeathRecordUpdateManyMutationInputObjectSchema, where: HeathRecordWhereInputObjectSchema  }).required()