/// <reference types="astro/client" />

declare global {
  interface PageMetadata {
    pageIdentifier?: string;
    [key: string]: unknown;
  }
}

interface ImportMetaEnv {
  readonly BASE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};

const basename = import.meta.env.BASE_NAME ?? import.meta.env.BASE_URL;
