// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumInstitutionCategoryFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { ScholarshipUncheckedUpdateManyWithoutSponsorNestedInputObjectSchema } from '../internals';

export const InstitutionUncheckedUpdateWithoutSquadInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  address: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  city: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  province: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  postal_code: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  category: Yup.mixed().oneOfSchemas([EnumInstitutionCategoryFieldUpdateOperationsInputObjectSchema]),  scholarship: ScholarshipUncheckedUpdateManyWithoutSponsorNestedInputObjectSchema
});
