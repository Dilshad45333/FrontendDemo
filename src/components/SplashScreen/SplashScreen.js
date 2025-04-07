import React,{useEffect,useRef,useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: 'one',
    title: 'Bem vindo à sua sala de aula digital',
    text: 'Publique aulas, acompanhe e converse com seus alunos em um só lugar',
    image: require('../../assets/screen1.png'),
  },
  {
    key: 'two',
    title: 'Compartilhe suas experiências',
    text: 'Conecte-se com seus alunos e inspire outros professores',
    image: require('../../assets/screen2.png'),
  },
  {
    key: 'three',
    title: 'Tire dúvidas em tempo real',
    text: 'Interaja com seus alunos e acompanhe suas evoluções',
    image: require('../../assets/screen3.png'),
  },
];

const SplashScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < slides.length - 1) {
        const nextIndex = activeIndex + 1;
        sliderRef.current?.goToSlide(nextIndex);
        setActiveIndex(nextIndex);
      } else {
        clearInterval(interval); // Stop when reaching last slide
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Icon name="arrow-forward" color="white" size={20} />
    </View>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.replace('Login')}>
      <Icon name="checkmark" color="white" size={20} />
    </TouchableOpacity>
  );

  const renderSkipButton = () => (
    <TouchableOpacity onPress={() => navigation.replace('Login')}>
      <Text style={styles.skipText}>Pular</Text>
    </TouchableOpacity>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={renderItem}
      onDone={() => navigation.replace('Login')}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      showSkipButton
      dotStyle={{ backgroundColor: '#ddd' }}
      activeDotStyle={{ backgroundColor: '#5E48E8' }}
      onSlideChange={handleSlideChange}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF4E0',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E2E2E',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#5E48E8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    marginLeft: 20,
    color: '#5E48E8',
    fontWeight: '600',
  },
});
