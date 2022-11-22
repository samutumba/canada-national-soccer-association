// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryCreateWithoutOperationInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutInjuryInputObjectSchema,  createdAt: Yup.date(),  updatedAt: Yup.date()
});
