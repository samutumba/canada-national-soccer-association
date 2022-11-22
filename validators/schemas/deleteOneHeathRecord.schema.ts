import * as Yup from 'yup';
import { HeathRecordWhereUniqueInputObjectSchema } from './internals'

export const HeathRecordDeleteOneSchema = Yup.object({ where: HeathRecordWhereUniqueInputObjectSchema  }).required()