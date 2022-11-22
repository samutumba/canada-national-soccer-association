// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUpsertWithWhereUniqueWithoutStartersInputObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithWhereUniqueWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUpdateManyWithWhereWithoutStartersInputObjectSchema } from '../internals';;
import { TeamScalarWhereInputObjectSchema } from '../internals';

export const TeamUncheckedUpdateManyWithoutStartersNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutStartersInputObjectSchema,
Yup.array().of(TeamCreateWithoutStartersInputObjectSchema),
TeamUncheckedCreateWithoutStartersInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutStartersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutStartersInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutStartersInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TeamUpsertWithWhereUniqueWithoutStartersInputObjectSchema,
Yup.array().of(TeamUpsertWithWhereUniqueWithoutStartersInputObjectSchema)]),  set: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TeamUpdateWithWhereUniqueWithoutStartersInputObjectSchema,
Yup.array().of(TeamUpdateWithWhereUniqueWithoutStartersInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TeamUpdateManyWithWhereWithoutStartersInputObjectSchema,
Yup.array().of(TeamUpdateManyWithWhereWithoutStartersInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TeamScalarWhereInputObjectSchema,
Yup.array().of(TeamScalarWhereInputObjectSchema)])
});
