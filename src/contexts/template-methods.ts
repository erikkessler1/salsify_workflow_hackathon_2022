namespace Salsify {
  /**
   * Encode a string for use in a URL (e.g., escape special characters).
   */
  // @ts-ignore-error
  export const url_encode: (s: string) => string = globalThis.url_encode;
}
