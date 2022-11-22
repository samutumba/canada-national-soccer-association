// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationScalarWhereInputObjectSchema } from '../internals';;
import { OperationUpdateManyMutationInputObjectSchema } from '../internals';;
import { OperationUncheckedUpdateManyWithoutOperationInputObjectSchema } from '../internals';

export const OperationUpdateManyWithWhereWithoutInjuryInputObjectSchema = Yup.object({
    where: OperationScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([OperationUpdateManyMutationInputObjectSchema,
OperationUncheckedUpdateManyWithoutOperationInputObjectSchema])
});
