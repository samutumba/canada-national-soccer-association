// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const SeasonCreateWithoutCompetitionInputObjectSchema = Yup.object({
    id: Yup.string(),  startDate: Yup.date(),  endDate: Yup.date().required()
});
