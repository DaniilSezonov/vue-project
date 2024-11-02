import type { FetchWeatherResult } from '@/api/gismeteo.types';
import { defineStore } from 'pinia';

export interface AppState {
  weather?: FetchWeatherResult | undefined;
}

const useAppStore = defineStore("storage", {
  state: (): AppState => ({
    weather: undefined,
  }),
  getters: {
    getWeather: (state) => state.weather,
  },
  actions: {
    setWeather(weather: FetchWeatherResult) {
      this.weather = weather;
    }
  },
});

export default useAppStore;
