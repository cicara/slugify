export type SlugifyOptions = {
    remove?: RegExp;
    separator?: string;
};
declare function slugify(str: string, options?: SlugifyOptions): string;
export { slugify };
export default slugify;
