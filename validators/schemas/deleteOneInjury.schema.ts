import * as Yup from 'yup';
import { InjuryWhereUniqueInputObjectSchema } from './internals'

export const InjuryDeleteOneSchema = Yup.object({ where: InjuryWhereUniqueInputObjectSchema  }).required()