import { getCities } from "@/lib/queries/common"

export default function handler(req, res) {
    getCities().then((cities) => {
        res.status(200).json(cities);
    })
  }
  