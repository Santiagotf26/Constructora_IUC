import { useEffect, useRef, useState } from 'react'
import './Stats.css'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
  icon: string
}

const statsData: StatItem[] = [
  { value: 20, suffix: '+', label: 'Años de Experiencia', description: 'Trayectoria probada en el sector', icon: '🏛️' },
  { value: 200, suffix: '+', label: 'Proyectos Completados', description: 'A nivel nacional', icon: '🏗️' },
  { value: 500, suffix: '+', label: 'Clientes Satisfechos', description: 'Relaciones duraderas', icon: '🤝' },
  { value: 98, suffix: '%', label: 'Tasa de Satisfacción', description: 'Clientes que nos recomiendan', icon: '⭐' },
]

const useCounter = (target: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return count
}

const StatCard = ({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) => {
  const count = useCounter(stat.value, 2000, isVisible)

  return (
    <div className="stat-card">
      <div className="stat-card__icon">{stat.icon}</div>
      <div className="stat-card__value">
        <span className="stat-card__number">{count}</span>
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__desc">{stat.description}</div>
    </div>
  )
}

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        <div className="stats__top-line"></div>
        <div className="container stats__grid">
          {statsData.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
        <div className="stats__bottom-line"></div>
      </div>
    </section>
  )
}

export default Stats
