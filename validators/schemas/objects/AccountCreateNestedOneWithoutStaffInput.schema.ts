// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountUncheckedCreateWithoutStaffInputObjectSchema } from '../internals';;
import { AccountCreateOrConnectWithoutStaffInputObjectSchema } from '../internals';;
import { AccountWhereUniqueInputObjectSchema } from '../internals';

export const AccountCreateNestedOneWithoutStaffInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AccountCreateWithoutStaffInputObjectSchema,
AccountUncheckedCreateWithoutStaffInputObjectSchema]),  connectOrCreate: AccountCreateOrConnectWithoutStaffInputObjectSchema,  connect: AccountWhereUniqueInputObjectSchema
});
