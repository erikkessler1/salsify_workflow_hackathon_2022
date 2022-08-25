/// <reference path="../../types/salsify.d.ts" />
/// <reference path="template-methods.ts" />

namespace Salsify {
  type Entity = {
    id: SalsifyUuid;
    external_id: ExternalId;
    name: string;
  };

  /**
   * The entity the current instance of the workflow is acting on.
   */
  // @ts-ignore-error
  export const entity: Entity = globalThis.entity;
}
