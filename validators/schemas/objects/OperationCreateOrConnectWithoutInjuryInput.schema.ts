// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationWhereUniqueInputObjectSchema } from '../internals';;
import { OperationCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';

export const OperationCreateOrConnectWithoutInjuryInputObjectSchema = Yup.object({
    where: OperationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([OperationCreateWithoutInjuryInputObjectSchema,
OperationUncheckedCreateWithoutInjuryInputObjectSchema])
});
