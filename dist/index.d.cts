declare const SANDBOX_AUTH_SCHEME = "Bearer";
declare const SANDBOX_API_PATHS: {
    readonly resolve: "/v1/sandboxes/resolve";
    readonly runTool: "/v1/tools/run";
    readonly export: "/v1/export";
};
type SandboxApiPath = (typeof SANDBOX_API_PATHS)[keyof typeof SANDBOX_API_PATHS];
declare function normalizeSandboxSecret(secret: string | undefined): string | undefined;
declare function sandboxAuthorizationHeader(secret: string | undefined): string | undefined;

export { SANDBOX_API_PATHS, SANDBOX_AUTH_SCHEME, type SandboxApiPath, normalizeSandboxSecret, sandboxAuthorizationHeader };
