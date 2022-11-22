// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutInstitutionInputObjectSchema } from '../internals';

export const SquadUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutInstitutionInputObjectSchema,
SquadUncheckedUpdateWithoutInstitutionInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutInstitutionInputObjectSchema,
SquadUncheckedCreateWithoutInstitutionInputObjectSchema])
});
