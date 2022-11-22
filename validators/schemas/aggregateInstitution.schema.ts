import * as Yup from 'yup';
import { InstitutionWhereInputObjectSchema, InstitutionOrderByWithRelationInputObjectSchema, InstitutionWhereUniqueInputObjectSchema } from './internals'

export const InstitutionAggregateSchema = Yup.object({ where: InstitutionWhereInputObjectSchema, orderBy: InstitutionOrderByWithRelationInputObjectSchema, cursor: InstitutionWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()