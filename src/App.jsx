import './App.css'; 
import Header    from './components/Header';
import Footer    from './components/Footer';
import BemVindo from './components/BemVindo';
import SecaoHabitos from './components/SecaoHabitos';
import HabitList from './components/HabitList';
import { useState, useEffect} from 'react'

function App() {

 const [habits, setHabits] = useState(() => {
  const stored = localStorage.getItem('my-daily-habits')

  if (!stored) {
    return [
      { id: 1, nome: 'Exercício', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
      { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
      { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
      { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água', meta: 7, ativo: true, diasFeitos: 6 }
    ]
  }

  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
})

useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits))
  }, [habits])

 return (
   <div>
     <Header />
     <BemVindo nomeUsuario="turma iteam" 
     totalHabitos={habits.length}
      />
     <SecaoHabitos titulo="Meus Hábitos">
       <HabitList habits={habits} setHabits={setHabits} />
     </SecaoHabitos>
     <Footer />
   </div>
 )
}

export default App
