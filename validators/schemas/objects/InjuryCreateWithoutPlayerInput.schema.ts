// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { OperationCreateNestedManyWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  Operation: OperationCreateNestedManyWithoutInjuryInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
