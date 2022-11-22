// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const CompetitionCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSquadInputObjectSchema,
CompetitionUncheckedCreateWithoutSquadInputObjectSchema])
});
