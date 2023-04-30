import { getCategories } from "../../lib/queries/category";

export default function handler(req, res) {
    getCategories().then((categories) => {
        console.log(categories)
        res.status(200).json(categories);
    })
        .catch(console.error);
}
