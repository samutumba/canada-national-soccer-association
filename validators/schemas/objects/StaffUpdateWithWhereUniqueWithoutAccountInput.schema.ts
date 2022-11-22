// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateWithoutAccountInputObjectSchema } from '../internals';

export const StaffUpdateWithWhereUniqueWithoutAccountInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([StaffUpdateWithoutAccountInputObjectSchema,
StaffUncheckedUpdateWithoutAccountInputObjectSchema])
});
