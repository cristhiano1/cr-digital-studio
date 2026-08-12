function AutomationMockup() {
  const pipeline = [
    { name: 'Data Intake', status: 'done' as const },
    { name: 'Processing', status: 'active' as const },
    { name: 'Review', status: 'pending' as const },
    { name: 'Export', status: 'pending' as const },
  ]

  const statusStyle = (s: 'done' | 'active' | 'pending') =>
    s === 'done'
      ? { box: 'bg-[#34d399]/12 border border-[#34d399]/25', text: 'text-[#34d399]', sub: '✓ Done' }
      : s === 'active'
      ? { box: 'bg-[#0A8CFF]/12 border border-[#0A8CFF]/30', text: 'text-[#168CFF]', sub: '72%' }
      : { box: 'bg-white/03 border border-white/06', text: 'text-white/30', sub: 'Pending' }

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">automation-hub — workflows</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
          5 flows active
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'Queued Tasks', value: '8', color: '#0A8CFF' },
          { label: 'Pending Reviews', value: '3', color: '#64CEFB' },
          { label: 'Reports Ready', value: '12', color: '#34d399' },
          { label: 'Active Flows', value: '5', color: '#168CFF' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-lg leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      <div className="p-4 border-b border-white/05">
        <span className="text-white/45 text-xs font-medium block mb-3">Workflow Pipeline</span>
        <div className="flex items-stretch gap-1">
          {pipeline.map((step, i) => {
            const s = statusStyle(step.status)
            return (
              <div key={step.name} className="flex items-center flex-1 gap-1">
                <div className={`flex-1 rounded-xl px-2 py-2 text-center ${s.box}`}>
                  <span className={`text-[10px] font-medium block ${s.text}`}>{step.name}</span>
                  <span className="text-[10px] text-white/30">{s.sub}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="w-3 flex-shrink-0">
                    <div className={`h-px w-full ${step.status === 'done' ? 'bg-[#34d399]/35' : 'bg-white/08'}`} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex min-h-[150px]">
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <span className="text-white/40 text-[10px] uppercase tracking-wide font-medium block mb-3">Active Tasks</span>
          <div className="space-y-3">
            {[
              { name: 'Monthly report', status: 'In progress', pct: 65, color: '#0A8CFF' },
              { name: 'Client data sync', status: 'Completed', pct: 100, color: '#34d399' },
              { name: 'Invoice export', status: 'Queued', pct: 0, color: '#168CFF' },
            ].map(({ name, status, pct, color }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/65 text-xs">{name}</span>
                  <span className="text-[10px] font-medium" style={{ color }}>{status}</span>
                </div>
                <div className="h-1 bg-white/06 rounded-full">
                  <div className="h-1 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:block w-48 flex-shrink-0 p-4">
          <span className="text-white/40 text-[10px] uppercase tracking-wide font-medium block mb-3">Activity Log</span>
          <div className="space-y-2.5">
            {[
              { event: 'Report exported', time: '09:41', color: '#34d399' },
              { event: 'Workflow triggered', time: '09:17', color: '#0A8CFF' },
              { event: 'Data synced', time: '08:55', color: '#64CEFB' },
              { event: 'Task completed', time: '08:30', color: '#34d399' },
            ].map(({ event, time, color }) => (
              <div key={event} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-0.5 flex-shrink-0" style={{ background: color }} />
                <div>
                  <p className="text-white/60 text-[10px] leading-tight">{event}</p>
                  <p className="text-white/25 text-[9px]">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-2 border-t border-white/05 flex items-center justify-end">
        <span className="text-white/40 text-[10px]">Sample data — illustrative only</span>
      </div>
    </div>
  )
}

function AutomationBackground() {
  const dots = [
    { top: '20%', left: '15%' }, { top: '45%', left: '35%' }, { top: '70%', left: '22%' },
    { top: '30%', left: '62%' }, { top: '60%', left: '76%' }, { top: '14%', left: '80%' },
    { top: '80%', left: '55%' }, { top: '50%', left: '90%' },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute"
        style={{
          top: '-10%', right: '-5%', width: '55%', height: '65%',
          background: 'radial-gradient(ellipse at 60% 35%, rgba(10,140,255,0.10) 0%, rgba(10,140,255,0.05) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '-5%', left: '-10%', width: '50%', height: '55%',
          background: 'radial-gradient(ellipse at 35% 65%, rgba(22,140,255,0.08) 0%, rgba(10,140,255,0.04) 45%, transparent 70%)',
        }}
      />
      {dots.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: pos.top, left: pos.left,
            width: '3px', height: '3px',
            background: i % 2 === 0 ? 'rgba(10,140,255,0.35)' : 'rgba(100,206,251,0.30)',
          }}
        />
      ))}
      <div
        className="absolute"
        style={{
          top: '12%', left: '-5%', width: '65%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(10,140,255,0.22), transparent)',
          transform: 'rotate(-10deg)',
          transformOrigin: '0 0',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '52%', right: '-5%', width: '55%', height: '1px',
          background: 'linear-gradient(90deg, rgba(100,206,251,0.18), rgba(22,140,255,0.12), transparent)',
          transform: 'rotate(-10deg)',
          transformOrigin: '100% 0',
        }}
      />
    </div>
  )
}

export { AutomationMockup, AutomationBackground }
