// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutCompetitionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutCompetitionInputObjectSchema,
SquadUncheckedCreateWithoutCompetitionInputObjectSchema])
});
