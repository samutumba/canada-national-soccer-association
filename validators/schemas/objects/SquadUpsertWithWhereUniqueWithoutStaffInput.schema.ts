// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadCreateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';

export const SquadUpsertWithWhereUniqueWithoutStaffInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutStaffInputObjectSchema,
SquadUncheckedUpdateWithoutStaffInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutStaffInputObjectSchema,
SquadUncheckedCreateWithoutStaffInputObjectSchema])
});
