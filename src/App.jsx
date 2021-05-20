import './App.scss';
import Card from './Components/Card/Card';

const FIRST_DATA = {
  title: 'Card title',
  content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur inventore deleniti dolorem',
  buttonText: 'Click me'
}

const SECOND_DATA = {
  title: 'The Best title',
  content: 'I speak from my heart',
  buttonText: 'No click me'
}

export default function App() {
  return (
    <div className='app'>
      <Card {...FIRST_DATA} />
      <Card {...SECOND_DATA}>
        <div className="card__image">Here should be img</div>
      </Card>
    </div>
  );
}