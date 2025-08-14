
import {
  kipuka,
  withDefaults,
  without,
  withCliWrapEntrypoint,
  requireExtensions,
  withHelp,
} from "@lavamoat/kipuka";

export default [
  ...without(kipuka, ["withEntrypoint", "withHelp"]),
  withDefaults({
    name: "cli",
  }),
  withHelp('k-help'),
  ...requireExtensions("cli"),
  withCliWrapEntrypoint()
];
