import CategoryModel from "../models/category";

export const getCategories = async () => {
    return await CategoryModel.findAll();
};