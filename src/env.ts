/// <reference path="./env.d.ts" />

const env: ImportMetaEnv = {
  BASE_URL: import.meta.env.BASE_URL,
  DEV: import.meta.env.DEV,
  IDE_URL: import.meta.env.VITE_IDE_URL,
  MODE: import.meta.env.MODE,
  PROD: import.meta.env.PROD,
  SSR: import.meta.env.SSR,
  VETUR_URL: import.meta.env.VITE_VETUR_URL,
  VITE_URL: import.meta.env.VITE_VITE_URL,
  VOLAR_URL: import.meta.env.VITE_VOLAR_URL,
  VUE_URL: import.meta.env.VITE_VUE_URL,
}

export default env
