// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateManySquadInputEnvelopeObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamUncheckedCreateNestedManyWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutSquadInputObjectSchema,
Yup.array().of(TeamCreateWithoutSquadInputObjectSchema),
TeamUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutSquadInputObjectSchema)]),  createMany: TeamCreateManySquadInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
