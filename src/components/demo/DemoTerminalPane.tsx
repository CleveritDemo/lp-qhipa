'use client'

import './demoTerminal.css'

export interface DemoTerminalLineView {
  kind: 'command' | 'output'
  text: string
}

export interface DemoTerminalPaneProps {
  title: string
  cwd: string
  lines: DemoTerminalLineView[]
  revealed: number
  onMinimize?: () => void
  onClose?: () => void
}

export function DemoTerminalPane(props: DemoTerminalPaneProps) {
  const { title, cwd, lines, revealed, onMinimize, onClose } = props
  const visibleLines = lines.slice(0, revealed)

  return (
    <div className="demo-terminal">
      <header className="demo-terminal__header">
        <div className="demo-terminal__traffic-lights">
          <button
            type="button"
            className="demo-terminal__light demo-terminal__light--red demo-terminal__light--action"
            aria-label="Cerrar terminal"
            onClick={onClose}
          />
          <button
            type="button"
            className="demo-terminal__light demo-terminal__light--amber demo-terminal__light--action"
            aria-label="Minimizar terminal"
            onClick={onMinimize}
          />
          <span className="demo-terminal__light demo-terminal__light--green" aria-hidden="true" />
        </div>
        <span className="demo-terminal__title">{title}</span>
        <span className="demo-terminal__cwd">{cwd}</span>
      </header>
      <div className="demo-terminal__body">
        {visibleLines.map((line, index) => (
          <div
            key={index}
            className={
              line.kind === 'command'
                ? 'demo-terminal__line demo-terminal__line--command'
                : 'demo-terminal__line demo-terminal__line--output'
            }
          >
            {line.kind === 'command' ? (
              <>
                <span className="demo-terminal__prompt">❯ </span>
                <span>{line.text}</span>
              </>
            ) : (
              line.text
            )}
          </div>
        ))}
        <span className="demo-terminal__cursor" aria-hidden="true" />
      </div>
    </div>
  )
}
