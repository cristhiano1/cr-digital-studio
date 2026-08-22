function BusinessWebsiteMockup() {
  const services = ['Renovation', 'Extensions', 'Fit-out']

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <div
          className="ml-3 flex items-center gap-1.5 rounded-full px-3 py-1 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', maxWidth: '180px' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: 'rgba(52,211,153,0.75)' }}
          />
          <span className="text-white/30 text-[10px] font-mono truncate">service-co.com</span>
        </div>
      </div>

      {/* Website content area */}
      <div style={{ background: 'rgba(4, 11, 20, 0.92)' }}>
        {/* Site navigation */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-4 h-4 rounded flex-shrink-0"
              style={{ background: 'rgba(10,140,255,0.25)' }}
            />
            <span className="text-white/65 text-[11px] font-semibold tracking-wide">Service Co.</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            {['Services', 'About', 'Contact'].map((l) => (
              <span key={l} className="text-white/35 text-[9px]">
                {l}
              </span>
            ))}
            <span
              className="text-[9px] font-semibold text-white rounded-full px-2 py-0.5"
              style={{ background: '#0A8CFF' }}
            >
              Get a quote
            </span>
          </div>
        </div>

        {/* Hero area */}
        <div
          className="px-4 pt-5 pb-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex gap-4 items-start">
            <div className="flex-1 min-w-0">
              <div className="h-4 rounded mb-2.5" style={{ width: '80%', background: 'rgba(255,255,255,0.20)' }} />
              <div className="h-4 rounded mb-4" style={{ width: '58%', background: 'rgba(255,255,255,0.12)' }} />
              <div className="h-2 rounded mb-1.5" style={{ width: '95%', background: 'rgba(255,255,255,0.07)' }} />
              <div className="h-2 rounded mb-5" style={{ width: '72%', background: 'rgba(255,255,255,0.07)' }} />
              <div className="flex gap-2 items-center">
                <div
                  className="h-6 w-24 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#0A8CFF' }}
                >
                  <span className="text-white text-[8px] font-semibold">Request a quote</span>
                </div>
                <div
                  className="h-6 w-14 rounded-full flex-shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                />
              </div>
            </div>
            <div
              className="flex-shrink-0 w-20 h-[72px] rounded-xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(10,140,255,0.14) 0%, rgba(100,206,251,0.07) 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            />
          </div>
        </div>

        {/* Services grid */}
        <div
          className="px-4 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="text-white/25 text-[8px] uppercase tracking-widest block mb-3">
            Our services
          </span>
          <div className="grid grid-cols-3 gap-2">
            {services.map((svc, i) => (
              <div
                key={svc}
                className="rounded-xl p-2.5"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-5 h-5 rounded mb-2"
                  style={{
                    background: i === 0 ? 'rgba(10,140,255,0.22)' : 'rgba(100,206,251,0.12)',
                  }}
                />
                <p className="text-white/60 text-[9px] font-semibold mb-1">{svc}</p>
                <div className="space-y-1">
                  <div
                    className="h-1.5 rounded"
                    style={{ width: '80%', background: 'rgba(255,255,255,0.06)' }}
                  />
                  <div
                    className="h-1.5 rounded"
                    style={{ width: '58%', background: 'rgba(255,255,255,0.06)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust + enquiry strip */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'rgba(52,211,153,0.75)' }}
              aria-hidden="true"
            />
            <span className="text-white/30 text-[9px]">Clear services · Simple enquiry path</span>
          </div>
          <div
            className="h-5 w-[72px] rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background: 'rgba(10,140,255,0.15)',
              border: '1px solid rgba(10,140,255,0.25)',
            }}
          >
            <span className="text-[#64CEFB] text-[8px] font-semibold">Get in touch</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div
        className="px-5 py-2 flex items-center justify-end"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span className="text-white/50 text-[10px]">Sample content — illustrative only</span>
      </div>
    </div>
  )
}

function BusinessWebsiteBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute"
        style={{
          top: '-8%',
          left: '-5%',
          width: '52%',
          height: '65%',
          background:
            'radial-gradient(ellipse at 30% 30%, rgba(10,140,255,0.11) 0%, rgba(10,140,255,0.05) 48%, transparent 70%)',
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: '-8%',
          right: '-5%',
          width: '48%',
          height: '55%',
          background:
            'radial-gradient(ellipse at 70% 75%, rgba(100,206,251,0.08) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '28%',
          right: '-3%',
          width: '70%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,206,251,0.18), transparent)',
          transform: 'rotate(7deg)',
          transformOrigin: '100% 0',
        }}
      />
    </div>
  )
}

export { BusinessWebsiteMockup, BusinessWebsiteBackground }
