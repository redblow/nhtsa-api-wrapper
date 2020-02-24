// import { DecodeVin } from './TestAction';

// const Client = Object.create({});

// Client.prototype.DecodeVin = DecodeVin;

// export { Client };

import { NHTSA } from './NHTSA';

// const Client = Object.create(NHTSA.prototype);
const Client = new NHTSA();

export { Client };
