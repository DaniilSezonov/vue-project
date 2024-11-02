<template>
    <div class="weather" @click=onClick>
        <div class="weather-widget">
            <div class="weather-current-datetime">
                {{dateTime}}
            </div>
            <div class="weather-temp">
                <div class="weather-temp-value">
                    <span class="weather-temp-value-number">
                        {{temp > 0 ? `+${temp}°` : ""}}
                        {{temp < 0 ? `-${temp}°` : ""}}
                        {{temp === 0 ? `${temp}°` : ""}}
                    </span>
                </div>
                <img :src=weatherIcon class="weather-icon"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import moment from "moment";
  const props = defineProps<{
    temp?: number,
    dateTime?: string,
    season?: string,
    dayTime?: "d" | "n" | undefined,
    cloudness?: number,
    precType?: number,
    precStrength?: number,
    icon?: string,
    onClick?: () => void,
  }>();
  const { icon, temp, dayTime, onClick } = props; 
  const weatherIcon = !!icon ? `https://yastatic.net/weather/i/icons/funky/dark/${icon}.svg` : "https://img.icons8.com/?size=48&id=oK9NQD5C4aIb&format=png";
  const dateTime = moment(props?.dateTime, moment.ISO_8601).format("dddd DD MMMM, Y (hh:mm:ss)")
  const bgColor = dayTime === "d" ? "#dedede" : "#383838";
  const fontColor = dayTime === "d" ? "#383838" : "#dedede";
</script>

<style lang="scss">
    .weather {
        width: 100%;
        display: flex;
        justify-content: center;
        user-select: none;
        cursor: pointer;
    }
    .weather-icon {
        height: 100%;
    }
    .weather-widget {
        display: grid;
        border: 1px solid #f5f5f5;
        border-radius: 20px;
        padding: 20px;
        background-color: v-bind('bgColor');
        color: v-bind('fontColor');
    }
    .weather-temp {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: center;
        @media (min-width: $sm) {
            font-size: 1.25em;
            gap: 6px;
        }
        @media (min-width: $lg) {
            font-size: 2.25em;
            gap: 8px;
        }
        @media (min-width: $xl) {
            font-size: 3.25em;
            gap: 10px;
        }
    }
    .weather-value {
        display: flex;
    }
    .weather-temp-value-number {
        font-weight: 700;
    }
    .weather-current-datetime {
        text-align: center;
        @media (min-width: $sm) {
            font-size: 1.25em;
        }
        @media (min-width: $lg) {
            font-size: 2.25em;
        }
        @media (min-width: $xl) {
            font-size: 3.25em;
        }
    }
</style>