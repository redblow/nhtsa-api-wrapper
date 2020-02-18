/**
 * @module api/NHTSA
 * @category Wrapper
 * @description API Fetch Logic.
 *
 * > **Module Exports**:
 * > - Class: [NHTSA](NHTSA.html#NHTSA) - Class that implements all NHSTA API Actions
 */

import { Fetch /* Class */, FetchConfig /* Type */ } from './Fetch';

/* Import implemented API Action classes */
import {
  DecodeVin,
  DecodeVinValues,
  DecodeVinExtended,
  DecodeVinValuesExtended,
  DecodeWMI,
  GetWMIsForManufacturer,
  GetAllMakes,
  GetParts,
  GetAllManufacturers,
  GetManufacturerDetails,
  GetMakeForManufacturer,
  GetMakesForManufacturerAndYear,
  GetMakesForVehicleType,
  GetVehicleTypesForMake,
  GetVehicleTypesForMakeId,
  GetEquipmentPlantCodes,
  GetModelsForMake,
  GetModelsForMakeId,
  GetModelsForMakeYear,
  GetModelsForMakeIdYear,
  GetVehicleVariableList,
  GetVehicleVariableValuesList,
  GetCanadianVehicleSpecifications
} from './actions';

/**
 * @class NHTSA
 *
 * @augments {Fetch}
 *
 * @implements {module:api/actions/DecodeVin.DecodeVin}
 * @implements {module:api/actions/DecodeVinExtended.DecodeVinExtended}
 * @implements {DecodeVinValues}
 * @implements {DecodeVinValuesExtended}
 * @implements {DecodeWMI}
 * @implements {GetAllMakes}
 * @implements {GetAllManufacturers}
 * @implements {GetCanadianVehicleSpecifications}
 * @implements {GetEquipmentPlantCodes}
 * @implements {GetMakeForManufacturer}
 * @implements {GetMakesForManufacturerAndYear}
 * @implements {GetMakesForVehicleType}
 * @implements {GetManufacturerDetails}
 * @implements {GetModelsForMake}
 * @implements {GetModelsForMakeId}
 * @implements {GetModelsForMakeIdYear}
 * @implements {GetModelsForMakeYear}
 * @implements {GetParts}
 * @implements {GetVehicleTypesForMake}
 * @implements {GetVehicleTypesForMakeId}
 * @implements {GetVehicleVariableList}
 * @implements {GetVehicleVariableValuesList}
 * @implements {GetWMIsForManufacturer}
 */
class NHTSA extends Fetch
  implements
    DecodeVin,
    DecodeVinExtended,
    DecodeVinValues,
    DecodeVinValuesExtended,
    DecodeWMI,
    GetAllMakes,
    GetAllManufacturers,
    GetCanadianVehicleSpecifications,
    GetEquipmentPlantCodes,
    GetMakeForManufacturer,
    GetMakesForManufacturerAndYear,
    GetMakesForVehicleType,
    GetManufacturerDetails,
    GetModelsForMake,
    GetModelsForMakeId,
    GetModelsForMakeIdYear,
    GetModelsForMakeYear,
    GetParts,
    GetVehicleTypesForMake,
    GetVehicleTypesForMakeId,
    GetVehicleVariableList,
    GetVehicleVariableValuesList,
    GetWMIsForManufacturer {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  DecodeVin = DecodeVin.prototype.DecodeVin;

  DecodeVinValues = DecodeVinValues.prototype.DecodeVinValues;

  DecodeVinExtended = DecodeVinExtended.prototype.DecodeVinExtended;

  DecodeVinValuesExtended =
    DecodeVinValuesExtended.prototype.DecodeVinValuesExtended;

  DecodeWMI = DecodeWMI.prototype.DecodeWMI;

  GetAllMakes = GetAllMakes.prototype.GetAllMakes;

  GetAllManufacturers = GetAllManufacturers.prototype.GetAllManufacturers;

  GetCanadianVehicleSpecifications =
    GetCanadianVehicleSpecifications.prototype.GetCanadianVehicleSpecifications;

  GetEquipmentPlantCodes =
    GetEquipmentPlantCodes.prototype.GetEquipmentPlantCodes;

  GetMakeForManufacturer =
    GetMakeForManufacturer.prototype.GetMakeForManufacturer;

  GetMakesForManufacturerAndYear =
    GetMakesForManufacturerAndYear.prototype.GetMakesForManufacturerAndYear;

  GetMakesForVehicleType =
    GetMakesForVehicleType.prototype.GetMakesForVehicleType;

  GetManufacturerDetails =
    GetManufacturerDetails.prototype.GetManufacturerDetails;

  GetModelsForMake = GetModelsForMake.prototype.GetModelsForMake;

  GetModelsForMakeId = GetModelsForMakeId.prototype.GetModelsForMakeId;

  GetModelsForMakeIdYear =
    GetModelsForMakeIdYear.prototype.GetModelsForMakeIdYear;

  GetModelsForMakeYear = GetModelsForMakeYear.prototype.GetModelsForMakeYear;

  GetParts = GetParts.prototype.GetParts;

  GetVehicleTypesForMake =
    GetVehicleTypesForMake.prototype.GetVehicleTypesForMake;

  GetVehicleTypesForMakeId =
    GetVehicleTypesForMakeId.prototype.GetVehicleTypesForMakeId;

  GetVehicleVariableList =
    GetVehicleVariableList.prototype.GetVehicleVariableList;

  GetVehicleVariableValuesList =
    GetVehicleVariableValuesList.prototype.GetVehicleVariableValuesList;

  GetWMIsForManufacturer =
    GetWMIsForManufacturer.prototype.GetWMIsForManufacturer;
}

export { NHTSA };

export const Client = new NHTSA();
