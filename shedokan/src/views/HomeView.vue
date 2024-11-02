<template>
    <DefaultLayout>
        <WeatherWidget
            :temp=weather?.temp
            :season=weather?.season
            :icon=weather?.icon
            :prec-strength=weather?.precStrength
            :prec-type=weather?.precType
            :date-time=weather?.dateTime
            :cloudness=weather?.cloudness
            :day-time=weather?.daytime
            :onClick=handleWidgetClick
        />
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { onServerPrefetch } from 'vue';
    import DefaultLayout from "@/components/layouts/default.vue";
    import WeatherWidget from "@/components/widgets/weather.vue";
    import { fetchWeather } from "@/api/gismeteo";
    import useAppStore from '@/store/default';
    import { storeToRefs } from 'pinia';
    const store = useAppStore()

    const getWeather = async (lat: number, lon: number) => {
        return await fetchWeather(lat, lon)
    }
    onServerPrefetch(async () => {
        const weather = await getWeather(52.00,36.00);
        if (weather?.data) {
            store.setWeather(weather?.data);
        }
    });
    const storeRef = storeToRefs(store);
    const weather = storeRef.getWeather;
    const handleWidgetClick = () => {
        window.location.reload();
    }
</script>

