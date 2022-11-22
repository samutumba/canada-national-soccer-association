import * as Yup from 'yup';
import { InjuryWhereInputObjectSchema, InjuryOrderByWithRelationInputObjectSchema, InjuryWhereUniqueInputObjectSchema } from './internals'

export const InjuryAggregateSchema = Yup.object({ where: InjuryWhereInputObjectSchema, orderBy: InjuryOrderByWithRelationInputObjectSchema, cursor: InjuryWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()