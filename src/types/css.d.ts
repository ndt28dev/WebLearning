declare module "*.css";
declare module "*.scss";
declare module "*.module.css" {
  const classes: { readonly [k: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { readonly [k: string]: string };
  export default classes;
}
declare module "@mantine/carousel/styles.css";
