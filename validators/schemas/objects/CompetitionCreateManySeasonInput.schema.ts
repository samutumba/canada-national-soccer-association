// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CompetitionCreateManySeasonInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required()
});
