// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateOrConnectWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateManyInjuryInputEnvelopeObjectSchema } from '../internals';;
import { OperationWhereUniqueInputObjectSchema } from '../internals';

export const OperationUncheckedCreateNestedManyWithoutInjuryInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([OperationCreateWithoutInjuryInputObjectSchema,
Yup.array().of(OperationCreateWithoutInjuryInputObjectSchema),
OperationUncheckedCreateWithoutInjuryInputObjectSchema,
Yup.array().of(OperationUncheckedCreateWithoutInjuryInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([OperationCreateOrConnectWithoutInjuryInputObjectSchema,
Yup.array().of(OperationCreateOrConnectWithoutInjuryInputObjectSchema)]),  createMany: OperationCreateManyInjuryInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([OperationWhereUniqueInputObjectSchema,
Yup.array().of(OperationWhereUniqueInputObjectSchema)])
});
