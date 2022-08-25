var Salsify;
(function (Salsify) {
    /**
     * Encode a string for use in a URL (e.g., escape special characters).
     */
    Salsify.url_encode = globalThis.url_encode;
})(Salsify || (Salsify = {}));
/// <reference path="../../types/salsify.d.ts" />
/// <reference path="template-methods.ts" />
var Salsify;
(function (Salsify) {
    /**
     * The entity the current instance of the workflow is acting on.
     */
    Salsify.entity = globalThis.entity;
})(Salsify || (Salsify = {}));
/// <reference path="task-field.ts" />
/// <reference path="template-methods.ts" />
function roll_a_die(sides) {
    if (sides === void 0) { sides = 6; }
    return Math.floor(Math.random() * sides) + 1;
}
/// <reference path="contexts/remote-task-bot.ts" />
/// <reference path="helpers.ts" />
function build_task() {
    return {
        name: task_name,
        view_config: {
            completed: completed_view
        },
        status_callbacks: {
            before_completed: before_completed
        }
    };
}
function task_name() {
    return "My Cool Task";
}
function before_completed() {
    return [
        {
            operation: "web_request",
            params: {
                url: "https://3ffc-73-126-96-160.ngrok.io?ha=".concat(roll_a_die()),
                method: "post",
                payload: {
                    roll_1: roll_a_die(),
                    roll_2: roll_a_die(10)
                }
            }
        },
    ];
}
function completed_view() {
    return {
        ui: {
            $vbox: [
                {
                    $text: "Hello from ".concat(Salsify.entity.external_id)
                },
            ]
        }
    };
}
