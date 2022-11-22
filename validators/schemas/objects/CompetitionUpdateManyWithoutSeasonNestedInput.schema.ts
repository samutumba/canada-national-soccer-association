// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUpsertWithWhereUniqueWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionCreateManySeasonInputEnvelopeObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithWhereUniqueWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionUpdateManyWithWhereWithoutSeasonInputObjectSchema } from '../internals';;
import { CompetitionScalarWhereInputObjectSchema } from '../internals';

export const CompetitionUpdateManyWithoutSeasonNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionCreateWithoutSeasonInputObjectSchema),
CompetitionUncheckedCreateWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionUncheckedCreateWithoutSeasonInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CompetitionCreateOrConnectWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionCreateOrConnectWithoutSeasonInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CompetitionUpsertWithWhereUniqueWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionUpsertWithWhereUniqueWithoutSeasonInputObjectSchema)]),  createMany: CompetitionCreateManySeasonInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithWhereUniqueWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionUpdateWithWhereUniqueWithoutSeasonInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CompetitionUpdateManyWithWhereWithoutSeasonInputObjectSchema,
Yup.array().of(CompetitionUpdateManyWithWhereWithoutSeasonInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CompetitionScalarWhereInputObjectSchema,
Yup.array().of(CompetitionScalarWhereInputObjectSchema)])
});
