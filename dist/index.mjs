import { setProjectAnnotations as n, composeStory as r, composeStories as i } from "@storybook/preview-api";
import { deprecate as c } from "@storybook/client-logger";
import * as a from "@storybook/vue3/dist/entry-preview.mjs";
function m(o) {
  n(o);
}
function d(o) {
  c("setGlobalConfig is deprecated. Use setProjectAnnotations instead."), m(o);
}
function p(o, t, e, s) {
  return r(
    o,
    t,
    e,
    a,
    s
  );
}
function u(o, t) {
  return i(o, t, p);
}
export {
  u as composeStories,
  p as composeStory,
  d as setGlobalConfig,
  m as setProjectAnnotations
};
