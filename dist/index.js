import u from "@cicara/tiny-pinyin";
import e from "slugify";
e.extend({ "-": "-" });
function i(t, r) {
  const a = typeof r == "string" ? r : r == null ? void 0 : r.separator, n = u.convertToPinyin(t.replace(/ /g, " "), " ");
  return e(n, {
    ...r,
    trim: !0,
    lower: !0,
    strict: !0,
    replacement: a
  });
}
export {
  i as default,
  i as slugify
};
