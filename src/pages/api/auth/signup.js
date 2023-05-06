import { register } from "@/lib/queries/user";
import { signIn } from "next-auth/react";

export default function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const data = req.body;
            register(data).then((user) => {
                res.status(200).json(user);
            })
        } catch (err) {
            res.status(200).json({
                error: "Kullanıcı oluşturulamadı"
            });
        }
    }
}
