// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutInstitutionInputObjectSchema } from '../internals';

export const SquadUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateWithoutInstitutionInputObjectSchema,
SquadUncheckedUpdateWithoutInstitutionInputObjectSchema])
});
