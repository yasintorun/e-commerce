import { UserModel } from "../models/user";

export const login = async ({ email, password }) => {
    if (!email || !password)
        throw new Error("Eposta ve şifre alanları boş bırakılamaz!");
    
    const user = await UserModel.findOne({ where: { email, password } })
    if (!user)
        throw new Error("Eposta veya şifre hatalı!");

    return user.toJSON();
}

export const register = async ({ name, email, password }) => {
    if (!name || !email || !password)
        throw new Error("Ad, eposta ve şifre alanları boş bırakılamaz!");

    const user = await UserModel.create({ name, email, password });
    return user.toJSON();
}