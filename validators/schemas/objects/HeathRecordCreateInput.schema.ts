// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutHealthRecordInputObjectSchema } from '../internals';

export const HeathRecordCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  cardNumber: Yup.string().required(),  issueDate: Yup.date().required(),  expiryDate: Yup.date().required(),  Player: PlayerCreateNestedOneWithoutHealthRecordInputObjectSchema
});
