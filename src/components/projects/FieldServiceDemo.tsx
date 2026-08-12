function FieldServiceMockup() {
  const jobs = [
    { id: 'WO-041', address: '14 Maple Road', type: 'Boiler service', tech: 'Marcus D.', status: 'In Progress', color: '#64CEFB' },
    { id: 'WO-042', address: '8 Elm Street', type: 'Emergency callout', tech: 'Sara K.', status: 'Open', color: '#0A8CFF' },
    { id: 'WO-043', address: '31 Park Ave', type: 'Annual inspection', tech: 'Josh T.', status: 'Open', color: '#0A8CFF' },
    { id: 'WO-040', address: '5 Cedar Road', type: 'Leak repair', tech: 'Marcus D.', status: 'Completed', color: '#34d399' },
  ]

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">field-service — work orders</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#168CFF' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse motion-reduce:animate-none" style={{ background: '#168CFF' }} />
          3 in progress
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'Open Jobs', value: '6', color: '#0A8CFF' },
          { label: 'In Progress', value: '3', color: '#64CEFB' },
          { label: 'Completed Today', value: '8', color: '#34d399' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-xl leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      <div className="flex min-h-[240px]">
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium block mb-3">Work Orders</span>
          <div className="space-y-2">
            {jobs.map(({ id, address, type, tech, status, color }) => (
              <div key={id} className="glass rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white/35 text-[10px] font-mono">{id}</span>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ color, background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    {status}
                  </span>
                </div>
                <p className="text-white/75 text-xs font-medium truncate">{type}</p>
                <p className="text-white/35 text-[10px] truncate">{address} · {tech}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-col w-44 flex-shrink-0 p-3">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium mb-2">Active Job</span>
          <div className="glass rounded-xl p-3 flex-1">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64CEFB] animate-pulse motion-reduce:animate-none" />
              <span className="text-[#64CEFB] text-[10px] font-medium">In Progress</span>
            </div>
            <p className="text-white/70 text-[11px] font-medium mb-0.5">WO-041</p>
            <p className="text-white/45 text-[10px] mb-3">Boiler service</p>
            <div className="space-y-2 mb-3">
              {[
                { label: 'Technician', value: 'Marcus D.' },
                { label: 'Location', value: '14 Maple Road' },
                { label: 'Started', value: '09:42' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-white/30 text-[10px]">{label}</p>
                  <p className="text-white/65 text-[10px] font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="pt-2.5 border-t border-white/06">
              <p className="text-white/30 text-[10px] mb-1.5">Parts logged</p>
              {['Pressure valve', 'Filter unit'].map((part) => (
                <div key={part} className="flex items-center gap-1.5 mb-1">
                  <div className="w-1 h-1 rounded-full bg-[#168CFF]/50" />
                  <p className="text-white/50 text-[10px]">{part}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 border-t border-white/05 flex items-center justify-end">
        <span className="text-white/40 text-[10px]">Sample data — illustrative only</span>
      </div>
    </div>
  )
}

function FieldServiceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute"
        style={{
          top: '-5%', left: '-5%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse at 30% 30%, rgba(22,140,255,0.10) 0%, rgba(10,140,255,0.05) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '25%', right: '-10%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse at 70% 45%, rgba(100,206,251,0.08) 0%, rgba(22,140,255,0.04) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(22,140,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(22,140,255,0.025) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '16%', left: '-10%', width: '68%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(22,140,255,0.18), transparent)',
          transform: 'rotate(-5deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

export { FieldServiceMockup, FieldServiceBackground }
