import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiSnow,
  WiRainMix,
  WiRain,
  WiThunderstorm,
} from 'react-icons/wi';
// import { MdWarning } from 'react-icons/md';
// import { FaBoltLightning } from 'react-icons/fa6';

const iconStyle = '';

export const weatherCodeDescriptions = {
  0: {
    description: 'Clear sky',
    emoji: '☀️',
    icon: <WiDaySunny className={`${iconStyle} text-yellow-400`} />,
  },
  1: {
    description: 'Mainly clear',
    emoji: '🌤️',
    icon: <WiDaySunnyOvercast className={`${iconStyle} text-yellow-300`} />,
  },
  2: {
    description: 'Partly cloudy',
    emoji: '⛅',
    icon: <WiDayCloudy className={`${iconStyle} text-gray-400`} />,
  },
  3: {
    description: 'Overcast',
    emoji: '☁️',
    icon: <WiCloudy className={`${iconStyle} text-gray-500`} />,
  },
  45: {
    description: 'Fog',
    emoji: '🌫️',
    icon: <WiFog className={`${iconStyle} text-gray-300`} />,
  },
  48: {
    description: 'Depositing rime fog',
    emoji: '❄️🌫️',
    icon: <WiFog className={`${iconStyle} text-gray-200`} />,
  },
  51: {
    description: 'Light drizzle',
    emoji: '🌦️',
    icon: <WiRainMix className={`${iconStyle} text-blue-200`} />,
  },
  53: {
    description: 'Moderate drizzle',
    emoji: '🌧️',
    icon: <WiRainMix className={`${iconStyle} text-blue-300`} />,
  },
  55: {
    description: 'Dense drizzle',
    emoji: '🌧️',
    icon: <WiRainMix className={`${iconStyle} text-blue-400`} />,
  },
  61: {
    description: 'Light rain',
    emoji: '🌦️',
    icon: <WiRain className={`${iconStyle} text-blue-300`} />,
  },
  63: {
    description: 'Moderate rain',
    emoji: '🌧️',
    icon: <WiRain className={`${iconStyle} text-blue-500`} />,
  },
  65: {
    description: 'Heavy rain',
    emoji: '🌧️',
    icon: <WiRain className={`${iconStyle} text-blue-700`} />,
  },
  71: {
    description: 'Light snowfall',
    emoji: '❄️',
    icon: <WiSnow className={`${iconStyle} text-blue-100`} />,
  },
  73: {
    description: 'Moderate snowfall',
    emoji: '❄️',
    icon: <WiSnow className={`${iconStyle} text-blue-200`} />,
  },
  75: {
    description: 'Heavy snowfall',
    emoji: '❄️',
    icon: <WiSnow className={`${iconStyle} text-blue-300`} />,
  },
  80: {
    description: 'Light showers',
    emoji: '🌦️',
    icon: <WiRainMix className={`${iconStyle} text-blue-400`} />,
  },
  81: {
    description: 'Moderate showers',
    emoji: '🌧️',
    icon: <WiRain className={`${iconStyle} text-blue-600`} />,
  },
  82: {
    description: 'Violent showers',
    emoji: '🌧️',
    icon: <WiRain className={`${iconStyle} text-blue-800`} />,
  },
  95: {
    description: 'Thunderstorm',
    emoji: '⛈️',
    icon: <WiThunderstorm className={`${iconStyle} text-purple-500`} />,
  },
  96: {
    description: 'Thunderstorm with hail',
    emoji: '⛈️⚠️',
    icon: <WiThunderstorm className={`${iconStyle} text-purple-600`} />,
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    emoji: '⛈️⚠️',
    icon: <WiThunderstorm className={`${iconStyle} text-purple-700`} />,
  },
};
