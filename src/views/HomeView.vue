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
    import { onMounted, onServerPrefetch } from 'vue';
    import DefaultLayout from "@/components/layouts/default.vue";
    import WeatherWidget from "@/components/widgets/weather.vue";
    import { fetchWeather } from "@/api/gismeteo";
    import useAppStore from '@/store/default';
    import { storeToRefs } from 'pinia';
    import { getUserGeolocation } from '@/geo';
import { useRoute, useRouter } from 'vue-router';
    const store = useAppStore()
    const router = useRouter();
    const route = useRoute();
    const getWeather = async (lat: number, lon: number) => {
        return await fetchWeather(lat, lon)
    }
    onServerPrefetch(async () => {
        const lat = route.query.lat;
        const lon = route.query.lon;
        if (!lat || !lon) return;
        const weather = await getWeather(Number(lat), Number(lon));
        if (weather?.data) {
            store.setWeather(weather?.data);
        }
    });
    onMounted(async () => {
        try {
            const geo = await getUserGeolocation();
            router.push({path: route.path, query: {lat: geo.lat, lon: geo.lon}})
        } catch(err: any) {
            console.error(err);
        }

    })
    const storeRef = storeToRefs(store);
    const weather = storeRef.getWeather;
    const handleWidgetClick = () => {
        window.location.reload();
    }
</script>

