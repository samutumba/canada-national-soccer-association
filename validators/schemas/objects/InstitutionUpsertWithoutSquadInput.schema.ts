// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const InstitutionUpsertWithoutSquadInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([InstitutionUpdateWithoutSquadInputObjectSchema,
InstitutionUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutSquadInputObjectSchema,
InstitutionUncheckedCreateWithoutSquadInputObjectSchema])
});
