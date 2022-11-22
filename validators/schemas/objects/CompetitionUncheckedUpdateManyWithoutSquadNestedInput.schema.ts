// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUpsertWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionUpdateManyWithWhereWithoutSquadInputObjectSchema } from '../internals';;
import { CompetitionScalarWhereInputObjectSchema } from '../internals';

export const CompetitionUncheckedUpdateManyWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionCreateWithoutSquadInputObjectSchema),
CompetitionUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CompetitionCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionCreateOrConnectWithoutSquadInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CompetitionUpsertWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionUpsertWithWhereUniqueWithoutSquadInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CompetitionWhereUniqueInputObjectSchema,
Yup.array().of(CompetitionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionUpdateWithWhereUniqueWithoutSquadInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CompetitionUpdateManyWithWhereWithoutSquadInputObjectSchema,
Yup.array().of(CompetitionUpdateManyWithWhereWithoutSquadInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CompetitionScalarWhereInputObjectSchema,
Yup.array().of(CompetitionScalarWhereInputObjectSchema)])
});
