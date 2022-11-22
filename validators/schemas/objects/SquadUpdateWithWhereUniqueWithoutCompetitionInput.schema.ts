// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';

export const SquadUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateWithoutCompetitionInputObjectSchema,
SquadUncheckedUpdateWithoutCompetitionInputObjectSchema])
});
