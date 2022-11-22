// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationWhereUniqueInputObjectSchema } from '../internals';;
import { OperationUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedCreateWithoutInjuryInputObjectSchema } from '../internals';

export const OperationUpsertWithWhereUniqueWithoutInjuryInputObjectSchema = Yup.object({
    where: OperationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([OperationUpdateWithoutInjuryInputObjectSchema,
OperationUncheckedUpdateWithoutInjuryInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([OperationCreateWithoutInjuryInputObjectSchema,
OperationUncheckedCreateWithoutInjuryInputObjectSchema])
});
