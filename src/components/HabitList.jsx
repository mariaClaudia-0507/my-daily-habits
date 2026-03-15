import { useState } from 'react'
import HabitCard from './HabitCard'

  function HabitList({habits, setHabits}) {

  const [novoNome, setNovoNome] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')

  const adicionarHabit = (event) => {
    event.preventDefault()

    if (!novoNome.trim()) {
      alert('Informe um nome para o hábito.')
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

    setHabits([...habits, novoHabit])

    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')
  }

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <label>
          Nome do hábito *
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </label>

        <label>
          Descrição
          <input
            type="text"
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
          />
        </label>

        <label>
          Categoria
          <input
            type="text"
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
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


