import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Card from './components/Cards/index';
import data from './data.js';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <section style={{display: 'flex', flexWrap: 'nowrap', gap: '20px', overflowX: 'auto'}}>
        {data.map(item => 
          <Card key={item.id} info={item} />)
        }
      </section>
    </>
  )
}

