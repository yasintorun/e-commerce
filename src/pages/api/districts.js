import { getDistrictByCityId } from "@/lib/queries/common";

export default function handler(req, res) {
    getDistrictByCityId(parseInt(req.query.cityId)).then((districts) => {
        res.status(200).json(districts);
    })
  }
  