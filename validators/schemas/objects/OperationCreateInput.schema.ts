// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryCreateNestedOneWithoutOperationInputObjectSchema } from '../internals';

export const OperationCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  injury: InjuryCreateNestedOneWithoutOperationInputObjectSchema,  date: Yup.date(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
