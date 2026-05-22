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
export {
  SANDBOX_API_PATHS,
  SANDBOX_AUTH_SCHEME,
  normalizeSandboxSecret,
  sandboxAuthorizationHeader
};
//# sourceMappingURL=index.js.map