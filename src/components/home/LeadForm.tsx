import { useState } from 'react'
import { Lightning, Lock, ArrowRight, Check, Send } from '../icons'

interface FormState {
  name: string; email: string; phone: string
  budget: string; interest: string; message: string
}

const trustItems = [
  { Icon: Lightning, text: 'Respuesta en menos de 2 horas' },
  { Icon: Lock,      text: 'Tus datos están 100% protegidos' },
  { Icon: Check,     text: 'Asesoría personalizada sin costo' },
  { Icon: ArrowRight, text: 'Cotización detallada gratis' },
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
    setTimeout(() => { setLoading(false); setDone(true) }, 1600)
  }

  const inputCls = 'w-full bg-[#13161E] border border-white/8 rounded-xl px-4 py-3 text-[#F0F2F8] text-sm placeholder-[#4E5468] focus:border-[#E8A617]/50 focus:bg-[#E8A617]/3 transition-all duration-200'
  const selectCls = `${inputCls} appearance-none cursor-pointer`

  return (
    <section id="contacto" className="py-28 bg-[#13161E] relative overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#E8A617]/4 blur-[100px] pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="pill mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A617] block"/>
              Solicita Información
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-[#F0F2F8] leading-tight mb-6">
              Hablemos de tu<br/>
              <span className="text-gold">próximo hogar</span>
            </h2>
            <p className="text-[#8A90A4] leading-relaxed mb-10 text-sm">
              Nuestros asesores te acompañarán en cada paso.
              Cuéntanos qué buscas y te presentamos las mejores opciones.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {trustItems.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E8A617]/10 border border-[#E8A617]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#E8A617]" />
                  </div>
                  <span className="text-[#8A90A4] text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['CR', 'MV', 'AT', 'JS'].map(initials => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-[#0D0F14] font-display font-black text-xs border-2 border-[#13161E]"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#F0F2F8] text-sm font-semibold">+500 clientes satisfechos</p>
                <p className="text-[#4E5468] text-xs">nos eligieron este año</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#1A1E2A] border border-white/7 rounded-3xl p-8 lg:p-10">
            {done ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-emerald-400" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-2xl text-[#F0F2F8] mb-3">¡Mensaje enviado!</h3>
                <p className="text-[#8A90A4] mb-8 text-sm">
                  Un asesor se comunicará contigo en las próximas 2 horas hábiles.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="px-6 py-3 border border-white/12 text-[#8A90A4] rounded-lg text-sm hover:border-[#E8A617]/40 hover:text-[#E8A617] transition-colors cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-[#F0F2F8] mb-6">
                  Solicitar información gratuita
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                      Nombre *
                    </label>
                    <input id="lead-name" name="name" type="text" required value={form.name}
                      onChange={handleChange} placeholder="Tu nombre" className={inputCls}/>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                      Teléfono *
                    </label>
                    <input id="lead-phone" name="phone" type="tel" required value={form.phone}
                      onChange={handleChange} placeholder="+57 314 276 7572" className={inputCls}/>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input id="lead-email" name="email" type="email" required value={form.email}
                    onChange={handleChange} placeholder="correo@email.com" className={inputCls}/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                      Presupuesto
                    </label>
                    <select id="lead-budget" name="budget" value={form.budget}
                      onChange={handleChange} className={selectCls}>
                      <option value="">Seleccionar</option>
                      <option value="200-350">$200M – $350M</option>
                      <option value="350-600">$350M – $600M</option>
                      <option value="600-1000">$600M – $1.000M</option>
                      <option value="1000+">Más de $1.000M</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                      Habitaciones
                    </label>
                    <select id="lead-interest" name="interest" value={form.interest}
                      onChange={handleChange} className={selectCls}>
                      <option value="">Seleccionar</option>
                      <option value="studio">Estudio</option>
                      <option value="1br">1 Habitación</option>
                      <option value="2br">2 Habitaciones</option>
                      <option value="3br">3 Habitaciones</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#4E5468] uppercase tracking-widest mb-2">
                    Mensaje adicional
                  </label>
                  <textarea id="lead-message" name="message" rows={3} value={form.message}
                    onChange={handleChange} placeholder="¿Alguna preferencia o zona específica?"
                    className={`${inputCls} resize-none`}/>
                </div>

                <button
                  id="lead-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gold text-[#0D0F14] font-display font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-[#0D0F14]/20 border-t-[#0D0F14] rounded-full animate-spin"/>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar Cotización Gratuita
                    </>
                  )}
                </button>

                <p className="text-center text-[#4E5468] text-xs">
                  Al enviar aceptas nuestra política de privacidad. Sin spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
