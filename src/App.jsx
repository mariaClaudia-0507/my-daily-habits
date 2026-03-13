import './App.css'; 
import Header    from './components/Header';
import Footer    from './components/Footer';
import BemVindo from './components/BemVindo';
import SecaoHabitos from './components/SecaoHabitos';
import HabitList from './components/HabitList';

function App() {
 const habits = [
   { id: 1, titulo: 'Exercício',   meta: 5, ativo: true,  diasFeitos: 5 },
   { id: 2, titulo: 'Leitura',     meta: 7, ativo: true,  diasFeitos: 3 },
   { id: 3, titulo: 'Meditação',   meta: 7, ativo: false, diasFeitos: 0 },
   { id: 4, titulo: 'Hidratação',  meta: 7, ativo: true,  diasFeitos: 6 },
 ]


 return (
   <div>
     <Header />
     <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length}
      />
     <SecaoHabitos titulo="Meus Hábitos">
       <HabitList habits={habits} />
     </SecaoHabitos>
     <Footer />
   </div>
 )
}

export default App




/*function App() {
  return (
    <div>
      <Cabecalho
        titulo="My Daily Habits"
        descricao="Construindo uma rotina melhor, um hábito por vez."
      />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={5} />
      <Footer />
    </div>
  );
}*/
