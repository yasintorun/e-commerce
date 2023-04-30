import { payOrder } from "@/lib/queries/order";

export default function handler(req, res) {
    if (req.method == 'POST') {
        const data = JSON.parse(req.body);
        payOrder(data).then((order) => {
            res.status(200).json(order);
        })
    }
}
