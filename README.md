# Suzuki Jimny 2027 — app de ventas (PWA)

App estilo Toyota para presentar y vender el Suzuki Jimny 2027 (3 y 5 puertas) desde el celular.

**En vivo:** https://haroldco45.github.io/suzuki-jimny-2027/

## Qué trae
- Portada con selector 3 puertas / 5 puertas (cambia foto, precio desde y ángulos)
- 9 beneficios explicados en lenguaje de cliente + bloque para Bajo Cauca, Córdoba y Sucre
- Esquema interactivo de ángulos de ataque, ventral y salida
- 8 versiones 2027 con precio y equipamiento (2 de 3 puertas, 6 de 5 puertas), cada una con botón de cotizar por WhatsApp
- Galería de 11 fotos oficiales de Suzuki Colombia
- 5 videos (1 oficial Suzuki + 4 reseñas en YouTube, carga liviana)
- Ficha técnica completa lado a lado + enlaces a las fichas oficiales en PDF
- SOAT, matrícula y costos de mantenimiento publicados por Suzuki
- Simulador de cuota (precio, inicial, plazo, tasa editable) que envía la simulación por WhatsApp
- Control de sugerido Vibras Motor con código de referido; a Harold le llega cada cliente (no guarda datos; autorización Ley 1581 de 2012)
- Instalable como app; guarda las fotos la primera vez para verlas sin señal

## Control de sugerido (Vibras Motor)
Todo botón de compra (Lo quiero, cotizar versión, prueba de manejo, crédito del simulador) abre el mismo formulario.
Al enviarlo, el cliente recibe un código único `VM-SUZ-AAMMDD-NNNN` (fecha en hora de Colombia) y
**el primer WhatsApp siempre sale hacia Harold** con nombre, celular, municipio, versión, precio, forma de pago,
simulación y código. Si hay número de concesionario, el paso 2 envía la misma solicitud al asesor Suzuki,
con la nota de comisión de Vibras Positivas HM.

En `index.html`, bloque `CONFIG` al inicio del script:
```js
harold:        { nombre: 'Harold Marín', marca: 'Vibras Motor', whatsapp: '573117700431' },
concesionario: { nombre: 'concesionario Suzuki', whatsapp: '' }, // poner el número cuando firme el acuerdo
prefijo: 'VM-SUZ',
```

## Cambiar precios
En el mismo script, objeto `CARROS` → `versiones` → `precio`.

## Publicar en GitHub Pages
1. Crear el repo `suzuki-jimny-2027` en la cuenta `haroldco45`.
2. Subir todos los archivos de esta carpeta a la raíz.
3. Settings → Pages → Branch `main`, carpeta `/ (root)`.

## Fuentes (consultadas el 2 de octubre de 2026)
- Precios por versión: Autozen, concesionario autorizado Suzuki (Medellín, Rionegro, Montería, Sincelejo).
- Precio sugerido, bono, SOAT, matrícula, mantenimiento y fotos: suzukiautos.com.co.
- Precios de mercado 0 km: TuCarro y Mercado Libre.
Los precios cambian; revíselos antes de cada presentación.
