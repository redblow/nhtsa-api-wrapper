import{_ as e}from"./tslib.es6-e8a9b979.js";import{F as r,g as t}from"./Fetch-980165d1.js";class s extends r{constructor(e){super(e)}GetVehicleTypesForMakeId(r){return e(this,void 0,void 0,(function*(){const e="GetVehicleTypesForMakeId",s=t(r);if("number"!==s)return Promise.reject(new Error(`${e}, "makeId" argument is required and must be of type number, got: `+`<${s}> ${r}`));const i=yield this.buildQueryString().catch(r=>Promise.reject(new Error(`${e}, Error building query string: ${r}`))),o=`${this.baseUrl}/${e}/${r}${i}`;return yield this.get(o).then(e=>e).catch(r=>Promise.reject(new Error(`${e}, Fetch.get() error: ${r}`)))}))}}export{s as GetVehicleTypesForMakeId};
//# sourceMappingURL=GetVehicleTypesForMakeId.js.map