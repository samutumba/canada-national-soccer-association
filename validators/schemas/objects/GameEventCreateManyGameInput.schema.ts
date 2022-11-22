// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const GameEventCreateManyGameInputObjectSchema = Yup.object({
    id: Yup.string(),  minute: Yup.number().required(),  playerId: Yup.string().required()
});
