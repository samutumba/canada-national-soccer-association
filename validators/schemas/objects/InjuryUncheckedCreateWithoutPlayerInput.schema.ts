// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationUncheckedCreateNestedManyWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryUncheckedCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  Operation: OperationUncheckedCreateNestedManyWithoutInjuryInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
