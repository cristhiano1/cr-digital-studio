function QuoteLeadMockup() {
  const enquiries = [
    { name: 'James H.', service: 'Bathroom renovation', budget: '5–8k', status: 'New', color: '#0A8CFF' },
    { name: 'Rachel M.', service: 'Kitchen renovation', budget: '12–15k', status: 'Quote Sent', color: '#64CEFB' },
    { name: 'Tom A.', service: 'Extension project', budget: '20k+', status: 'Follow-up sent', color: '#168CFF' },
    { name: 'Lisa C.', service: 'Office renovation', budget: '8–10k', status: 'New', color: '#0A8CFF' },
  ]

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">quote-system — lead pipeline</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#0A8CFF' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse motion-reduce:animate-none" style={{ background: '#0A8CFF' }} />
          9 open enquiries
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'New Enquiries', value: '4', color: '#0A8CFF' },
          { label: 'Awaiting Quote', value: '5', color: '#64CEFB' },
          { label: 'Won This Month', value: '3', color: '#34d399' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-xl leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      <div className="flex min-h-[240px]">
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium block mb-3">Recent Enquiries</span>
          <div className="space-y-2">
            {enquiries.map(({ name, service, budget, status, color }) => (
              <div key={name} className="glass rounded-xl p-3 flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ background: `${color}18`, color }}
                >
                  {name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/75 text-xs font-medium truncate">{name}</p>
                  <p className="text-white/35 text-[10px] truncate">{service} · {budget}</p>
                </div>
                <span
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ color, background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-col w-44 flex-shrink-0 p-3 gap-1.5">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium mb-1">Pipeline</span>
          {[
            { stage: 'New', count: 4, color: '#0A8CFF' },
            { stage: 'Contacted', count: 3, color: '#64CEFB' },
            { stage: 'Quote Sent', count: 5, color: '#168CFF' },
            { stage: 'Accepted', count: 2, color: '#34d399' },
          ].map(({ stage, count, color }) => (
            <div key={stage} className="glass rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-white/55 text-[10px]">{stage}</span>
              </div>
              <span className="font-bold text-xs" style={{ color }}>{count}</span>
            </div>
          ))}
          <div className="mt-3 pt-2.5 border-t border-white/06 space-y-2">
            <span className="text-white/30 text-[10px] uppercase tracking-wide block">Auto follow-up</span>
            {[
              { name: 'Tom A.', note: 'Follow-up sent · 2h ago' },
              { name: 'Lisa C.', note: 'Awaiting response' },
            ].map(({ name, note }) => (
              <div key={name}>
                <p className="text-white/60 text-[10px] font-medium">{name}</p>
                <p className="text-white/30 text-[9px]">{note}</p>
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

function QuoteLeadBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute"
        style={{
          top: '-10%', right: '-5%', width: '55%', height: '70%',
          background: 'radial-gradient(ellipse at 65% 35%, rgba(10,140,255,0.12) 0%, rgba(22,140,255,0.06) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '-5%', left: '-5%', width: '40%', height: '50%',
          background: 'radial-gradient(ellipse at 30% 65%, rgba(100,206,251,0.07) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '22%', left: '-5%', width: '70%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(10,140,255,0.22), transparent)',
          transform: 'rotate(-6deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

export { QuoteLeadMockup, QuoteLeadBackground }
