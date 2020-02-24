/**
 * @module api/actions/GetAllMakes
 * @category Actions
 * @description GetAllMakes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Method: [GetAllMakes](#.GetAllMakes)
 * >
 * > **Types**
 * > - Type: [GetAllMakesResponse](#GetAllMakesResponse)
 * > - Type: [GetAllMakesResults](#GetAllMakesResults)
 *
 */

/* Parent Class and Fetch Type */
import { Fetch, BASE_URL, FetchResponse /* Type */ } from '../Fetch';

/**
 * This provides a list of all the Makes available in the vPIC Dataset.
 *
 * @async
 * @method
 * @returns {(Promise<GetAllMakesResponse | Error>)} Api Response object.
 */
export const GetAllMakes = async (): Promise<GetAllMakesResponse | Error> => {
  const action = 'GetAllMakes';

  /* Build the 'default' query string to be appended to the URL*/
  const queryString = await Fetch.buildQueryString().catch(err =>
    Promise.reject(new Error(`${action}, Error building query string: ${err}`))
  );

  /* Build the final request URL*/
  const url = `${BASE_URL}/${action}${queryString}`;

  /* Return the result */
  return await Fetch.get(url)
    .then(response => response)
    .catch(err =>
      Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
    );
};

/**
 * Type representing the structure of objects found in the '{@link GetAllMakesResponse}.Results' array.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResults
 */
export type GetAllMakesResults = {
  Make_ID: number;
  Make_Name: string;
};

/**
 * Type representing the complete response returned by the GetAllMakes API Action.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResponse
 */
export type GetAllMakesResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetAllMakesResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
