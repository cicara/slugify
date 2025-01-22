import pinyin from "@cicara/tiny-pinyin";
import _slugify from "slugify";

_slugify.extend({ "-": "-" });

export type SlugifyOptions = {
  remove?: RegExp;
  separator?: string;
};

function slugify(str: string, options?: SlugifyOptions): string {
  const separator = typeof options === "string" ? options : options?.separator;
  const pinyinStr = pinyin.convertToPinyin(str.replace(/ /g, " "), " ");
  return _slugify(pinyinStr, {
    ...options,
    trim: true,
    lower: true,
    strict: true,
    replacement: separator,
  });
}

export { slugify };
export default slugify;
