import { provinces, barangay, cities, regions } from "@/data";
import phil from 'philippine-location-json-for-geer'

export const getProvinceListByRegion = (code: string) => {
   const list = phil.getProvincesByRegion(code)
   const newProvinceList = list.filter((item: {name: string}) => item.name !== "CITY OF MANILA")
   return newProvinceList
}
export const getCityListByProvince = (code: string) => phil.getCityMunByProvince(code)
export const getBarangayListByCity = (code: string) => phil.getBarangayByMun(code)

export const allCities = phil.city_mun
export const allRegions = phil.regions
export const allProvinces = phil.provinces
export const allBarangays = phil.barangays
