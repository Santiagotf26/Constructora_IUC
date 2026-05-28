import { useState } from 'react'
import { Lightning, Lock, ArrowRight, Check, Send } from '../icons'

interface FormState {
  name: string; email: string; phone: string
  budget: string; interest: string; message: string
}

const trustItems = [
  { Icon: Lightning, text: 'Respuesta rápida en menos de 2 horas' },
  { Icon: Lock,      text: 'Tus datos están 100% protegidos legalmente' },
  { Icon: Check,     text: 'Asesoría y preaprobación de crédito sin costo' },
  { Icon: ArrowRight, text: 'Cotización detallada y brochure en PDF gratis' },
]

const LeadForm = () => {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', budget: '', interest: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [done, setDone]       = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1400)
  }

  const inputCls = 'w-full bg-[#FAF9F6] border border-[#6E7E65]/15 rounded-xl px-4 py-3 text-[#1C201E] text-sm placeholder-[#7C837E] focus:border-[#6E7E65] focus:bg-[#6E7E65]/3 transition-all duration-200 shadow-sm'
  const selectCls = `${inputCls} appearance-none cursor-pointer`

  return (
    <section id="contacto" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#6E7E65]/5 blur-[120px] pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Trust and Copy Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pill mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E7E65] block"/>
              Asesoría Sin Compromiso
            </div>
            <h2 className="font-display font-black text-3xl lg:text-5xl text-[#1C201E] leading-tight">
              ¿HABLEMOS DE TU<br />
              <span className="text-gold uppercase">PRÓXIMO HOGAR?</span>
            </h2>
            <p className="text-[#454C47] text-sm leading-relaxed font-light">
              Nuestros asesores expertos en Boyacá te guiarán en cada paso del proceso: planes de pago personalizados, plazos de cuota inicial y preaprobación de crédito hipotecario.
            </p>

            {/* Trust signals */}
            <div className="space-y-4 pt-4">
              {trustItems.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6E7E65]/8 border border-[#6E7E65]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-[#6E7E65]" strokeWidth={2} />
                  </div>
                  <span className="text-[#454C47] text-xs font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="pt-6 border-t border-[#6E7E65]/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['CR', 'MV', 'AT', 'JS'].map(initials => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-[#6E7E65] flex items-center justify-center text-white font-display font-extrabold text-[10px] border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#1C201E] text-xs font-bold">+500 familias boyacenses</p>
                <p className="text-[#7C837E] text-[10px] font-medium">han confiado en nosotros este año</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#6E7E65]/10 rounded-3xl p-8 lg:p-10 shadow-gold-lg">
              {done ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#6E7E65]/10 border border-[#6E7E65]/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-[#6E7E65]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#1C201E] mb-3">¡Solicitud Recibida!</h3>
                  <p className="text-[#454C47] mb-8 text-sm font-light">
                    Un asesor especializado en Duitama te enviará la cotización y folletos del proyecto de tu interés a tu WhatsApp en breve.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="px-6 py-3 border border-[#6E7E65]/20 text-[#6E7E65] rounded-xl text-sm font-bold hover:border-[#6E7E65] hover:bg-[#6E7E65]/5 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-black text-xl text-[#1C201E] mb-6">
                    Solicitar Cotización y Plan de Pagos
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                        Nombre Completo *
                      </label>
                      <input id="lead-name" name="name" type="text" required value={form.name}
                        onChange={handleChange} placeholder="Tu nombre" className={inputCls}/>
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                        Número de WhatsApp *
                      </label>
                      <input id="lead-phone" name="phone" type="tel" required value={form.phone}
                        onChange={handleChange} placeholder="+57 300 123 4567" className={inputCls}/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input id="lead-email" name="email" type="email" required value={form.email}
                      onChange={handleChange} placeholder="correo@ejemplo.com" className={inputCls}/>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                        Presupuesto Estimado
                      </label>
                      <select id="lead-budget" name="budget" value={form.budget}
                        onChange={handleChange} className={selectCls}>
                        <option value="">Seleccionar presupuesto</option>
                        <option value="180-220">$180M – $220M COP</option>
                        <option value="220-300">$220M – $300M COP</option>
                        <option value="300-400">$300M – $400M COP</option>
                        <option value="400+">Más de $400M COP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                        Proyecto de Interés
                      </label>
                      <select id="lead-interest" name="interest" value={form.interest}
                        onChange={handleChange} className={selectCls}>
                        <option value="">Seleccionar desarrollo</option>
                        <option value="floresta-1br">La Floresta (1 Hab)</option>
                        <option value="floresta-3br">La Floresta (3 Hab)</option>
                        <option value="floresta-ph">La Floresta (Penthouse)</option>
                        <option value="mirador">Mirador de la Villa</option>
                        <option value="altos">Altos del Prado</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-[#7C837E] uppercase tracking-widest mb-1.5">
                      Mensaje o Consultas Específicas
                    </label>
                    <textarea id="lead-message" name="message" rows={3} value={form.message}
                      onChange={handleChange} placeholder="¿Deseas saber plazos de cuota inicial, fechas de entrega o acabados?"
                      className={`${inputCls} resize-none`}/>
                  </div>

                  <button
                    id="lead-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#D97E60] text-white font-display font-bold text-base rounded-xl transition-all duration-300 hover:bg-[#C86B4D] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"/>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Solicitar Folletos y Precios
                      </>
                    )}
                  </button>

                  <p className="text-center text-[#7C837E] text-[10px] font-medium">
                    Al enviar la información autorizas el tratamiento de tus datos personales conforme a la ley colombiana.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LeadForm
