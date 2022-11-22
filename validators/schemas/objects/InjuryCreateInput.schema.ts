// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutInjuryInputObjectSchema } from '../internals';;
import { OperationCreateNestedManyWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutInjuryInputObjectSchema,  Operation: OperationCreateNestedManyWithoutInjuryInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
