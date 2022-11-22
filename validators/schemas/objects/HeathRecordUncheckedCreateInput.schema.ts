// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerUncheckedCreateNestedOneWithoutHealthRecordInputObjectSchema } from '../internals';

export const HeathRecordUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  cardNumber: Yup.string().required(),  issueDate: Yup.date().required(),  expiryDate: Yup.date().required(),  Player: PlayerUncheckedCreateNestedOneWithoutHealthRecordInputObjectSchema
});
