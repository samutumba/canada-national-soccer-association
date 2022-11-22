// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutStaffInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutStaffInputObjectSchema,
SquadUncheckedCreateWithoutStaffInputObjectSchema])
});
