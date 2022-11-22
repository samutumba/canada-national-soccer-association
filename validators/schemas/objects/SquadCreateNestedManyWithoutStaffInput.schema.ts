// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutStaffInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadCreateNestedManyWithoutStaffInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutStaffInputObjectSchema,
Yup.array().of(SquadCreateWithoutStaffInputObjectSchema),
SquadUncheckedCreateWithoutStaffInputObjectSchema,
Yup.array().of(SquadUncheckedCreateWithoutStaffInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SquadCreateOrConnectWithoutStaffInputObjectSchema,
Yup.array().of(SquadCreateOrConnectWithoutStaffInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SquadWhereUniqueInputObjectSchema,
Yup.array().of(SquadWhereUniqueInputObjectSchema)])
});
