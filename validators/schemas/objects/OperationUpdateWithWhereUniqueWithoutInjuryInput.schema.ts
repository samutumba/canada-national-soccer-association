// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationWhereUniqueInputObjectSchema } from '../internals';;
import { OperationUpdateWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationUncheckedUpdateWithoutInjuryInputObjectSchema } from '../internals';

export const OperationUpdateWithWhereUniqueWithoutInjuryInputObjectSchema = Yup.object({
    where: OperationWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([OperationUpdateWithoutInjuryInputObjectSchema,
OperationUncheckedUpdateWithoutInjuryInputObjectSchema])
});
