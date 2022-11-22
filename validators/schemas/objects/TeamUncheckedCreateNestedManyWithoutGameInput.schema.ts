// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { TeamCreateManyGameInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamUncheckedCreateNestedManyWithoutGameInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutGameInputObjectSchema,
Yup.array().of(TeamCreateWithoutGameInputObjectSchema),
TeamUncheckedCreateWithoutGameInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutGameInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutGameInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutGameInputObjectSchema)]),  createMany: TeamCreateManyGameInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
