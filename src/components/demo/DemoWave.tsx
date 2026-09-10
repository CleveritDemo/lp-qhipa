'use client'

import type { ReactElement } from 'react'
import './demoWave.css'

export interface DemoWaveRow {
  id: string
  specialist: string
  role: string
  text: string
  state: 'running' | 'done'
}

export interface DemoWaveProps {
  prompt: string
  rows: DemoWaveRow[]
  busy: boolean
}

interface SpecialistGroup {
  specialist: string
  role: string
  rows: DemoWaveRow[]
}

function groupRowsBySpecialist(rows: DemoWaveRow[]): SpecialistGroup[] {
  const groups = new Map<string, SpecialistGroup>()
  for (const row of rows) {
    const existing = groups.get(row.specialist)
    if (existing) {
      existing.rows.push(row)
    } else {
      groups.set(row.specialist, {
        specialist: row.specialist,
        role: row.role,
        rows: [row],
      })
    }
  }
  return Array.from(groups.values())
}

export function DemoWave(props: DemoWaveProps): ReactElement {
  const { prompt, rows, busy } = props
  const done = rows.filter((row) => row.state === 'done').length
  const groups = groupRowsBySpecialist(rows)
  const progressPct = rows.length ? Math.round((done / rows.length) * 100) : 0

  return (
    <section className="demo-wave">
      {prompt ? <p className="demo-wave__prompt">{prompt}</p> : null}
      {busy ? (
        <div className="demo-wave__mass" aria-hidden="true">
          <span className="demo-wave__mass-core" />
        </div>
      ) : null}
      <header className="demo-wave__head">
        <span className="demo-wave__title">Esperando {done}/{rows.length}</span>
        <div className="demo-wave__bar">
          <span
            className="demo-wave__bar-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </header>
      <p className="demo-wave__sub">Especialistas trabajando en worktrees aislados</p>
      {groups.map((group) => {
        const groupDone = group.rows.filter((row) => row.state === 'done').length
        const groupTotal = group.rows.length

        return (
          <div key={group.specialist} className="demo-wave__group">
            <div className="demo-wave__group-head">
              <span className="demo-wave__specialist">{group.specialist}</span>
              <span className="demo-wave__role">· {group.role}</span>
              <span className="demo-wave__count">{groupDone}/{groupTotal}</span>
            </div>
            {group.rows.map((row) => (
              <div
                key={row.id}
                className={[
                  'demo-wave__row',
                  row.state === 'done' ? 'demo-wave__row--done' : 'demo-wave__row--running',
                ].join(' ')}
              >
                <span className="demo-wave__dot" aria-hidden="true" />
                <span className="demo-wave__text">{row.text}</span>
              </div>
            ))}
          </div>
        )
      })}
    </section>
  )
}
