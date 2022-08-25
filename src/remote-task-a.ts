/// <reference path="contexts/remote-task-bot.ts" />
/// <reference path="helpers.ts" />

function build_task(): Salsify.Task {
  return {
    name: task_name,
    view_config: {
      completed: completed_view,
    },
    status_callbacks: {
      before_completed,
    },
  };
}

function task_name(): string {
  return "My Cool Task";
}

function before_completed(): Array<Salsify.StatusCallback> {
  return [
    {
      operation: "web_request",
      params: {
        url: `https://3ffc-73-126-96-160.ngrok.io?ha=${roll_a_die()}`,
        method: "post",
        payload: {
          roll_1: roll_a_die(),
          roll_2: roll_a_die(10),
        },
      },
    },
  ];
}

function completed_view() {
  return {
    ui: {
      $vbox: [
        {
          $text: `Hello from ${Salsify.entity.external_id}`,
        },
      ],
    },
  };
}
