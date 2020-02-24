/**
 * @module api/NHTSA
 * @description Module that exports the package level class for all NHTSA API Actions (endpoints).
 *
 * > **Module Exports**:
 * > - Class: [NHTSA](NHTSA.html#NHTSA) - Class that implements all NHTSA API Actions
 */

import { isValidVin } from '../utils/isValidVin';
/*
import { DecodeVin } from './actions/DecodeVin';
import { DecodeVinExtended } from './actions/DecodeVinExtended';
import { DecodeVinValues } from './actions/DecodeVinValues';
import { DecodeVinValuesExtended } from './actions/DecodeVinValuesExtended';
import { DecodeWMI } from './actions/DecodeWMI';
import { GetAllMakes } from './actions/GetAllMakes';
import { GetAllManufacturers } from './actions/GetAllManufacturers';
import { GetCanadianVehicleSpecifications } from './actions/GetCanadianVehicleSpecifications';
import { GetEquipmentPlantCodes } from './actions/GetEquipmentPlantCodes';
import { GetMakeForManufacturer } from './actions/GetMakeForManufacturer';
import { GetMakesForManufacturerAndYear } from './actions/GetMakesForManufacturerAndYear';
import { GetMakesForVehicleType } from './actions/GetMakesForVehicleType';
import { GetManufacturerDetails } from './actions/GetManufacturerDetails';
import { GetModelsForMake } from './actions/GetModelsForMake';
import { GetModelsForMakeId } from './actions/GetModelsForMakeId';
import { GetModelsForMakeIdYear } from './actions/GetModelsForMakeIdYear';
import { GetModelsForMakeYear } from './actions/GetModelsForMakeYear';
import { GetParts } from './actions/GetParts';
import { GetVehicleTypesForMake } from './actions/GetVehicleTypesForMake';
import { GetVehicleTypesForMakeId } from './actions/GetVehicleTypesForMakeId';
import { GetVehicleVariableList } from './actions/GetVehicleVariableList';
import { GetVehicleVariableValuesList } from './actions/GetVehicleVariableValuesList';
import { GetWMIsForManufacturer } from './actions/GetWMIsForManufacturer';

/* Import implemented API Action classes */
import {
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
  GetWMIsForManufacturer
} from './actions';

/**
 * @class NHTSA
 *
 * @augments {Fetch}
 *
 * @implements {module:api/actions/DecodeVin.DecodeVin}
 * @implements {module:api/actions/DecodeVinExtended.DecodeVinExtended}
 * @implements {module:api/actions/DecodeVinValues.DecodeVinValues}
 * @implements {module:api/actions/DecodeVinValuesExtended.DecodeVinValuesExtended}
 * @implements {module:api/actions/DecodeWMI.DecodeWMI}
 * @implements {module:api/actions/GetAllMakes.GetAllMakes}
 * @implements {module:api/actions/GetAllManufacturers.GetAllManufacturers}
 * @implements {module:api/actions/GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications}
 * @implements {module:api/actions/GetEquipmentPlantCodes.GetEquipmentPlantCodes}
 * @implements {module:api/actions/GetMakeForManufacturer.GetMakeForManufacturer}
 * @implements {module:api/actions/GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear}
 * @implements {module:api/actions/GetMakesForVehicleType.GetMakesForVehicleType}
 * @implements {module:api/actions/GetManufacturerDetails.GetManufacturerDetails}
 * @implements {module:api/actions/GetModelsForMake.GetModelsForMake}
 * @implements {module:api/actions/GetModelsForMakeId.GetModelsForMakeId}
 * @implements {module:api/actions/GetModelsForMakeIdYear.GetModelsForMakeIdYear}
 * @implements {module:api/actions/GetModelsForMakeYear.GetModelsForMakeYear}
 * @implements {module:api/actions/GetParts.GetParts}
 * @implements {module:api/actions/GetVehicleTypesForMake.GetVehicleTypesForMake}
 * @implements {module:api/actions/GetVehicleTypesForMakeId.GetVehicleTypesForMakeId}
 * @implements {module:api/actions/GetVehicleVariableList.GetVehicleVariableList}
 * @implements {module:api/actions/GetVehicleVariableValuesList.GetVehicleVariableValuesList}
 * @implements {module:api/actions/GetWMIsForManufacturer.GetWMIsForManufacturer}
 */
class NHTSA {
  isValidVin = isValidVin;

  DecodeVin = DecodeVin;
  DecodeVinExtended = DecodeVinExtended;
  DecodeVinValues = DecodeVinValues;
  DecodeVinValuesExtended = DecodeVinValuesExtended;
  DecodeWMI = DecodeWMI;
  GetAllMakes = GetAllMakes;
  GetAllManufacturers = GetAllManufacturers;
  GetCanadianVehicleSpecifications = GetCanadianVehicleSpecifications;
  GetEquipmentPlantCodes = GetEquipmentPlantCodes;
  GetMakeForManufacturer = GetMakeForManufacturer;
  GetMakesForManufacturerAndYear = GetMakesForManufacturerAndYear;
  GetMakesForVehicleType = GetMakesForVehicleType;
  GetManufacturerDetails = GetManufacturerDetails;
  GetModelsForMake = GetModelsForMake;
  GetModelsForMakeId = GetModelsForMakeId;
  GetModelsForMakeIdYear = GetModelsForMakeIdYear;
  GetModelsForMakeYear = GetModelsForMakeYear;
  GetParts = GetParts;
  GetVehicleTypesForMake = GetVehicleTypesForMake;
  GetVehicleTypesForMakeId = GetVehicleTypesForMakeId;
  GetVehicleVariableList = GetVehicleVariableList;
  GetVehicleVariableValuesList = GetVehicleVariableValuesList;
  GetWMIsForManufacturer = GetWMIsForManufacturer;
}

export { NHTSA };
