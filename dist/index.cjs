"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SANDBOX_API_PATHS: () => SANDBOX_API_PATHS,
  SANDBOX_AUTH_SCHEME: () => SANDBOX_AUTH_SCHEME,
  normalizeSandboxSecret: () => normalizeSandboxSecret,
  sandboxAuthorizationHeader: () => sandboxAuthorizationHeader
});
module.exports = __toCommonJS(index_exports);

// src/sandbox-protocol.ts
var SANDBOX_AUTH_SCHEME = "Bearer";
var SANDBOX_API_PATHS = {
  resolve: "/v1/sandboxes/resolve",
  runTool: "/v1/tools/run",
  export: "/v1/export"
};
function normalizeSandboxSecret(secret) {
  const normalized = secret?.trim();
  return normalized || void 0;
}
function sandboxAuthorizationHeader(secret) {
  const normalized = normalizeSandboxSecret(secret);
  return normalized ? `${SANDBOX_AUTH_SCHEME} ${normalized}` : void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SANDBOX_API_PATHS,
  SANDBOX_AUTH_SCHEME,
  normalizeSandboxSecret,
  sandboxAuthorizationHeader
});
//# sourceMappingURL=index.cjs.map