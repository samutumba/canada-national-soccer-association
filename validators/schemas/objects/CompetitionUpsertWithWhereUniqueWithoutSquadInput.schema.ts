// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const CompetitionUpsertWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutSquadInputObjectSchema,
CompetitionUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSquadInputObjectSchema,
CompetitionUncheckedCreateWithoutSquadInputObjectSchema])
});
