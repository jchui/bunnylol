// @flow strict

import type {
  CommandNames,
  CommandDataTableType,
  ColumnDataTableType,
} from "./commands.js";

import { COMMANDS } from "./commands.js";

export const viewHelpPage: () => void = function () {
  const data: Array<CommandDataTableType> = Object.keys(COMMANDS).map(
    (command: CommandNames) => {
      const cmdData = COMMANDS[command];
      return {
        name: cmdData.name,
        url: cmdData.url,
        command: command,
        category: cmdData.category,
      };
    }
  );
  const columns: Array<ColumnDataTableType> = [
    { data: "command", title: "Command" },
    { data: "name", title: "Name" },
    {
      data: "url",
      title: "URL",
      render: function (data, type, row, meta) {
        data = '<a href="' + data + '">' + data + "</a>";
        return data;
      },
    },
    { data: "category", title: "Category" },
  ];
  // $FlowFixMe - jQuery import
  $("#help-table").DataTable({
    data: data,
    columns: columns,
    order: [[3, "asc"]],
    paging: false,
  });
};
