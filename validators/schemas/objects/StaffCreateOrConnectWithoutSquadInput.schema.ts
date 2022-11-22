// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const StaffCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([StaffCreateWithoutSquadInputObjectSchema,
StaffUncheckedCreateWithoutSquadInputObjectSchema])
});
