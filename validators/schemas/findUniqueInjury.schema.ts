import * as Yup from 'yup';
import { InjuryWhereUniqueInputObjectSchema } from './internals'

export const InjuryFindUniqueSchema = Yup.object({ where: InjuryWhereUniqueInputObjectSchema }).required()