// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateManySquadInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutSquadInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUpdateManyWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutSquadInputObjectSchema,
Yup.array().of(TeamCreateWithoutSquadInputObjectSchema),
TeamUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutSquadInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutSquadInputObjectSchema)]),  createMany: TeamCreateManySquadInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutSquadInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutSquadInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutSquadInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutSquadInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
