import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': 'oh',
  'birthday': '820521',
  'gender': 'mail',
  'job': 'student'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': 'nao',
    'birthday': '860918',
    'gender': 'femail',
    'job': 'nurse'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': 'lee',
    'birthday': '860101',
    'gender': 'mail',
    'job': 'student'
  }
];

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
