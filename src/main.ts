import slugify from "../lib";

async function main() {
  console.log({
    a: slugify("Hello World!#&$"),
  });
}

main().catch((err) => console.error(err));
