import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { services } from '../../data/services';

/* ─── Validation rules ──────────────────────────────────────────── */
const PHONE_RE  = /^[+]?[\d\s\-().]{7,20}$/;
const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: typeof INITIAL): Partial<typeof INITIAL> {
  const errors: Partial<typeof INITIAL> = {};

  if (!data.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.';
  } else if (data.nombre.trim().length < 3) {
    errors.nombre = 'Mínimo 3 caracteres.';
  }

  if (!data.email.trim()) {
    errors.email = 'El correo es obligatorio.';
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Correo electrónico inválido.';
  }

  if (data.telefono.trim() && !PHONE_RE.test(data.telefono.trim())) {
    errors.telefono = 'Número de teléfono inválido.';
  }

  if (!data.servicio) {
    errors.servicio = 'Selecciona un servicio.';
  }

  if (!data.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio.';
  } else if (data.mensaje.trim().length < 10) {
    errors.mensaje = 'Mínimo 10 caracteres.';
  }

  return errors;
}

/* ─── Types ─────────────────────────────────────────────────────── */
const INITIAL = {
  nombre:   '',
  email:    '',
  telefono: '',
  servicio: '',
  mensaje:  '',
};

/* ─── Component ─────────────────────────────────────────────────── */
const ContactForm: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ ...INITIAL });
  const [errors,   setErrors]   = useState<Partial<typeof INITIAL>>({});
  const [touched,  setTouched]  = useState<Partial<Record<keyof typeof INITIAL, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  /* Mark field as touched on blur and validate it */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof INITIAL;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);
    /* Clear error live once the field becomes valid */
    if (touched[name as keyof typeof INITIAL]) {
      const fieldErrors = validate(next);
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name as keyof typeof INITIAL] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* Touch all fields so every error shows */
    setTouched({ nombre: true, email: true, telefono: true, servicio: true, mensaje: true });
    const allErrors = validate(formData);
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    const phoneNumber = '59177575921';
    const message =
      `*Nuevo mensaje de contacto*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.telefono || 'No proporcionado'}%0A` +
      `*Servicio de interés:* ${getServiceName(formData.servicio)}%0A` +
      `*Mensaje:*%0A${formData.mensaje}`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setFormData({ ...INITIAL });
    setTouched({});
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const getServiceName = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    return service ? service.title : 'No especificado';
  };

  const field = (name: keyof typeof INITIAL) => ({
    hasError:  touched[name] && !!errors[name],
    hasSuccess: touched[name] && !errors[name] && !!formData[name],
  });

  return (
    <StyledWrapper theme={theme}>
      <div id="Container">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div id="login-lable">Envíanos un mensaje</div>

          {submitted && (
            <div className="success-banner">
              ✓ Mensaje enviado correctamente
            </div>
          )}

          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Nombre Completo *</label>
              <div className={`input-wrap ${field('nombre').hasError ? 'error' : ''} ${field('nombre').hasSuccess ? 'success' : ''}`}>
                <input
                  className="form-content"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {field('nombre').hasSuccess && <span className="icon">✓</span>}
              </div>
              {field('nombre').hasError && <span className="error-msg">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label>Correo Electrónico *</label>
              <div className={`input-wrap ${field('email').hasError ? 'error' : ''} ${field('email').hasSuccess ? 'success' : ''}`}>
                <input
                  className="form-content"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {field('email').hasSuccess && <span className="icon">✓</span>}
              </div>
              {field('email').hasError && <span className="error-msg">{errors.email}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Teléfono <span className="optional">(opcional)</span></label>
              <div className={`input-wrap ${field('telefono').hasError ? 'error' : ''} ${field('telefono').hasSuccess ? 'success' : ''}`}>
                <input
                  className="form-content"
                  type="tel"
                  name="telefono"
                  placeholder="Tu teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {field('telefono').hasSuccess && <span className="icon">✓</span>}
              </div>
              {field('telefono').hasError && <span className="error-msg">{errors.telefono}</span>}
            </div>

            <div className="form-group">
              <label>Servicio de Interés *</label>
              <div className={`input-wrap ${field('servicio').hasError ? 'error' : ''} ${field('servicio').hasSuccess ? 'success' : ''}`}>
                <select
                  className="form-content"
                  name="servicio"
                  aria-label="Servicio de Interés"
                  value={formData.servicio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" disabled>Selecciona...</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
                {field('servicio').hasSuccess && <span className="icon select-icon">✓</span>}
              </div>
              {field('servicio').hasError && <span className="error-msg">{errors.servicio}</span>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-group full-width">
            <label>Mensaje *</label>
            <div className={`input-wrap ${field('mensaje').hasError ? 'error' : ''} ${field('mensaje').hasSuccess ? 'success' : ''}`}>
              <textarea
                className="form-content textarea"
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {field('mensaje').hasError && <span className="error-msg">{errors.mensaje}</span>}
          </div>

          <button type="submit">Enviar Mensaje</button>

          <p className="terms">
            Al enviar este formulario, aceptas que nos pongamos en contacto contigo para discutir tu proyecto y nuestros servicios.
          </p>
        </form>

        <div id="rays">
          <svg fill="none" viewBox="0 0 299 152" height="5em" width="18em" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#paint0_linear_8_3)" d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="12.1981" x2="150.12" y1={152} x1="149.5" id="paint0_linear_8_3">
                <stop stopColor="#FF1FA7" />
                <stop stopOpacity={0} stopColor="#00F0FF" offset={1} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div id="emiter">
          <svg fill="none" viewBox="0 0 160 61" height={61} width={160} xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_di_1_38)">
              <path fill="#2B2B2B" d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z" clipRule="evenodd" fillRule="evenodd" />
            </g>
            <ellipse fill="url(#paint0_radial_1_38)" ry="4.80773" rx="28.3956" cy="17.4236" cx={80} />
            <g filter="url(#filter1_i_1_38)">
              <path fill="#323232" d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z" clipRule="evenodd" fillRule="evenodd" />
            </g>
            <g filter="url(#filter2_di_1_38)">
              <path fill="#378BA6" d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z" clipRule="evenodd" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45.5002" width={160} y="15.4996" x={0} id="filter0_di_1_38">
                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite operator="out" in2="hardAlpha" />
                <feColorMatrix values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0" type="matrix" />
                <feBlend result="effect1_dropShadow_1_38" in2="BackgroundImageFix" mode="normal" />
                <feBlend result="shape" in2="effect1_dropShadow_1_38" in="SourceGraphic" mode="normal" />
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={8} />
                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" type="matrix" />
                <feBlend result="effect2_innerShadow_1_38" in2="shape" mode="normal" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.0002" width={152} y={3} x={4} id="filter1_i_1_38">
                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                <feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic" mode="normal" />
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                <feMorphology result="effect1_innerShadow_1_38" in="SourceAlpha" operator="erode" radius={3} />
                <feOffset />
                <feGaussianBlur stdDeviation="6.5" />
                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" type="matrix" />
                <feBlend result="effect1_innerShadow_1_38" in2="shape" mode="normal" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.7583" width="78.4615" y="0.692139" x="40.7693" id="filter2_di_1_38">
                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                <feMorphology result="effect1_dropShadow_1_38" in="SourceAlpha" operator="dilate" radius={2} />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feComposite operator="out" in2="hardAlpha" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 1 0" type="matrix" />
                <feBlend result="effect1_dropShadow_1_38" in2="BackgroundImageFix" mode="color-dodge" />
                <feBlend result="shape" in2="effect1_dropShadow_1_38" in="SourceGraphic" mode="normal" />
                <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                <feMorphology result="effect2_innerShadow_1_38" in="SourceAlpha" operator="erode" radius={1} />
                <feOffset />
                <feGaussianBlur stdDeviation={2} />
                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0" type="matrix" />
                <feBlend result="effect2_innerShadow_1_38" in2="shape" mode="normal" />
              </filter>
              <radialGradient gradientTransform="translate(80 17.4236) rotate(90) scale(6.25004 36.9143)" gradientUnits="userSpaceOnUse" r={1} cy={0} cx={0} id="paint0_radial_1_38">
                <stop stopColor="#FF1FA7" />
                <stop stopColor="#00F0FF" offset="0.901042" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

/* ─── Styles ─────────────────────────────────────────────────────── */
const StyledWrapper = styled.div<{ theme: string }>`
  width: 100%;
  overflow: hidden;

  #Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }

  #rays {
    z-index: 2;
    position: relative;
    bottom: -1.5em;
  }

  .form {
    position: relative;
    padding: 2rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border: 2px solid ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'};
    background: ${props => props.theme === 'dark'
      ? 'rgba(10, 20, 40, 0.8)'
      : 'rgba(255, 255, 255, 0.8)'};
    box-shadow: 0 0 30px rgba(255, 31, 167, 0.3), 0 0 30px rgba(0, 240, 255, 0.3);
    backdrop-filter: blur(10px);
    gap: 1em;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  #login-lable {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #FF1FA7, #00F0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  /* ── Success banner ── */
  .success-banner {
    background: rgba(0, 229, 160, 0.15);
    border: 1px solid rgba(0, 229, 160, 0.4);
    color: #00E5A0;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 0.88rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.03em;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }

  .form-group.full-width {
    grid-column: 1 / -1;
  }

  .form-group label {
    color: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.85)'
      : 'rgba(0, 0, 0, 0.7)'};
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .optional {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${props => props.theme === 'dark'
      ? 'rgba(255,255,255,0.35)'
      : 'rgba(0,0,0,0.35)'};
  }

  /* ── Input wrapper for icon positioning ── */
  .input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-wrap .icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #00E5A0;
    font-size: 0.85rem;
    font-weight: 700;
    pointer-events: none;
  }

  .input-wrap .select-icon {
    right: 36px; /* don't overlap the select arrow */
  }

  /* Border states */
  .input-wrap.error .form-content {
    border-color: #FF4D6D !important;
    box-shadow: 0 0 8px rgba(255, 77, 109, 0.25);
  }

  .input-wrap.success .form-content {
    border-color: #00E5A0 !important;
    box-shadow: 0 0 8px rgba(0, 229, 160, 0.2);
  }

  /* ── Error message ── */
  .error-msg {
    font-size: 0.75rem;
    color: #FF4D6D;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-top: -2px;
    display: flex;
    align-items: center;
    gap: 4px;

    &::before {
      content: '⚠';
      font-size: 0.7rem;
    }
  }

  .form-content {
    height: 2.8em;
    padding: 0 12px;
    color: ${props => props.theme === 'dark' ? 'white' : '#1a1a2e'};
    letter-spacing: 1px;
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.1)'};
    background: ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(255, 255, 255, 0.3)'};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
    font-size: 0.9rem;
    width: 100%;
  }

  .form-content.textarea {
    height: auto;
    padding: 12px;
    resize: vertical;
    min-height: 110px;
    font-family: inherit;
  }

  select.form-content {
    appearance: none;
    background-image: ${props => props.theme === 'dark'
      ? 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")'
      : 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'black\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")'};
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 20px;
    cursor: pointer;
  }

  select.form-content option {
    background-color: ${props => props.theme === 'dark' ? '#1a1a2e' : '#ffffff'};
    color: ${props => props.theme === 'dark' ? 'white' : '#1a1a2e'};
  }

  .form-content:focus-visible {
    outline: none;
    border-color: #FF1FA7;
    box-shadow: 0 0 15px rgba(255, 31, 167, 0.3);
  }

  .form-content:hover:not(:focus-visible) {
    border-color: #00F0FF;
  }

  ::placeholder {
    color: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.3)'};
    font-weight: 300;
  }

  .form button {
    cursor: pointer;
    height: 3.2rem;
    padding: 0 1rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #FF1FA7, #00F0FF);
    transition: all 0.3s ease;
    margin-top: 0.25rem;
  }

  .form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 31, 167, 0.4);
  }

  .terms {
    font-size: 0.78rem;
    color: ${props => props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.6)'
      : 'rgba(0, 0, 0, 0.5)'};
    text-align: center;
    margin-top: 0.25rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .form {
      padding: 1.5rem;
      width: 100%;
    }

    #login-lable {
      font-size: 1.4rem;
    }

    .form-row {
      grid-template-columns: 1fr;
    }
  }
`;

export default ContactForm;