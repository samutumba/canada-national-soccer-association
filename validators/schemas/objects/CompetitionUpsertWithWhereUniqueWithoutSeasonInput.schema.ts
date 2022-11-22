// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSeasonInputObjectSchema } from '../internals';

export const CompetitionUpsertWithWhereUniqueWithoutSeasonInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutSeasonInputObjectSchema,
CompetitionUncheckedUpdateWithoutSeasonInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSeasonInputObjectSchema,
CompetitionUncheckedCreateWithoutSeasonInputObjectSchema])
});
