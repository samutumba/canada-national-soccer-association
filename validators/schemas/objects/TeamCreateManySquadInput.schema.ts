// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TeamCreateManySquadInputObjectSchema = Yup.object({
    id: Yup.string(),  shirtColor: Yup.string().required(),  gameId: Yup.mixed().oneOfSchemas([Yup.string()])
});
