// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';

export const InjuryUpdateWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: InjuryWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InjuryUpdateWithoutPlayerInputObjectSchema,
InjuryUncheckedUpdateWithoutPlayerInputObjectSchema])
});
