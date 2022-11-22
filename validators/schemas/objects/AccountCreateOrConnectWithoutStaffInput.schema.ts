// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountWhereUniqueInputObjectSchema } from '../internals';;
import { AccountCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';

export const AccountCreateOrConnectWithoutStaffInputObjectSchema = Yup.object({
    where: AccountWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AccountCreateWithoutStaffInputObjectSchema,
AccountUncheckedCreateWithoutStaffInputObjectSchema])
});
