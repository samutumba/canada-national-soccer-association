// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutStaffInputObjectSchema } from '../internals';

export const SquadUpdateWithWhereUniqueWithoutStaffInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateWithoutStaffInputObjectSchema,
SquadUncheckedUpdateWithoutStaffInputObjectSchema])
});
