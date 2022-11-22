import * as Yup from 'yup';
import { InjuryUpdateInputObjectSchema, InjuryWhereUniqueInputObjectSchema } from './internals'

export const InjuryUpdateOneSchema = Yup.object({ data: InjuryUpdateInputObjectSchema, where: InjuryWhereUniqueInputObjectSchema  }).required()