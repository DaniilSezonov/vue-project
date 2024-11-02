<template>
    <div class="weather" @click=onClick>
        <div class="weather-widget">
            <div class="weather-current-time">
                {{time}}
            </div>
            <div class="weather-current-date">
                {{date}}
            </div>
            <div class="weather-temp">
                <div class="weather-temp-value">
                    <div class="weather-temp-value-number">
                        {{temp > 0 ? `+${temp}°` : ""}}
                        {{temp < 0 ? `-${temp}°` : ""}}
                        {{temp === 0 ? `${temp}°` : ""}}
                    </div>
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
  const date = moment(props?.dateTime, moment.ISO_8601).format("dddd DD MMMM, Y")
  const time = moment().format("hh:mm:ss")
  const bgColor = dayTime === "d" ? "#b6ffb6" : "#2a6b6d";
  const fontColor = dayTime === "d" ? "#2a6b6d" : "#b6ffb6";
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
        min-width: 100px;
        height: 100%;
        grid-row-start: 1;
        grid-column-start: 1;
        z-index: 1;
    }
    .weather-widget {
        box-shadow: 14px 12px 0px 0px #222e61;
        display: grid;
        font-family: "GeistMono Regular", normal;
        padding: 20px;
        background-color: v-bind('bgColor');
        color: v-bind('fontColor');
        grid-template-rows: min-content auto auto;
        grid-template-columns: min-content auto;
        @media (min-width: $md) {
            grid-template-rows: min-content auto;
            grid-template-columns: auto;
        }
    }
    .weather-temp {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        grid-column-start: 1;
        justify-content: end;
        width: min-content;
        grid-column-end: 3;
        @media (min-width: $sm) {
            font-size: 1.25em;
            gap: 6px;
        }
        @media (min-width: $md) {
            font-size: 1.5em;
            justify-self: center;
        }
        @media (min-width: $lg) {
            font-size: 2.25em;
            gap: 8px;
            grid-column-start: 2;
        }
        @media (min-width: $xl) {
            font-size: 3.25em;
            gap: 10px;
        }
    }
    .weather-temp-value {
        display: flex;
        grid-row-start: 1;
        grid-column-start: 1;
        z-index: 10;
    }
    .weather-temp-value-number {
        font-weight: 700;
        width: 100%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        @media (min-width: $md) {
            font-size: 1.25em;
        }
        @media (min-width: $lg) {
            font-size: 2em;
        }
        @media (min-width: $xl) {
            font-size: 2em;
        }
    }
    .weather-current-date {
        // text-align: center;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 3;
        max-width: 60%;
        @media (min-width: $md) {
            font-size: 1.25em;
        }
        @media (min-width: $lg) {
            font-size: 2.25em;
            grid-row-start: 1;
            grid-row-end: 3;
        }
        @media (min-width: $xl) {
            font-size: 3.25em;
            grid-row-start: 1;
            grid-row-end: 3;
        }
    }
    .weather-current-time {
        grid-row-start: 1;
        grid-column-start: 2;
        justify-self: self-end;
        font-size: 0.75em;
        @media (min-width: $lg) {
            font-size: 1em;
        }
    }
</style>