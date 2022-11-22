import * as Yup from 'yup';

export const InstitutionCategorySchema = Yup.mixed().oneOf(["high_school","middle_school","college","university","semi_pro","amateur","pro"])