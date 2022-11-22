import * as Yup from 'yup';
import { InjuryWhereUniqueInputObjectSchema, InjuryCreateInputObjectSchema, InjuryUpdateInputObjectSchema } from './internals'

export const InjuryUpsertSchema = Yup.object({ where: InjuryWhereUniqueInputObjectSchema, data: InjuryCreateInputObjectSchema, update: InjuryUpdateInputObjectSchema  }).required()