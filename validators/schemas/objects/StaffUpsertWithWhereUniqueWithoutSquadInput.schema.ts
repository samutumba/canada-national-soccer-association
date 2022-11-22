// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffCreateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const StaffUpsertWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([StaffUpdateWithoutSquadInputObjectSchema,
StaffUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([StaffCreateWithoutSquadInputObjectSchema,
StaffUncheckedCreateWithoutSquadInputObjectSchema])
});
