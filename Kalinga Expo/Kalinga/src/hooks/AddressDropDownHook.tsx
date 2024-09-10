import React, {useState, useEffect } from "react";

import { 
    getCityListByProvince, 
    getProvinceListByRegion, 
    getBarangayListByCity, 
    allCities,
    allBarangays, 
    allProvinces, 
    allRegions
    } from "@/functions/philippines";



export const useAddressDropDownHook = () => {

    const [provinces, setProvinces] = useState<[]>(allProvinces)
    const [cities, setCities] = useState<[]>(allCities)
    const [barangays, setBarangays] = useState<[]>(allBarangays)

    const updateProvinceList = (code:{reg_code: string}) => {
       const newProvinces = getProvinceListByRegion(code.reg_code)
        setProvinces(newProvinces)
    }

    const updateCitiesList = (code: {prov_code: string}) => {
        const newCities = getCityListByProvince(code.prov_code)
         setCities(newCities)
     }

     const updateBarangayList = (code: {mun_code: string}) => {
        const newBarangay = getBarangayListByCity(code.mun_code)
         setBarangays(newBarangay)
     }

     

    return {
        provinces,
        cities,
        barangays,
        updateProvinceList,
        updateCitiesList,
        updateBarangayList
    }
}