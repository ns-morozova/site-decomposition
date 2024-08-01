import './App.css';
import MainNews from './components/MainNews';
import CurrentDateTime from './components/CurrentDateTime';
import Recommendation from './components/Recommendation';
import NewsList from './components/NewsList';
import CurrencyRates from './components/CurrencyRates';
import SearchComponent from './components/SearchComponent';
import Weather from './components/Weather';
import RubricBlock from './components/RubricBlock';
import VisitedList from './components/VisitedList';
import ShowList from './components/ShowList';
import BroadcastList from './components/BroadcastList';
import Banner from './img/banner.jpg';
import { FaNewspaper, FaInfoCircle, FaFan } from 'react-icons/fa';
import { TiWeatherCloudy } from "react-icons/ti";
import { TbBroadcast } from "react-icons/tb";
import './App.css';

const newsItems = [
  {
    icon: FaNewspaper,
    text: 'Путин упростил получение автомобильных номеров',
    link: '#'
  },
  {
    icon: FaInfoCircle,
    text: 'Суд закрыл дело Демпартии США против России',
    link: '#'
  },
  {
    icon: FaFan,
    text: 'Россияне теперь могут открывать соцвклады на сумму до 50 тыс. рублей',
    link: '#'
  },
];

const mainNewsItems = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];

const recTitle = 'Работа над ошибками';
const recCaption = 'Смотрите на Яндексе и запоминайте';
const recImage = 'https://phpua.net/wp-content/uploads/2021/01/xarakteristiki_shkolnyx_dosok-640x360.jpg';

const currencyRates = [
  {
    name: 'USD MOEX',
    rate: '63,52',
    change: '+0,09'
  },
  {
    name: 'EUR MOEX',
    rate: '73,84',
    change: '+0,15'
  },
  {
    name: 'GBP MOEX',
    rate: '83,45',
    change: '-0,02'
  },
];

const weatherData = {
  title: "Погода",
  currentTemperature: 22,
  morningTemperature: 18,
  eveningTemperature: 16,
};

const visitedItems = [
  {
    title: 'Недвижимость',
    text: 'о сталинках'
  },
  {
    title: 'Маркет',
    text: 'люстры и светильники'
  },
  {
    title: 'Авто.ру',
    text: 'привод 4х4 до 500 000'
  },
];

const showItems = [
  { time: '02:00', show: 'ТНТ.Best', canal: 'ТНТ International' },
  { time: '02:15', show: 'Джинглики', canal: 'Карусель INT' },
  { time: '02:25', show: 'Наедине со всеми', canal: 'Первый' },
];

const broadcastItems = [
  { broadcast: 'Управление как исскуство', canal: 'Успех' },
  { broadcast: 'Ночь. Мир в это время', canal: 'earthTV' },
  { broadcast: 'Андрей Возн...', canal: 'Совершенно секретно' },
];

function App() {
  return (
    <div className='mainContent'>
      <div className="upperBlock">
        <div className='newsHead'>
          <MainNews items={mainNewsItems} />
          <CurrentDateTime />
        </div>

        <div className='newsBlock'>
          <div className='newsBlockLeft'>
            <NewsList news={newsItems} />
            <CurrencyRates rates={currencyRates} />
          </div>
          <Recommendation title={recTitle} caption={recCaption} link='/' image={recImage} />
        </div>

      </div>
      
      <div>
        <SearchComponent />
      </div>

      <img src={Banner} className='banner' />

      <section className='sectionRubrics'>

        <div className='sectionColumn'>
          <Weather
            title={weatherData.title}
            currentTemperature={weatherData.currentTemperature}
            weatherIcon={TiWeatherCloudy}
            morningTemperature={weatherData.morningTemperature}
            eveningTemperature={weatherData.eveningTemperature}
          />

          <RubricBlock title='Посещаемое'>
            <VisitedList items={visitedItems} />
          </RubricBlock>
        </div>

        <div className='sectionColumn'>
          <RubricBlock title='Карта Германии'>
            <p style={{ margin: '0' }}>Расписание</p>
          </RubricBlock>

          <RubricBlock title='Телепрограмма' Icon={TbBroadcast}>
            <ShowList items={showItems} />
          </RubricBlock>
        </div>

        <RubricBlock title='Эфир'>
          <BroadcastList items={broadcastItems} />
        </RubricBlock>

      </section>
      
    </div>
  )
}

export default App
