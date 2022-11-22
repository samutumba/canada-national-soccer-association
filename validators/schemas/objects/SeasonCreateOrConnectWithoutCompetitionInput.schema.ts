// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonWhereUniqueInputObjectSchema } from '../internals';;
import { SeasonCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const SeasonCreateOrConnectWithoutCompetitionInputObjectSchema = Yup.object({
    where: SeasonWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SeasonCreateWithoutCompetitionInputObjectSchema,
SeasonUncheckedCreateWithoutCompetitionInputObjectSchema])
});
