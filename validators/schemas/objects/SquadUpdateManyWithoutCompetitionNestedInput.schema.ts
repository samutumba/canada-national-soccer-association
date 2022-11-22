// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadUpdateManyWithWhereWithoutCompetitionInputObjectSchema } from '../internals';;
import { SquadScalarWhereInputObjectSchema } from '../internals';

export const SquadUpdateManyWithoutCompetitionNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadCreateWithoutCompetitionInputObjectSchema),
SquadUncheckedCreateWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutCompetitionInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutCompetitionInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SquadUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadUpsertWithWhereUniqueWithoutCompetitionInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SquadUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadUpdateWithWhereUniqueWithoutCompetitionInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SquadUpdateManyWithWhereWithoutCompetitionInputObjectSchema,
Yup.array().of(SquadUpdateManyWithWhereWithoutCompetitionInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SquadScalarWhereInputObjectSchema,
Yup.array().of(SquadScalarWhereInputObjectSchema)])
});
