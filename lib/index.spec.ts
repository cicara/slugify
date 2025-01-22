import { assert, describe, it } from "vitest";
import slugify from ".";

const samples = [
  ["用户自定义数据源图表保存", "yong-hu-zi-ding-yi-shu-ju-yuan-tu-biao-bao-cun"],
  ["Hello World!", "hello-world"],
  ["中文和English混合测试", "zhong-wen-he-english-hun-he-ce-shi"],
  ["  前后空格  ", "qian-hou-kong-ge"],
  ["特殊字符@#$%^&*()测试", "te-shu-zi-fu-dollarpercentand-ce-shi"],
  ["重复的---分隔符", "zhong-fu-de-fen-ge-fu"],
  ["CamelCase测试", "camelcase-ce-shi"],
  ["多个    空格", "duo-ge-kong-ge"],
  ["你好，世界！", "ni-hao-shi-jie"],
  ["123数字开头", "123-shu-zi-kai-tou"],
  ["ONLY UPPER CASE", "only-upper-case"],
  ["支持 pinyin 的slugify", "zhi-chi-pinyin-de-slugify"],
  ["emoji 😊 测试", "emoji-ce-shi"],
  ["特殊·符号·保留", "te-shu-fu-hao-bao-liu"],
  ["带有_locale的测试", "dai-you-locale-de-ce-shi"],
];

describe("test samples", () => {
  for (const sample of samples) {
    const [input, output] = sample;
    it(`sample "${input}"`, () => {
      assert.equal(slugify(input, { separator: "-" }), output);
    });
  }
});
