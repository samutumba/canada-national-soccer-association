// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutStartersInputObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';

export const TeamCreateNestedManyWithoutStartersInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutStartersInputObjectSchema,
Yup.array().of(TeamCreateWithoutStartersInputObjectSchema),
TeamUncheckedCreateWithoutStartersInputObjectSchema,
Yup.array().of(TeamUncheckedCreateWithoutStartersInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TeamCreateOrConnectWithoutStartersInputObjectSchema,
Yup.array().of(TeamCreateOrConnectWithoutStartersInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TeamWhereUniqueInputObjectSchema,
Yup.array().of(TeamWhereUniqueInputObjectSchema)])
});
