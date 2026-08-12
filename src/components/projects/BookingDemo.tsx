function BookingMockup() {
  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">booking-crm — calendar</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#64CEFB' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse motion-reduce:animate-none" style={{ background: '#64CEFB' }} />
          5 bookings today
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'Total Clients', value: '24', color: '#64CEFB' },
          { label: 'Bookings Today', value: '5', color: '#34d399' },
          { label: 'Pending Follow-up', value: '8', color: '#168CFF' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-xl leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      <div className="flex min-h-[240px]">
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/55 text-xs font-medium">Week · May 19–23, 2026</span>
            <span className="text-white/30 text-xs">May 2026</span>
          </div>

          <div className="grid grid-cols-5 gap-1 mb-2">
            {[
              { day: 'Mon', date: '19' },
              { day: 'Tue', date: '20' },
              { day: 'Wed', date: '21', today: true },
              { day: 'Thu', date: '22' },
              { day: 'Fri', date: '23' },
            ].map(({ day, date, today }) => (
              <div key={day} className={`text-center rounded-xl py-1.5 ${today ? 'bg-[#64CEFB]/12' : ''}`}>
                <p className="text-white/35 text-[10px]">{day}</p>
                <p className={`text-sm font-bold ${today ? 'text-[#64CEFB]' : 'text-white/55'}`}>{date}</p>
              </div>
            ))}
          </div>

          <div className="space-y-1.5">
            {[
              { time: '09:00', col: 0, name: 'Anna K.', type: 'Consultation' },
              { time: '11:00', col: 2, name: 'Marcus L.', type: 'Follow-up' },
              { time: '13:30', col: 1, name: 'Sofia B.', type: 'Intro call' },
              { time: '15:00', col: 4, name: 'Jamie P.', type: 'Review' },
            ].map(({ time, col, name, type }) => (
              <div key={time} className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1 items-center">
                <span className="text-white/25 text-[10px] text-right">{time}</span>
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-lg flex items-center px-1.5 overflow-hidden ${i === col ? 'border' : 'bg-white/02'}`}
                    style={i === col ? { background: 'rgba(100,206,251,0.12)', borderColor: 'rgba(100,206,251,0.3)' } : {}}
                  >
                    {i === col && (
                      <span className="text-[10px] font-medium truncate" style={{ color: '#64CEFB' }}>
                        {name} · {type}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex flex-col w-44 flex-shrink-0 p-3 gap-1.5">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium mb-1">CRM Pipeline</span>
          {[
            { stage: 'New Lead', count: 4, color: '#0A8CFF' },
            { stage: 'Contacted', count: 7, color: '#64CEFB' },
            { stage: 'Active Client', count: 9, color: '#34d399' },
            { stage: 'Follow-up due', count: 4, color: '#168CFF' },
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
            <span className="text-white/30 text-[10px] uppercase tracking-wide block">Recent activity</span>
            {[
              { name: 'Anna K.', note: 'Booking confirmed' },
              { name: 'Jamie P.', note: 'New lead added' },
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

function BookingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute"
        style={{
          top: '-5%', left: '-5%', width: '50%', height: '65%',
          background: 'radial-gradient(ellipse at 30% 30%, rgba(56,189,248,0.10) 0%, rgba(100,206,251,0.05) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '20%', right: '-10%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse at 70% 45%, rgba(100,206,251,0.08) 0%, rgba(56,189,248,0.04) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '15%', left: '-10%', width: '72%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.20), transparent)',
          transform: 'rotate(-6deg)',
          transformOrigin: '0 0',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '42%', left: '-5%', width: '52%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,206,251,0.14), transparent)',
          transform: 'rotate(-6deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

export { BookingMockup, BookingBackground }
