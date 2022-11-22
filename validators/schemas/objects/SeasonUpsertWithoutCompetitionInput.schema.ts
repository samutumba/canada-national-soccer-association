// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const SeasonUpsertWithoutCompetitionInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([SeasonUpdateWithoutCompetitionInputObjectSchema,
SeasonUncheckedUpdateWithoutCompetitionInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SeasonCreateWithoutCompetitionInputObjectSchema,
SeasonUncheckedCreateWithoutCompetitionInputObjectSchema])
});
