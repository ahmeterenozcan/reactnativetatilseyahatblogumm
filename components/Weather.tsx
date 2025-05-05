import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Weather = ({ city }: { city: string }) => {
  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'cf090882e2b70c1a104f326ed7252cd4'; // 🔑 OpenWeatherMap API key buraya
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${apiKey}`
        );
        const temp = res.data.main.temp;
        const desc = res.data.weather[0].description;
        setWeather(`${Math.round(temp)}°C, ${desc}`);
      } catch (error) {
        setWeather('Hava durumu alınamadı');
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <View style={styles.box}>
      <Text style={styles.city}>📍 {city}</Text>
      <Text style={styles.info}>{weather}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  city: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1e293b',
  },
  info: {
    marginTop: 5,
    color: '#475569',
    fontSize: 15,
  },
});

export default Weather;
