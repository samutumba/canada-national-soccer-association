// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutSeasonInputObjectSchema } from '../internals';

export const CompetitionUpdateWithWhereUniqueWithoutSeasonInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutSeasonInputObjectSchema,
CompetitionUncheckedUpdateWithoutSeasonInputObjectSchema])
});
