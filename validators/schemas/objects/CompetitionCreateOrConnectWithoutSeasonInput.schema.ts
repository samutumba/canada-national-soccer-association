// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSeasonInputObjectSchema } from '../internals';

export const CompetitionCreateOrConnectWithoutSeasonInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSeasonInputObjectSchema,
CompetitionUncheckedCreateWithoutSeasonInputObjectSchema])
});
