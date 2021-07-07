import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Api_Key = "3befc3fb84c3cafe1bec9d2d1c49e6bd";

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: Api_Key,
    lat: '45.8131',
    lon: '15.9773',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#221f21',
    gradientMid:  '#221f21',
    gradientEnd:  '#221f21',
    locationFontColor:  '#eee5e5',
    todayTempFontColor:  '#eee5e5',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#eee5e5',
    forecastBackgroundColor:  '#221f21',
    forecastSeparatorColor:  '#B5DEF4',
    forecastDateColor:  '#eee5e5',
    forecastDescColor:  '#eee5e5',
    forecastRangeColor:  '#eee5e5',
    forecastIconColor:  '#4BC4F7',
  };
  

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Zagreb"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast={true}
      theme={customStyles}
    />
  );
};

export default Weather;