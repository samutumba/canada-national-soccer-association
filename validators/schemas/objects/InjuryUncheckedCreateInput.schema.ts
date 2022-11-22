// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationUncheckedCreateNestedManyWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  playerId: Yup.string().required(),  Operation: OperationUncheckedCreateNestedManyWithoutInjuryInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
