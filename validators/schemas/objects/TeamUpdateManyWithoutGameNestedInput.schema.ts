// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutGameInputObjectSchema } from '../internals';;
import { TeamCreateManyGameInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutGameInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutGameInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUpdateManyWithoutGameNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutGameInputObjectSchema,
Yup.array().of(TeamCreateWithoutGameInputObjectSchema),
TeamUncheckedCreateWithoutGameInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutGameInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutGameInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutGameInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutGameInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutGameInputObjectSchema)]),  createMany: TeamCreateManyGameInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutGameInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutGameInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutGameInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutGameInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
