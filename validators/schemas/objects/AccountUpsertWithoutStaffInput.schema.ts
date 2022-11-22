// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedUpdateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';

export const AccountUpsertWithoutStaffInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([AccountUpdateWithoutStaffInputObjectSchema,
AccountUncheckedUpdateWithoutStaffInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AccountCreateWithoutStaffInputObjectSchema,
AccountUncheckedCreateWithoutStaffInputObjectSchema])
});
