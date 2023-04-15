/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAPTCHA_VALIDATION_ENDPOINT: string
  readonly VITE_SITEKEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}