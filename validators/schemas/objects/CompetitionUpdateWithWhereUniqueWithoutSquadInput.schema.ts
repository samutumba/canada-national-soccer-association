// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const CompetitionUpdateWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutSquadInputObjectSchema,
CompetitionUncheckedUpdateWithoutSquadInputObjectSchema])
});
