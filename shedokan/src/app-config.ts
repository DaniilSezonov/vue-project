type AppConfigResult = {
  NODE_ENV?: string;
  YANDEX_WEAHTER_API_KEY: string;
};
export const getAppConfigValue = <K extends keyof AppConfigResult, D extends string | undefined>(
  key: K,
  defaultValue?: D | undefined,
): AppConfigResult[K] | D  => {
  return {
    NODE_ENV: import.meta.env.NODE_ENV,
    YANDEX_WEAHTER_API_KEY: import.meta.env.VUE_APP_YANDEX_WEAHTER_API_KEY,
  }?.[key] ?? defaultValue as string;
};