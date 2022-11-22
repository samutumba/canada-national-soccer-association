// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutAccountInputObjectSchema } from '../internals';

export const StaffUpsertWithWhereUniqueWithoutAccountInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([StaffUpdateWithoutAccountInputObjectSchema,
StaffUncheckedUpdateWithoutAccountInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([StaffCreateWithoutAccountInputObjectSchema,
StaffUncheckedCreateWithoutAccountInputObjectSchema])
});
