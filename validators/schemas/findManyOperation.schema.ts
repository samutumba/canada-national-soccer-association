import * as Yup from 'yup';
import { OperationWhereInputObjectSchema, OperationOrderByWithRelationInputObjectSchema, OperationWhereUniqueInputObjectSchema } from './internals';
import { OperationScalarFieldEnumSchema } from './internals'

export const OperationFindManySchema = Yup.object({ where: OperationWhereInputObjectSchema, orderBy: OperationOrderByWithRelationInputObjectSchema, cursor: OperationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(OperationScalarFieldEnumSchema)  }).required()