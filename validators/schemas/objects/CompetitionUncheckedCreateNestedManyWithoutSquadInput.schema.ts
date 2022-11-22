// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';

export const CompetitionUncheckedCreateNestedManyWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionCreateWithoutSquadInputObjectSchema),
CompetitionUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CompetitionCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionCreateOrConnectWithoutSquadInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)])
});
