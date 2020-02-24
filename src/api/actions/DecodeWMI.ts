/**
 * @module api/actions/DecodeWMI
 * @category Actions
 * @description DecodeWMI NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeWMI](module-api_actions_DecodeWMI.DecodeWMI.html)
 * >
 * > **Types**
 * > - Type: [DecodeWMIResponse](#DecodeWMIResponse)
 * > - Type: [DecodeWMIResults](#DecodeWMIResults)
 *
 */

/* Parent Class and Fetch Type */
import { Fetch, BASE_URL, FetchResponse /* Type */ } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * This provides information on the World Manufacturer Identifier for a specific WMI code.
 * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
 *   representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
 *
 * @async
 * @method
 * @param {string} WMI - World Manufacturer Identifier.
 * @returns {(Promise<DecodeWMIResults | Error>)} Api Response object.
 */
export const DecodeWMI = async (
  WMI: string
): Promise<DecodeWMIResponse | Error> => {
  const action = 'DecodeWMI';

  /* Runtime typechecking */
  const typeofWMI = getTypeof(WMI);
  if (typeofWMI !== 'string') {
    return Promise.reject(
      new Error(
        `${action}, "WMI" argument is required and must be of type string, got: ` +
          `<${typeofWMI}> ${WMI}`
      )
    );
  }

  /* Build the 'default' query string to be appended to the URL*/
  const queryString = await Fetch.buildQueryString().catch(err =>
    Promise.reject(new Error(`${action}, Error building query string: ${err}`))
  );

  /* Build the final request URL*/
  const url = `${BASE_URL}/${action}/${WMI}${queryString}`;

  /* Return the result */
  return await Fetch.get(url)
    .then(response => response)
    .catch(err =>
      Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
    );
};

/**
 * Type representing the structure of objects found in the '{@link DecodeWMIResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeWMI
 * @alias DecodeWMIResults
 */
export type DecodeWMIResults = {
  CommonName: string;
  CreatedOn: string;
  DateAvailableToPublic: string;
  Make: string;
  ManufacturerName: string;
  ParentCompanyName: string;
  URL: string;
  UpdatedOn: string;
  VehicleType: string;
};

/**
 * Type representing the complete response returned by the DecodeWMI API Action.
 *
 * @memberof module:api/actions/DecodeWMI
 * @alias DecodeWMIResponse
 */
export type DecodeWMIResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<DecodeWMIResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
