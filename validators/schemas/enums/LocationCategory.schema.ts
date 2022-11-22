import * as Yup from 'yup';

export const LocationCategorySchema = Yup.mixed().oneOf(["field","stadium","park","other"])