/**
 * @module api/actions/GetVehicleTypesForMakeId
 * @category Actions
 * @description GetVehicleTypesForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Method: [GetVehicleTypesForMakeId](#.GetVehicleTypesForMakeId)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeIdResponse](#GetVehicleTypesForMakeIdResponse)
 * > - Type: [GetVehicleTypesForMakeIdResults](#GetVehicleTypesForMakeIdResults)
 *
 */

/* Parent Class and Fetch Type */
import { Fetch, BASE_URL, FetchResponse /* Type */ } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * This returns all the Vehicle Types in the vPIC dataset for a specified Make and
 * whose ID equals the make ID in the vPIC Dataset.
 *
 * @async
 * @method
 * @param {number} makeID - Vehicle make ID.
 * @returns {(Promise<GetVehicleTypesForMakeIdResponse | Error>)} Api Response object.
 */
export const GetVehicleTypesForMakeId = async (
  makeID: number
): Promise<GetVehicleTypesForMakeIdResponse | Error> => {
  const action = 'GetVehicleTypesForMakeId';

  /* Runtime typechecking */
  const typeofMakeId = getTypeof(makeID);
  if (typeofMakeId !== 'number') {
    return Promise.reject(
      new Error(
        `${action}, "makeId" argument is required and must be of type number, got: ` +
          `<${typeofMakeId}> ${makeID}`
      )
    );
  }

  /* Build the 'default' query string to be appended to the URL*/
  const queryString = await Fetch.buildQueryString().catch(err =>
    Promise.reject(new Error(`${action}, Error building query string: ${err}`))
  );

  /* Build the final request URL*/
  const url = `${BASE_URL}/${action}/${makeID}${queryString}`;

  /* Return the result */
  return await Fetch.get(url)
    .then(response => response)
    .catch(err =>
      Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
    );
};

/**
 * Type representing the structure of objects found in the '{@link GetVehicleTypesForMakeIdResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResults
 */
export type GetVehicleTypesForMakeIdResults = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

/**
 * Type representing the complete response returned by the GetVehicleTypesForMakeId API Action.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResponse
 */
export type GetVehicleTypesForMakeIdResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetVehicleTypesForMakeIdResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
