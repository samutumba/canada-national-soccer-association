// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const SquadUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutCompetitionInputObjectSchema,
SquadUncheckedUpdateWithoutCompetitionInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutCompetitionInputObjectSchema,
SquadUncheckedCreateWithoutCompetitionInputObjectSchema])
});
