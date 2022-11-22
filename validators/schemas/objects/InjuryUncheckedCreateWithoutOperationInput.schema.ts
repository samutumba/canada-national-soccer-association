// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const InjuryUncheckedCreateWithoutOperationInputObjectSchema = Yup.object({
    id: Yup.string(),  playerId: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date()
});
