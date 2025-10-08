# Parallax Scroll Reveal Effect

Sistema de animaciones parallax para revelar imágenes y elementos al hacer scroll.

## 📚 Clases CSS Disponibles

### 1. `parallax-image` (Básica)
Efecto de aparición desde abajo hacia arriba en todos los dispositivos.

```tsx
import { useParallax } from '@/hooks/useParallax';

function MyComponent() {
  const imageRef = useParallax<HTMLImageElement>();
  
  return (
    <img 
      ref={imageRef} 
      className="parallax-image" 
      src="/path/to/image.jpg" 
      alt="Description" 
    />
  );
}
```

### 2. `parallax-image-desktop-only` (Desktop Only)
Efecto que solo se activa en pantallas ≥ 768px. Perfecto para el Hero section.

```tsx
import { useParallax } from '@/hooks/useParallax';

function HeroSection() {
  const cardRef = useParallax<HTMLDivElement>();
  
  return (
    <div ref={cardRef} className="parallax-image-desktop-only">
      {/* Contenido de la card */}
    </div>
  );
}
```

### 3. `parallax-image-fast` (Animación Rápida)
Animación más rápida (0.5s) con menos desplazamiento (40px).

```tsx
const imageRef = useParallax<HTMLImageElement>();

<img ref={imageRef} className="parallax-image-fast" src="..." alt="..." />
```

### 4. `parallax-image-slow` (Animación Lenta)
Animación más lenta (1.2s) con más desplazamiento (80px). Ideal para elementos grandes.

```tsx
const containerRef = useParallax<HTMLDivElement>();

<div ref={containerRef} className="parallax-image-slow">
  {/* Contenido */}
</div>
```

### 5. `parallax-from-left` (Desde la Izquierda)
Elemento aparece deslizándose desde la izquierda.

```tsx
const textRef = useParallax<HTMLDivElement>();

<div ref={textRef} className="parallax-from-left">
  <h2>Título</h2>
  <p>Descripción</p>
</div>
```

### 6. `parallax-from-right` (Desde la Derecha)
Elemento aparece deslizándose desde la derecha.

```tsx
const imageRef = useParallax<HTMLImageElement>();

<img ref={imageRef} className="parallax-from-right" src="..." alt="..." />
```

## 🎛️ Hook useParallax

### Opciones Personalizadas

```tsx
const elementRef = useParallax<HTMLDivElement>({
  threshold: 0.2,              // 20% del elemento visible para activar
  rootMargin: '0px 0px -50px 0px'  // Activar 50px antes del viewport
});
```

### Opciones Disponibles:

- **threshold**: Porcentaje del elemento visible para activar (0.0 - 1.0)
  - `0.1` = 10% visible (por defecto)
  - `0.5` = 50% visible
  - `1.0` = 100% visible

- **rootMargin**: Margen del viewport para ajustar cuándo se activa
  - `'0px 0px -100px 0px'` (por defecto) = activa 100px antes de ser visible
  - `'0px 0px 0px 0px'` = activa justo cuando entra al viewport
  - `'100px 0px 0px 0px'` = activa 100px después de ser visible

## 📖 Ejemplos Completos

### Ejemplo 1: Galería de Imágenes
```tsx
import { useParallax } from '@/hooks/useParallax';

function ImageGallery() {
  const image1Ref = useParallax<HTMLImageElement>();
  const image2Ref = useParallax<HTMLImageElement>();
  const image3Ref = useParallax<HTMLImageElement>();

  return (
    <div className="grid grid-cols-3 gap-8">
      <img ref={image1Ref} className="parallax-image" src="/img1.jpg" alt="Image 1" />
      <img ref={image2Ref} className="parallax-image" src="/img2.jpg" alt="Image 2" />
      <img ref={image3Ref} className="parallax-image" src="/img3.jpg" alt="Image 3" />
    </div>
  );
}
```

### Ejemplo 2: Sección con Texto e Imagen
```tsx
import { useParallax } from '@/hooks/useParallax';

function FeatureSection() {
  const textRef = useParallax<HTMLDivElement>();
  const imageRef = useParallax<HTMLImageElement>();

  return (
    <div className="flex gap-12 items-center">
      <div ref={textRef} className="parallax-from-left flex-1">
        <h2>Título de la Sección</h2>
        <p>Descripción detallada...</p>
      </div>
      <img 
        ref={imageRef} 
        className="parallax-from-right flex-1" 
        src="/feature.jpg" 
        alt="Feature" 
      />
    </div>
  );
}
```

### Ejemplo 3: Cards en Secuencia
```tsx
import { useParallax } from '@/hooks/useParallax';

function PricingCards() {
  const card1Ref = useParallax<HTMLDivElement>({ threshold: 0.2 });
  const card2Ref = useParallax<HTMLDivElement>({ threshold: 0.2 });
  const card3Ref = useParallax<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div className="flex gap-6">
      <div ref={card1Ref} className="parallax-image flex-1 bg-white p-6 rounded-lg">
        <h3>Plan Básico</h3>
        <p>$9/mes</p>
      </div>
      <div ref={card2Ref} className="parallax-image flex-1 bg-white p-6 rounded-lg">
        <h3>Plan Pro</h3>
        <p>$29/mes</p>
      </div>
      <div ref={card3Ref} className="parallax-image flex-1 bg-white p-6 rounded-lg">
        <h3>Plan Enterprise</h3>
        <p>$99/mes</p>
      </div>
    </div>
  );
}
```

## ⚙️ Personalización en CSS

Si necesitas una animación completamente personalizada, puedes crear tu propia clase:

```css
/* En index.css */
.my-custom-parallax {
  opacity: 0;
  transform: scale(0.8) rotate(-10deg);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.my-custom-parallax.is-visible {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
```

Luego úsala igual que las demás:

```tsx
const elementRef = useParallax<HTMLDivElement>();

<div ref={elementRef} className="my-custom-parallax">
  Contenido personalizado
</div>
```

## 🎨 Propiedades CSS de las Animaciones

Todas las animaciones parallax usan:

- **opacity**: Transición de 0 → 1 (invisible → visible)
- **transform**: Movimiento del elemento
  - `translateY(60px)` → `translateY(0)` (vertical)
  - `translateX(60px)` → `translateX(0)` (horizontal)
- **transition**: timing-function = `ease-out` (suave al final)
- **will-change**: Automático por el navegador para optimización GPU

## 📱 Responsive Behavior

- **Mobile**: `parallax-image-desktop-only` no tiene efecto, elementos visibles desde el inicio
- **Tablet/Desktop (≥768px)**: Todas las clases activas, efecto parallax completo

## 💡 Tips de Rendimiento

1. **No abuses del efecto**: Usa parallax solo en elementos clave (3-6 por página máximo)
2. **Umbral óptimo**: `threshold: 0.1` es bueno para la mayoría de casos
3. **GPU Acceleration**: El navegador automáticamente usa GPU para `transform` y `opacity`
4. **Unobserve**: El hook automáticamente limpia los observers al desmontar

## 🚀 Implementación Actual

✅ Hero Section (HomeDesktop.tsx):
- 4 cards con `parallax-image-desktop-only`
- Solo se animan en desktop (≥768px)
- Efecto suave y profesional

## 🔮 Próximos Pasos

Puedes aplicar estas clases a:
- Imágenes en Features.tsx
- Cards en Pricing.tsx
- Timeline images en AboutUs.tsx
- Testimonials en Testimonial.tsx
- Form sections en Contact.tsx

¡Solo importa el hook y aplica la clase correspondiente!
