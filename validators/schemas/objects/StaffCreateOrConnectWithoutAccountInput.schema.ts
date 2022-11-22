// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffCreateWithoutAccountInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutAccountInputObjectSchema } from '../internals';

export const StaffCreateOrConnectWithoutAccountInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([StaffCreateWithoutAccountInputObjectSchema,
StaffUncheckedCreateWithoutAccountInputObjectSchema])
});
