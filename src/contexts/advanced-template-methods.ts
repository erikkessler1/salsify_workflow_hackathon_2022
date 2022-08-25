namespace Salsify {
  /**
   * Make an arbitrary web request. Headers default to "{ 'Content-Type': 'application/json' }".
   */

  export const web_request: (
    path: string,
    method: "get" | "post" | "patch" | "put" | "delete" | "head",
    payload?: any,
    headers?: Record<string, unknown>
    // @ts-ignore-error
  ) => any = globalThis.web_request;
}
