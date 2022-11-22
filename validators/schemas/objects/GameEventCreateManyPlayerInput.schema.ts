// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const GameEventCreateManyPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  minute: Yup.number().required(),  gameId: Yup.mixed().oneOfSchemas([Yup.string()])
});
