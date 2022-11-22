// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateNestedManyWithoutSeasonInputObjectSchema } from '../internals';

export const SeasonCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  startDate: Yup.date(),  endDate: Yup.date().required(),  Competition: CompetitionCreateNestedManyWithoutSeasonInputObjectSchema
});
