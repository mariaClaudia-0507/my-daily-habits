import { useState, useRef  } from 'react'
import HabitCard from './HabitCard'

  function HabitList({habits, setHabits}) {

  const [novoNome, setNovoNome] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')

 const [erroNome, setErroNome] = useState('')

 const nomeInputRef = useRef(null)

 const handleChange = (e) => {
  const { name, value } = e.target
 

  if (name === 'novoNome') {
    setNovoNome(value)
    // Valida comprimento mínimo em tempo real
    if (value.length > 0 && value.length < 3) {
      setErroNome('O nome deve ter pelo menos 3 caracteres.')
    } else {
      setErroNome('')
    }
  }
  if (name === 'novaDescricao') setNovaDescricao(value)
  if (name === 'novaCategoria') setNovaCategoria(value)
}

const adicionarHabit = (event) => {
  event.preventDefault()

  if (!novoNome.trim()) {
    alert('Informe um nome para o hábito.')
    return
  }

  // Bloqueia se há erro de validação
  if (erroNome) {
    nomeInputRef.current?.focus()
    return
  }



    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7,
      ativo: true,
      diasFeitos: 0,
      categoria: novaCategoria || 'Geral',
    }
    
    setHabits(prev => [...prev, novoHabit])
   

    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')

    nomeInputRef.current?.focus()

  }

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
      <div>
        <label>
          Nome do hábito *
          <input
            type="text"
            name="novoNome"
            value={novoNome}
            onChange={handleChange}
            ref={nomeInputRef}
          />
        </label>
         {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
      </div>
        <label>
          Descrição
          <input
            type="text"
            name="novaDescricao"
            value={novaDescricao}
            onChange={handleChange}
          />
        </label>

        <label>
          Categoria
          <input
            type="text"
            name="novaCategoria"
            value={novaCategoria}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  )
}

export default HabitList


