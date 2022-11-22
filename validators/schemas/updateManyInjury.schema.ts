import * as Yup from 'yup';
import { InjuryUpdateManyMutationInputObjectSchema, InjuryWhereInputObjectSchema } from './internals'

export const InjuryUpdateManySchema = Yup.object({ data: InjuryUpdateManyMutationInputObjectSchema, where: InjuryWhereInputObjectSchema  }).required()