// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateOrConnectWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUpsertWithWhereUniqueWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateManyInjuryInputEnvelopeObjectSchema } from '../internals';;
import { OperationWhereUniqueInputObjectSchema } from '../internals';;
import { OperationUpdateWithWhereUniqueWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUpdateManyWithWhereWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationScalarWhereInputObjectSchema } from '../internals';

export const OperationUncheckedUpdateManyWithoutInjuryNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([OperationCreateWithoutInjuryInputObjectSchema,
Yup.array().of(OperationCreateWithoutInjuryInputObjectSchema),
OperationUncheckedCreateWithoutInjuryInputObjectSchema,
Yup.array().of(OperationUncheckedCreateWithoutInjuryInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([OperationCreateOrConnectWithoutInjuryInputObjectSchema,
Yup.array().of(OperationCreateOrConnectWithoutInjuryInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([OperationUpsertWithWhereUniqueWithoutInjuryInputObjectSchema,
Yup.array().of(OperationUpsertWithWhereUniqueWithoutInjuryInputObjectSchema)]),  createMany: OperationCreateManyInjuryInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([OperationWhereUniqueInputObjectSchema,
Yup.array().of(OperationWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([OperationWhereUniqueInputObjectSchema,
Yup.array().of(OperationWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([OperationWhereUniqueInputObjectSchema,
Yup.array().of(OperationWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([OperationWhereUniqueInputObjectSchema,
Yup.array().of(OperationWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([OperationUpdateWithWhereUniqueWithoutInjuryInputObjectSchema,
Yup.array().of(OperationUpdateWithWhereUniqueWithoutInjuryInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([OperationUpdateManyWithWhereWithoutInjuryInputObjectSchema,
Yup.array().of(OperationUpdateManyWithWhereWithoutInjuryInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([OperationScalarWhereInputObjectSchema,
Yup.array().of(OperationScalarWhereInputObjectSchema)])
});
