// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutHomeInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutHomeInputObjectSchema } from '../internals';;
import { SquadCreateManyHomeInputEnvelopeObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadCreateNestedManyWithoutHomeInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutHomeInputObjectSchema,
Yup.array().of(SquadCreateWithoutHomeInputObjectSchema),
SquadUncheckedCreateWithoutHomeInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutHomeInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutHomeInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutHomeInputObjectSchema)]),  createMany: SquadCreateManyHomeInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)])
});
