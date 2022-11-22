// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StaffWhereUniqueInputObjectSchema } from '../internals';;
import { StaffUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { StaffUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const StaffUpdateWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: StaffWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([StaffUpdateWithoutSquadInputObjectSchema,
StaffUncheckedUpdateWithoutSquadInputObjectSchema])
});
