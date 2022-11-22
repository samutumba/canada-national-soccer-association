// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { StaffWhereUniqueInputObjectSchema } from '../internals';

export const StaffUncheckedCreateNestedManyWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([StaffCreateWithoutSquadInputObjectSchema,
Yup.array().of(StaffCreateWithoutSquadInputObjectSchema),
StaffUncheckedCreateWithoutSquadInputObjectSchema,
Yup.array().of(StaffUncheckedCreateWithoutSquadInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([StaffCreateOrConnectWithoutSquadInputObjectSchema,
Yup.array().of(StaffCreateOrConnectWithoutSquadInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([StaffWhereUniqueInputObjectSchema,
Yup.array().of(StaffWhereUniqueInputObjectSchema)])
});
