// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffScalarWhereInputObjectSchema } from '../internals';;
import { StaffUpdateManyMutationInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateManyWithoutStaffInputObjectSchema } from '../internals';

export const StaffUpdateManyWithWhereWithoutAccountInputObjectSchema = Yup.object({
    where: StaffScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([StaffUpdateManyMutationInputObjectSchema,
StaffUncheckedUpdateManyWithoutStaffInputObjectSchema])
});
