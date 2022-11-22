// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionUncheckedCreateNestedManyWithoutSeasonInputObjectSchema } from '../internals';

export const SeasonUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  startDate: Yup.date(),  endDate: Yup.date().required(),  Competition: CompetitionUncheckedCreateNestedManyWithoutSeasonInputObjectSchema
});
