import CityModel from "../models/city"
import DistrictModel from "../models/district";

export const getCities = async () => {
    const cities = await CityModel.findAll();
    return cities.map((city) => city.toJSON());
}

export const getDistrictByCityId = async (cityId) => {
    const districts = await DistrictModel.findAll({
        where: {
            cityId
        },
        include: [
            {
                model: CityModel
            }
        ]
    });
    return districts.map((district) => district.toJSON());
}