/// <reference path="task-field.ts" />
/// <reference path="template-methods.ts" />

namespace Salsify {
  type Field<T> = T | (() => T);

  type WebRequest = {
    operation: "web_request";
    params: {
      url: string;
      method: "get" | "post" | "put" | "delete";
      payload?: any;
    };
  };

  export type StatusCallback = WebRequest;

  type ViewConfig = {
    ui: ExclaimComponent;
    full_screen?: boolean;
  };

  type ExclaimComponent = ExclaimVBox | ExclaimText | Record<string, unknown>;

  type ExclaimVBox = {
    $vbox: Array<ExclaimComponent>;
  };

  type ExclaimText = {
    $text: string | { $bind: string };
  };

  export type Task = {
    name: Field<string>;
    status_callbacks?: {
      before_waiting?: Field<Array<StatusCallback>>;
      before_completed?: Field<Array<StatusCallback>>;
    };
    view_config?: {
      waiting?: Field<ViewConfig>;
      completed?: Field<ViewConfig>;
      failed?: Field<ViewConfig>;
    };
  };
}
