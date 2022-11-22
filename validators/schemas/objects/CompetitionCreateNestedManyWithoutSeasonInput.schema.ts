// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionCreateManySeasonInputEnvelopeObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';

export const CompetitionCreateNestedManyWithoutSeasonInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionCreateWithoutSeasonInputObjectSchema),
CompetitionUncheckedCreateWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionUncheckedCreateWithoutSeasonInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CompetitionCreateOrConnectWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionCreateOrConnectWithoutSeasonInputObjectSchema)]),  createMany: CompetitionCreateManySeasonInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)])
});
