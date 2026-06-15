const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");
let activeLesson = document.querySelector(".lesson-card");

function getLessons() {
  return Array.from(document.querySelectorAll(".lesson-card"));
}

function getContentLessons() {
  return getLessons().filter((lesson) => !lesson.classList.contains("evaluation-card"));
}

function getStepChips() {
  return Array.from(document.querySelectorAll(".step-chip"));
}

function enhanceLessonLayout() {
  getLessons().forEach((lesson) => {
    const top = lesson.querySelector(".lesson-top");
    const content = top?.children[0];
    const videoArea = top?.children[1];
    const title = lesson.querySelector("h3")?.textContent || "Subcontenido";

    if (videoArea?.querySelector(".video-add")) {
      videoArea.remove();
    }

    if (!lesson.querySelector(".lesson-development")) {
      const development = document.createElement("div");
      development.className = "lesson-development";
      development.innerHTML = `
        <div class="development-box">
          <strong>Desarrollo de la tematica</strong>
          <ul>
            <li>Concepto principal de ${title.toLowerCase()}.</li>
            <li>Aplicacion dentro de la gestion comercial.</li>
            <li>Criterios que el gerente debe observar durante la ejecucion.</li>
          </ul>
        </div>
        <div class="development-box">
          <strong>Enfoque para exposicion</strong>
          <ul>
            <li>Explicar con ejemplo practico.</li>
            <li>Conectar el tema con decisiones gerenciales.</li>
            <li>Cerrar con una accion concreta para el equipo.</li>
          </ul>
        </div>
      `;
      top.insertAdjacentElement("afterend", development);
    }

    if (!lesson.querySelector(".lesson-actions")) {
      const actions = document.createElement("div");
      actions.className = "lesson-actions";

      if (!lesson.classList.contains("evaluation-card")) {
        const completion = document.createElement("label");
        completion.className = "completion-check";
        completion.innerHTML = `<input type="checkbox" class="lesson-complete-check"> Marcar aprendizaje`;
        actions.append(completion);
      }

      content?.appendChild(actions);
    }

    if (!lesson.querySelector(".icon-maximize")) {
      const panoramaButton = document.createElement("button");
      panoramaButton.className = "icon-maximize";
      panoramaButton.type = "button";
      panoramaButton.title = "Abrir desarrollo en pantalla completa";
      panoramaButton.setAttribute("aria-label", "Abrir desarrollo en pantalla completa");
      panoramaButton.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3H3v5"></path>
          <path d="M16 3h5v5"></path>
          <path d="M21 16v5h-5"></path>
          <path d="M3 16v5h5"></path>
          <path d="M3 3l6 6"></path>
          <path d="M21 3l-6 6"></path>
          <path d="M21 21l-6-6"></path>
          <path d="M3 21l6-6"></path>
        </svg>
      `;
      lesson.appendChild(panoramaButton);
    }
  });
}

function applyCustomLessonContent() {
  if (document.body.dataset.customModule === "manual") return;

  const moduleTitle = document.querySelector("h1")?.textContent?.trim();
  const firstLesson = document.querySelector('.lesson-card[data-lesson="1"]');
  const secondLesson = document.querySelector('.lesson-card[data-lesson="2"]');
  const thirdLesson = document.querySelector('.lesson-card[data-lesson="3"]');
  const fourthLesson = document.querySelector('.lesson-card[data-lesson="4"]');
  const fifthLesson = document.querySelector('.lesson-card[data-lesson="5"]');
  const sixthLesson = document.querySelector('.lesson-card[data-lesson="6"]');
  const seventhLesson = document.querySelector('.lesson-card[data-lesson="7"]');
  const development = firstLesson?.querySelector(".lesson-development");
  const secondDevelopment = secondLesson?.querySelector(".lesson-development");
  const thirdDevelopment = thirdLesson?.querySelector(".lesson-development");
  const fourthDevelopment = fourthLesson?.querySelector(".lesson-development");
  const fifthDevelopment = fifthLesson?.querySelector(".lesson-development");
  const sixthDevelopment = sixthLesson?.querySelector(".lesson-development");
  const seventhDevelopment = seventhLesson?.querySelector(".lesson-development");
  if (!development) return;

  if (moduleTitle === "Gerencia") {

  development.className = "lesson-development impact-deck";
  firstLesson.querySelector("h3").textContent = "De ejecutor a estratega";
  development.innerHTML = `
    <section class="impact-sheet impact-slide impact-white">
      <span class="sheet-kicker">Hoja resumen</span>
      <h4>De vender personalmente a dirigir resultados</h4>
      <p>El ascenso a una gerencia comercial exige cambiar la forma de ver el trabajo: el impacto ya no se mide solo por la venta propia, sino por la capacidad de hacer que el equipo produzca resultados sostenibles.</p>
      <div class="summary-points">
        <div class="summary-point">
          <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 15l3-3 3 2 5-6"></path></svg></div>
          <div><strong>Cambio de mirada</strong><span>De ejecutar actividades comerciales a observar el negocio con vision integral.</span></div>
        </div>
        <div class="summary-point">
          <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></div>
          <div><strong>Cambio de responsabilidad</strong><span>De responder por resultados individuales a responder por el desempeno del equipo completo.</span></div>
        </div>
        <div class="summary-point">
          <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 4-8 4-8-4 8-4z"></path><path d="M4 12l8 4 8-4"></path><path d="M4 17l8 4 8-4"></path></svg></div>
          <div><strong>Cambio de enfoque</strong><span>De ejecutar ventas a desarrollar personas, optimizar procesos y construir estrategias.</span></div>
        </div>
      </div>
    </section>
    <section class="impact-sheet dark impact-slide impact-green">
      <span class="sheet-kicker">Comparativa gerencial</span>
      <h4>El salto profesional que cambia la gestion</h4>
      <div class="comparison-grid">
        <div class="comparison-col">
          <h5>Vendedor</h5>
          <ul>
            <li>Prospecta y negocia oportunidades propias.</li>
            <li>Elabora propuestas y da seguimiento individual.</li>
            <li>Su exito depende de sus cierres personales.</li>
            <li>Opera sobre actividades inmediatas.</li>
          </ul>
        </div>
        <div class="comparison-col light">
          <h5>Gerente comercial</h5>
          <ul>
            <li>Dirige prioridades y resultados del equipo.</li>
            <li>Desarrolla personas y administra recursos.</li>
            <li>Optimiza procesos y controla indicadores.</li>
            <li>Construye estrategias para objetivos organizacionales.</li>
          </ul>
        </div>
      </div>
      <div class="impact-callout">Idea fuerza: el gerente deja de ser el mejor ejecutor para convertirse en multiplicador de resultados.</div>
    </section>
  `;

  if (secondDevelopment) {
    secondDevelopment.className = "lesson-development impact-deck";
    secondLesson.querySelector("h3").textContent = "Principales diferencias";
    secondLesson.querySelector(".lesson-top p").textContent = "El gerente debe distinguir entre actividades operativas de corto plazo y funciones estrategicas que impulsan el crecimiento del negocio.";
    secondDevelopment.innerHTML = `
      <section class="impact-sheet impact-slide impact-white">
        <span class="sheet-kicker">Hoja resumen</span>
        <h4>Operar no es lo mismo que dirigir</h4>
        <p>En toda organizacion existen actividades operativas y actividades estrategicas. La diferencia esta en el horizonte de impacto: unas resuelven la ejecucion diaria; las otras orientan recursos, decisiones y crecimiento.</p>
        <div class="summary-points">
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg></div>
            <div><strong>Operativo</strong><span>Ejecucion diaria de tareas especificas para lograr objetivos inmediatos.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16l3-4 3 2 4-7"></path></svg></div>
            <div><strong>Estrategico</strong><span>Planificacion, direccion y control de recursos para resultados de mediano y largo plazo.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3v18"></path><path d="M5 8h14"></path><path d="M7 16h10"></path></svg></div>
            <div><strong>Riesgo</strong><span>Cuando el gerente se queda operando, descuida lo que verdaderamente agrega valor.</span></div>
          </div>
        </div>
      </section>
      <section class="impact-sheet dark impact-slide impact-green">
        <span class="sheet-kicker">Comparativa clave</span>
        <h4>Actividades operativas vs. responsabilidades estrategicas</h4>
        <div class="comparison-grid">
          <div class="comparison-col">
            <h5>Operativas</h5>
            <ul>
              <li>Prospeccion de clientes.</li>
              <li>Llamadas comerciales y visitas.</li>
              <li>Elaboracion de cotizaciones.</li>
              <li>Seguimiento de oportunidades.</li>
              <li>Negociacion y cierre de ventas.</li>
            </ul>
          </div>
          <div class="comparison-col light">
            <h5>Estrategicas</h5>
            <ul>
              <li>Elaboracion del plan comercial.</li>
              <li>Definicion de metas de ventas.</li>
              <li>Diseno de estrategias comerciales.</li>
              <li>Gestion de indicadores y talento.</li>
              <li>Analisis de resultados y toma de decisiones.</li>
            </ul>
          </div>
        </div>
        <div class="impact-callout">Idea fuerza: delegar lo operativo libera al gerente para dirigir lo que impulsa el crecimiento.</div>
      </section>
    `;
  }

  if (thirdDevelopment) {
    thirdDevelopment.className = "lesson-development impact-deck";
    thirdLesson.querySelector("h3").textContent = "Pensamiento estrategico";
    thirdLesson.querySelector(".lesson-top p").textContent = "Analizar el entorno, identificar oportunidades y disenar acciones para alcanzar objetivos sostenibles.";
    thirdDevelopment.innerHTML = `
      <section class="impact-sheet impact-slide impact-white">
        <span class="sheet-kicker">Hoja resumen</span>
        <h4>Anticipar antes de reaccionar</h4>
        <p>El pensamiento estrategico permite al gerente comercial mirar mas alla de los resultados actuales. Su valor esta en anticipar escenarios, preparar decisiones y orientar acciones que sostengan el crecimiento.</p>
        <div class="summary-points">
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 12h18"></path><path d="M12 3v18"></path><circle cx="12" cy="12" r="7"></circle></svg></div>
            <div><strong>Analizar el entorno</strong><span>Leer mercado, clientes, competencia y riesgos antes de decidir.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16l4-5 3 3 4-7"></path></svg></div>
            <div><strong>Identificar oportunidades</strong><span>Detectar expansion, nuevos segmentos y posibilidades de crecimiento.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M5 19l14-14"></path><path d="M14 5h5v5"></path><path d="M5 5h5"></path><path d="M5 5v5"></path></svg></div>
            <div><strong>Disenar acciones</strong><span>Convertir informacion en estrategias alineadas a objetivos organizacionales.</span></div>
          </div>
        </div>
      </section>
      <section class="impact-sheet dark impact-slide impact-green">
        <span class="sheet-kicker">Mapa estrategico</span>
        <h4>Factores que el gerente debe observar</h4>
        <div class="comparison-grid">
          <div class="comparison-col">
            <h5>Senales del entorno</h5>
            <ul>
              <li>Tendencias del mercado.</li>
              <li>Cambios en el comportamiento de clientes.</li>
              <li>Movimientos de la competencia.</li>
              <li>Riesgos que pueden afectar las ventas.</li>
            </ul>
          </div>
          <div class="comparison-col light">
            <h5>Decisiones gerenciales</h5>
            <ul>
              <li>Evaluar oportunidades de expansion.</li>
              <li>Explorar nuevos segmentos comerciales.</li>
              <li>Revisar indicadores e informacion critica.</li>
              <li>Planificar estrategias orientadas al crecimiento.</li>
            </ul>
          </div>
        </div>
        <div class="impact-callout">Idea fuerza: las decisiones estrategicas de hoy construyen los resultados comerciales del futuro.</div>
      </section>
    `;
  }

  if (fourthDevelopment) {
    fourthDevelopment.className = "lesson-development impact-deck";
    fourthLesson.querySelector("h3").textContent = "Lider de resultados";
    fourthLesson.querySelector(".lesson-top p").textContent = "Liderar no es solo supervisar: es desarrollar personas, fortalecer compromiso y convertir acciones del equipo en resultados.";
    fourthDevelopment.innerHTML = `
      <section class="impact-sheet impact-slide impact-white">
        <span class="sheet-kicker">Hoja resumen</span>
        <h4>Liderar personas para alcanzar objetivos</h4>
        <p>La funcion principal del Gerente Comercial es movilizar al equipo hacia resultados. El liderazgo efectivo influye positivamente, desarrolla capacidades y crea una cultura orientada al desempeno.</p>
        <div class="summary-points">
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M4 21v-2a3 3 0 0 1 3-3"></path><path d="M20 21v-2a3 3 0 0 0-3-3"></path></svg></div>
            <div><strong>Desarrollar personas</strong><span>Formar, acompanar y fortalecer continuamente a cada integrante del equipo.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 12h5l3 8 4-16 3 8h1"></path></svg></div>
            <div><strong>Orientar desempeno</strong><span>Los resultados son consecuencia directa de las acciones realizadas por el equipo.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 20v-6"></path><path d="M6 20V10"></path><path d="M18 20V4"></path></svg></div>
            <div><strong>Elevar resultados</strong><span>Transformar equipos ordinarios en equipos de alto desempeno.</span></div>
          </div>
        </div>
      </section>
      <section class="impact-sheet dark impact-slide impact-green">
        <span class="sheet-kicker">Mapa de liderazgo</span>
        <h4>Competencias para dirigir resultados</h4>
        <div class="comparison-grid">
          <div class="comparison-col">
            <h5>Influencia y compromiso</h5>
            <ul>
              <li>Comunicacion clara.</li>
              <li>Capacidad de influencia.</li>
              <li>Capacidad de motivacion.</li>
              <li>Resolucion de conflictos.</li>
            </ul>
          </div>
          <div class="comparison-col light">
            <h5>Disciplina y desempeno</h5>
            <ul>
              <li>Orientacion a resultados.</li>
              <li>Disciplina en la ejecucion.</li>
              <li>Desarrollo del talento humano.</li>
              <li>Seguimiento permanente.</li>
            </ul>
          </div>
        </div>
        <div class="impact-callout">Idea fuerza: un lider comercial no solo exige resultados; crea las condiciones para que los resultados ocurran.</div>
      </section>
    `;
  }

  if (fifthDevelopment) {
    fifthDevelopment.className = "lesson-development impact-deck";
    fifthLesson.querySelector("h3").textContent = "Gestion basada en resultados";
    fifthLesson.querySelector(".lesson-top p").textContent = "Transformar objetivos estrategicos en acciones concretas, medibles y corregibles.";
    fifthDevelopment.innerHTML = `
      <section class="impact-sheet impact-slide impact-white">
        <span class="sheet-kicker">Hoja resumen</span>
        <h4>Objetivos que se convierten en acciones medibles</h4>
        <p>La gestion comercial moderna exige decisiones orientadas al logro de resultados verificables. El gerente debe convertir objetivos estrategicos en acciones concretas, acompanadas de indicadores que permitan medir avance y corregir desviaciones.</p>
        <div class="summary-points">
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
            <div><strong>Resultados medibles</strong><span>Las decisiones deben traducirse en indicadores claros y verificables.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 7v5l3 2"></path><path d="M21 3v6h-6"></path></svg></div>
            <div><strong>Seguimiento oportuno</strong><span>Evaluar avances permite detectar desviaciones antes de que afecten los resultados.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M6 3v6h6"></path><path d="M18 21v-6h-6"></path><path d="M6 9a7 7 0 0 1 11.7-3.2"></path><path d="M18 15a7 7 0 0 1-11.7 3.2"></path></svg></div>
            <div><strong>Acciones correctivas</strong><span>La informacion debe conducir a ajustes concretos para sostener el desempeno.</span></div>
          </div>
        </div>
      </section>
      <section class="impact-sheet dark impact-slide impact-green">
        <span class="sheet-kicker">Tablero de resultados</span>
        <h4>Perspectivas que debe revisar el gerente</h4>
        <div class="comparison-grid">
          <div class="comparison-col">
            <h5>Resultados comerciales</h5>
            <ul>
              <li>Resultados de ventas.</li>
              <li>Crecimiento comercial.</li>
              <li>Conversion de oportunidades.</li>
              <li>Cumplimiento de actividades comerciales.</li>
            </ul>
          </div>
          <div class="comparison-col light">
            <h5>Salud del equipo y clientes</h5>
            <ul>
              <li>Productividad del equipo.</li>
              <li>Captacion de nuevos clientes.</li>
              <li>Retencion de clientes.</li>
              <li>Desviaciones y acciones correctivas.</li>
            </ul>
          </div>
        </div>
        <div class="impact-callout">Idea fuerza: lo que no se mide no se puede dirigir, y lo que no se corrige termina afectando el resultado.</div>
      </section>
    `;
  }

  if (sixthDevelopment) {
    sixthDevelopment.className = "lesson-development impact-deck pillars-deck";
    sixthLesson.querySelector("h3").textContent = "Los cinco pilares de la gerencia comercial";
    sixthLesson.querySelector(".lesson-top p").textContent = "Cinco responsabilidades que sostienen el crecimiento comercial de la organizacion.";
    sixthDevelopment.innerHTML = `
      <section class="impact-sheet impact-slide impact-white">
        <span class="sheet-kicker">Hoja resumen</span>
        <h4>La base del rol gerencial comercial</h4>
        <p>La gestion del Gerente Comercial puede resumirse en cinco pilares que ordenan su responsabilidad: planificar, abrir oportunidades, dirigir ventas, desarrollar clientes y fortalecer el talento comercial.</p>
        <div class="summary-points">
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 15l3-3 3 2 5-6"></path></svg></div>
            <div><strong>Equilibrio gerencial</strong><span>El gerente no puede depender de una sola funcion; debe integrar estrategia, ventas, clientes y equipo.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 4-8 4-8-4 8-4Z"></path><path d="M4 12l8 4 8-4"></path><path d="M4 17l8 4 8-4"></path></svg></div>
            <div><strong>Responsabilidad integral</strong><span>Cada pilar conecta una necesidad del negocio con una accion concreta de direccion comercial.</span></div>
          </div>
          <div class="summary-point">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 12h5l2 7 4-14 2 7h5"></path></svg></div>
            <div><strong>Crecimiento sostenible</strong><span>Cuando los cinco pilares se gestionan con disciplina, la organizacion mejora resultados y continuidad.</span></div>
          </div>
        </div>
      </section>
      <section class="impact-sheet dark impact-slide impact-green pillar-slide">
        <span class="sheet-kicker">Cinco pilares</span>
        <h4>Responsabilidades que sostienen la gestion comercial</h4>
        <div class="pillar-grid">
          <article class="pillar-card">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
            <h5>Planificacion comercial</h5>
            <p>Define objetivos, metas, presupuestos y estrategias para orientar la gestion.</p>
          </article>
          <article class="pillar-card">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
            <h5>Desarrollo de negocios</h5>
            <p>Identifica oportunidades, mercados, segmentos y alianzas para crecer.</p>
          </article>
          <article class="pillar-card">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16V9"></path><path d="M12 16V5"></path><path d="M17 16v-7"></path></svg></div>
            <h5>Gestion de ventas</h5>
            <p>Supervisa y controla las actividades comerciales que permiten cumplir metas.</p>
          </article>
          <article class="pillar-card">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></div>
            <h5>Administracion de clientes</h5>
            <p>Fideliza, retiene y desarrolla relaciones sostenibles con clientes estrategicos.</p>
          </article>
          <article class="pillar-card">
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            <h5>Talento comercial</h5>
            <p>Desarrolla, capacita y fortalece las competencias del equipo de ventas.</p>
          </article>
        </div>
        <div class="impact-callout">Idea fuerza: el gerente comercial genera valor cuando mantiene estos cinco pilares en equilibrio.</div>
      </section>
    `;
  }
    return;
  }

  if (moduleTitle === "Funciones del Gerente Comercial") {
    const moduleTwoLessons = [
      {
        lesson: firstLesson,
        development,
        title: "Planificacion y direccion comercial",
        summary: "Define objetivos, metas, presupuesto, prioridades y seguimiento del plan comercial.",
        kicker: "Funcion estrategica",
        headline: "Convertir objetivos en una ruta comercial clara",
        text: "La planificacion comercial permite ordenar esfuerzos, asignar recursos y orientar al equipo hacia resultados definidos. El gerente transforma metas empresariales en prioridades comerciales accionables.",
        points: ["Objetivos y metas comerciales.", "Presupuesto y recursos.", "Prioridades de mercado.", "Seguimiento del plan comercial."]
      },
      {
        lesson: secondLesson,
        development: secondDevelopment,
        title: "Gestion de ventas",
        summary: "Supervisa actividades, embudo, oportunidades, propuestas, cierres y resultados.",
        kicker: "Supervision comercial",
        headline: "Dirigir el embudo para sostener resultados",
        text: "Gestionar ventas no es esperar cierres; es controlar el avance de oportunidades, detectar bloqueos, revisar propuestas y acompanar al equipo en cada etapa relevante.",
        points: ["Embudo comercial.", "Seguimiento de oportunidades.", "Control de propuestas.", "Revision de cierres y desviaciones."]
      },
      {
        lesson: thirdLesson,
        development: thirdDevelopment,
        title: "Desarrollo de negocios",
        summary: "Identifica nuevos mercados, segmentos, oportunidades y alianzas de crecimiento.",
        kicker: "Crecimiento",
        headline: "Abrir oportunidades antes de que el mercado las exija",
        text: "El gerente debe mirar mas alla de la venta inmediata para construir nuevas fuentes de crecimiento: segmentos, cuentas, alianzas y oportunidades sostenibles.",
        points: ["Nuevos mercados.", "Segmentos comerciales.", "Alianzas estrategicas.", "Oportunidades de expansion."]
      },
      {
        lesson: fourthLesson,
        development: fourthDevelopment,
        title: "Gestion de clientes estrategicos",
        summary: "Fortalece fidelizacion, retencion, postventa y relaciones comerciales sostenibles.",
        kicker: "Clientes clave",
        headline: "Proteger y desarrollar relaciones de alto valor",
        text: "Los clientes estrategicos requieren seguimiento gerencial, planes de relacionamiento, retencion y crecimiento de cuenta para sostener ingresos de largo plazo.",
        points: ["Fidelizacion.", "Retencion.", "Postventa.", "Desarrollo de cuentas estrategicas."]
      },
      {
        lesson: fifthLesson,
        development: fifthDevelopment,
        title: "Licitaciones y negocios institucionales",
        summary: "Coordina ofertas, documentacion, seguimiento y cumplimiento normativo.",
        kicker: "Gestion institucional",
        headline: "Competir con orden, evidencia y cumplimiento",
        text: "Las oportunidades institucionales demandan preparacion, control documental, coordinacion interna y seguimiento riguroso para reducir riesgos y mejorar la probabilidad de adjudicacion.",
        points: ["Lectura de requerimientos.", "Documentacion y ofertas.", "Coordinacion interna.", "Cumplimiento y seguimiento."]
      },
      {
        lesson: sixthLesson,
        development: sixthDevelopment,
        title: "Administracion del talento comercial",
        summary: "Desarrolla competencias, capacita, acompana y fortalece el desempeno del equipo.",
        kicker: "Equipo comercial",
        headline: "Desarrollar personas para multiplicar resultados",
        text: "El gerente comercial debe formar, acompanar y fortalecer competencias para que el desempeno no dependa de esfuerzos aislados, sino de un equipo con capacidades crecientes.",
        points: ["Capacitacion.", "Acompanamiento.", "Coaching comercial.", "Evaluacion de desempeno."]
      },
      {
        lesson: seventhLesson,
        development: seventhDevelopment,
        title: "Decision basada en informacion",
        summary: "Usa datos, indicadores y analisis para decidir con precision y reducir riesgos.",
        kicker: "Direccion con datos",
        headline: "Tomar decisiones con evidencia comercial",
        text: "La informacion permite entender avances, anticipar desviaciones y decidir con mayor precision. El gerente debe convertir datos en acciones concretas para mejorar resultados.",
        points: ["Indicadores comerciales.", "Analisis de resultados.", "Control de riesgos.", "Acciones correctivas."]
      }
    ];

    moduleTwoLessons.forEach((item, index) => {
      if (!item.lesson || !item.development) return;
      item.development.className = "lesson-development impact-deck";
      item.lesson.querySelector("h3").textContent = item.title;
      item.lesson.querySelector(".lesson-top p").textContent = item.summary;
      item.development.innerHTML = `
        <section class="impact-sheet impact-slide ${index % 2 ? "dark impact-green" : "impact-white"}">
          <span class="sheet-kicker">${item.kicker}</span>
          <h4>${item.headline}</h4>
          <p>${item.text}</p>
          <div class="summary-points">
            ${item.points.map((point) => `
              <div class="summary-point">
                <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
                <div><strong>${point}</strong><span>Responsabilidad clave dentro de la gestion comercial.</span></div>
              </div>
            `).join("")}
          </div>
        </section>
      `;
    });

    if (development) {
      development.className = "lesson-development impact-deck";
      firstLesson.querySelector("h3").textContent = "Planificacion y direccion comercial";
      firstLesson.querySelector(".lesson-top p").textContent = "Define resultados esperados, recursos, estrategias y seguimiento para orientar la gestion comercial.";
      development.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Resumen de lectura</span>
          <h4>Planificar es convertir la intencion comercial en direccion</h4>
          <p>Toda organizacion exitosa construye resultados a partir de una planificacion comercial clara. Planificar significa definir con anticipacion que resultados se desean alcanzar, que recursos seran necesarios y que estrategias se utilizaran para cumplir los objetivos establecidos.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 15l3-3 3 2 5-6"></path></svg></div>
              <div><strong>Evita la improvisacion</strong><span>Sin planificacion, las ventas dependen de esfuerzos individuales o de circunstancias favorables del mercado.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 4-8 4-8-4 8-4Z"></path><path d="M4 12l8 4 8-4"></path><path d="M4 17l8 4 8-4"></path></svg></div>
              <div><strong>Ordena recursos</strong><span>Permite orientar presupuesto, tiempo, equipo y prioridades hacia objetivos claramente definidos.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 12h5l2 7 4-14 2 7h5"></path></svg></div>
              <div><strong>Reduce incertidumbre</strong><span>Una ruta comercial clara da estabilidad, seguimiento y capacidad de correccion durante la ejecucion.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Responsabilidad del gerente</span>
          <h4>Construir, coordinar y dar seguimiento al Plan Comercial Anual</h4>
          <p>El Gerente Comercial participa activamente en la construccion del plan, alineando metas, prioridades y estrategias con los objetivos generales de la organizacion.</p>
          <div class="pillar-grid module-two-responsibilities">
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
              <h5>Metas comerciales</h5>
              <p>Participar en la definicion de metas alcanzables y alineadas al negocio.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
              <h5>Presupuesto</h5>
              <p>Colaborar en la elaboracion de presupuestos de ventas y recursos.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16V9"></path><path d="M12 16V5"></path><path d="M17 16v-7"></path></svg></div>
              <h5>Estrategias</h5>
              <p>Disenar acciones para crecimiento, expansion y fortalecimiento comercial.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M6 3v6h6"></path><path d="M18 21v-6h-6"></path><path d="M6 9a7 7 0 0 1 11.7-3.2"></path><path d="M18 15a7 7 0 0 1-11.7 3.2"></path></svg></div>
              <h5>Ejecucion y seguimiento</h5>
              <p>Coordinar la ejecucion del plan y revisar el cumplimiento de objetivos.</p>
            </article>
          </div>
          <div class="impact-callout">Idea fuerza: el plan comercial debe convertirse en la guia de todas las actividades del equipo de ventas.</div>
        </section>
      `;
    }

    if (secondDevelopment) {
      secondDevelopment.className = "lesson-development impact-deck";
      secondLesson.querySelector("h3").textContent = "Gestion de ventas";
      secondLesson.querySelector(".lesson-top p").textContent = "Coordina desempeño, supervisa el embudo comercial y usa indicadores para dirigir resultados.";
      secondDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Desempeno comercial</span>
          <h4>Gestionar ventas es dirigir actividades, no solo exigir resultados</h4>
          <p>La gestion de ventas consiste en coordinar y supervisar las actividades comerciales necesarias para alcanzar los objetivos definidos por la organizacion. El gerente debe asegurar que cada integrante conozca sus responsabilidades, metas y expectativas de desempeno.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></div>
              <div><strong>Direccion clara</strong><span>El equipo debe entender que se espera, que metas debe cumplir y como sera evaluado.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
              <div><strong>Seguimiento permanente</strong><span>El gerente acompana, corrige y apoya la ejecucion antes de que el resultado se deteriore.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M7 16V9"></path><path d="M12 16V5"></path><path d="M17 16v-7"></path></svg></div>
              <div><strong>Apoyo al logro</strong><span>Gestionar ventas implica remover bloqueos, orientar prioridades y facilitar el cumplimiento.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Embudo comercial</span>
          <h4>Supervisar oportunidades para anticipar resultados</h4>
          <p>El gerente debe observar permanentemente como avanzan las oportunidades dentro del proceso comercial. Administrar el embudo permite conocer el volumen, la calidad y el estado real de la gestion de ventas.</p>
          <div class="pillar-grid module-two-responsibilities">
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 5h18"></path><path d="M6 12h12"></path><path d="M10 19h4"></path></svg></div>
              <h5>Prospectos</h5>
              <p>Cuantos contactos o empresas pueden convertirse en oportunidades.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 7v5l3 2"></path><path d="M21 3v6h-6"></path></svg></div>
              <h5>Oportunidades activas</h5>
              <p>Que negocios estan en seguimiento y requieren avance comercial.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg></div>
              <h5>Propuestas</h5>
              <p>Cuantas soluciones fueron presentadas y necesitan seguimiento.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
              <h5>Cierres proyectados</h5>
              <p>Que negociaciones pueden convertirse en resultado comercial.</p>
            </article>
          </div>
          <div class="impact-callout">Idea fuerza: el embudo permite detectar problemas antes de que afecten los resultados comerciales.</div>
        </section>
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Indicadores</span>
          <h4>Medir para decidir con precision</h4>
          <p>La supervision comercial moderna requiere indicadores que midan objetivamente el desempeno. La informacion generada por estos datos se convierte en la base para tomar decisiones, corregir desviaciones y orientar mejor al equipo.</p>
          <div class="metric-grid">
            <div><strong>Cumplimiento</strong><span>Metas comerciales alcanzadas frente a lo planificado.</span></div>
            <div><strong>Conversion</strong><span>Capacidad de transformar oportunidades en ventas.</span></div>
            <div><strong>Productividad</strong><span>Desempeno individual y actividades ejecutadas.</span></div>
            <div><strong>Crecimiento</strong><span>Ventas, nuevos clientes y expansion comercial.</span></div>
          </div>
        </section>
      `;
    }

    if (thirdDevelopment) {
      thirdDevelopment.className = "lesson-development impact-deck";
      thirdLesson.querySelector("h3").textContent = "Desarrollo de negocios";
      thirdLesson.querySelector(".lesson-top p").textContent = "Busca crecimiento sostenido mediante nuevos mercados, segmentos, oportunidades y alianzas.";
      thirdDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Crecimiento sostenido</span>
          <h4>El crecimiento comercial no ocurre de manera espontanea</h4>
          <p>Uno de los principales desafios de toda organizacion consiste en mantener crecimiento a lo largo del tiempo. Para lograrlo, el gerente debe asumir una actitud permanente de busqueda, analisis y desarrollo de oportunidades que amplien la participacion de mercado y fortalezcan los ingresos.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 15l3-3 3 2 5-6"></path></svg></div>
              <div><strong>Buscar oportunidades</strong><span>El gerente no espera que el mercado entregue crecimiento; lo explora de forma activa.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 12h5l2 7 4-14 2 7h5"></path></svg></div>
              <div><strong>Fortalecer ingresos</strong><span>Las nuevas oportunidades deben traducirse en ventas sostenibles y posicionamiento comercial.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 4-8 4-8-4 8-4Z"></path><path d="M4 12l8 4 8-4"></path><path d="M4 17l8 4 8-4"></path></svg></div>
              <div><strong>Construir futuro</strong><span>Desarrollar negocios significa preparar hoy las fuentes de crecimiento del manana.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Analisis de oportunidades</span>
          <h4>Explorar nuevos mercados, segmentos y alianzas</h4>
          <p>La expansion comercial puede lograrse mediante la exploracion de nuevos mercados, nuevos segmentos de clientes o nuevas lineas de negocio. El gerente debe analizar continuamente el entorno para decidir donde crecer.</p>
          <div class="metric-grid">
            <div><strong>Tendencias</strong><span>Lectura de cambios del mercado y comportamiento de la demanda.</span></div>
            <div><strong>Clientes</strong><span>Identificacion de necesidades, segmentos y oportunidades de relacion.</span></div>
            <div><strong>Competencia</strong><span>Observacion de movimientos, fortalezas y espacios disponibles.</span></div>
            <div><strong>Sectores</strong><span>Revision de actividades economicas con potencial de crecimiento.</span></div>
            <div><strong>Institucional</strong><span>Oportunidades con entidades, licitaciones o compras organizadas.</span></div>
            <div><strong>Alianzas</strong><span>Relaciones estrategicas que aceleren acceso a mercados o capacidades.</span></div>
          </div>
          <div class="impact-callout">Idea fuerza: las organizaciones que crecen de forma sostenible mantienen una vision permanente de expansion y desarrollo.</div>
        </section>
      `;
    }

    if (fourthDevelopment) {
      fourthDevelopment.className = "lesson-development impact-deck";
      fourthLesson.querySelector("h3").textContent = "Gestion de clientes estrategicos";
      fourthLesson.querySelector(".lesson-top p").textContent = "Convierte la relacion con clientes clave en estabilidad, permanencia e ingresos sostenibles.";
      fourthDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Cliente como activo</span>
          <h4>Conservar clientes tambien es una estrategia de crecimiento</h4>
          <p>Los clientes constituyen uno de los activos mas valiosos para cualquier organizacion. Conseguir nuevos clientes requiere tiempo, recursos y esfuerzo comercial; por eso, el gerente debe impulsar estrategias que permitan conservar, fortalecer y desarrollar las relaciones existentes.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></div>
              <div><strong>Cultura centrada en el cliente</strong><span>El equipo debe comprender necesidades, expectativas y momentos clave de la relacion comercial.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 21s-8-4.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-8 11-8 11Z"></path></svg></div>
              <div><strong>Experiencias positivas</strong><span>La permanencia del cliente depende de confianza, satisfaccion y consistencia en la atencion.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
              <div><strong>Ingresos estables</strong><span>Relaciones comerciales solidas fortalecen recurrencia, retencion y crecimiento de cuenta.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Fidelizacion y retencion</span>
          <h4>Acciones que fortalecen la permanencia del cliente</h4>
          <p>La fidelizacion busca incrementar satisfaccion, confianza y compromiso. Un cliente satisfecho no solo compra nuevamente; tambien recomienda, defiende y promueve la propuesta de valor de la empresa.</p>
          <div class="pillar-grid module-two-responsibilities">
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg></div>
              <h5>Seguimiento postventa</h5>
              <p>Acompanamiento despues de la venta para asegurar satisfaccion y continuidad.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3l8 4-8 4-8-4 8-4Z"></path><path d="M4 12l8 4 8-4"></path><path d="M4 17l8 4 8-4"></path></svg></div>
              <h5>Cuentas estrategicas</h5>
              <p>Atencion diferenciada para clientes de alto valor o alto potencial.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.3 2 7L12 16l-6.5 4.3 2-7L2 9h7z"></path></svg></div>
              <h5>Programas de fidelizacion</h5>
              <p>Iniciativas que refuerzan preferencia, recurrencia y compromiso comercial.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
              <h5>Satisfaccion y recuperacion</h5>
              <p>Medir experiencia, corregir fallas y recuperar clientes inactivos.</p>
            </article>
          </div>
          <div class="impact-callout">Idea fuerza: administrar clientes estrategicos permite construir relaciones de largo plazo y estabilizar ingresos.</div>
        </section>
      `;
    }

    if (fifthDevelopment) {
      fifthDevelopment.className = "lesson-development impact-deck";
      fifthLesson.querySelector("h3").textContent = "Licitaciones y negocios institucionales";
      fifthLesson.querySelector(".lesson-top p").textContent = "Gestiona oportunidades institucionales con planificacion, control documental y cumplimiento.";
      fifthDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Mercado institucional</span>
          <h4>Una oportunidad estrategica que exige mayor disciplina comercial</h4>
          <p>Las ventas institucionales representan oportunidades relevantes para organizaciones capaces de atender requerimientos de entidades gubernamentales, municipalidades, instituciones autonomas y empresas privadas de gran tamano. Suelen involucrar contratos de mayor volumen y relaciones comerciales de largo plazo.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 21v-8h6v8"></path></svg></div>
              <div><strong>Clientes institucionales</strong><span>Gobierno, municipalidades, instituciones autonomas y empresas privadas de gran escala.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
              <div><strong>Mayor volumen</strong><span>Este segmento puede generar contratos importantes y relaciones comerciales de largo plazo.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg></div>
              <div><strong>Mayor control</strong><span>Requiere planificacion, evidencia, documentacion y cumplimiento normativo.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Responsabilidad gerencial</span>
          <h4>Liderar oportunidades viables y procesos bien coordinados</h4>
          <p>El Gerente Comercial debe identificar, evaluar y priorizar oportunidades institucionales que sean viables para la organizacion. Tambien debe coordinar ofertas, seguimiento contractual y relaciones con instituciones clave.</p>
          <div class="pillar-grid module-two-responsibilities">
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
              <h5>Identificar oportunidades</h5>
              <p>Detectar procesos institucionales con potencial comercial real.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M4 21h14"></path><path d="M4 3h11v7"></path></svg></div>
              <h5>Evaluar viabilidad</h5>
              <p>Analizar requisitos, capacidad de respuesta, rentabilidad y riesgos.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg></div>
              <h5>Coordinar ofertas</h5>
              <p>Asegurar preparacion documental, tecnica y comercial de la propuesta.</p>
            </article>
            <article class="pillar-card">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 7v5l3 2"></path><path d="M21 3v6h-6"></path></svg></div>
              <h5>Seguimiento y relaciones</h5>
              <p>Dar seguimiento a contrataciones y fortalecer relaciones institucionales.</p>
            </article>
          </div>
          <div class="impact-callout">Idea fuerza: una buena gestion institucional puede convertirse en fuente de crecimiento y posicionamiento empresarial.</div>
        </section>
      `;
    }

    if (sixthDevelopment) {
      sixthDevelopment.className = "lesson-development impact-deck";
      sixthLesson.querySelector("h3").textContent = "Administracion del talento comercial";
      sixthLesson.querySelector(".lesson-top p").textContent = "Desarrolla capacidades, compromiso y productividad en el equipo comercial.";
      sixthDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Motor de resultados</span>
          <h4>Las ventas crecen cuando crecen las capacidades del equipo</h4>
          <p>Los resultados de ventas son consecuencia directa del desempeno de las personas que integran el equipo comercial. Por eso, el gerente debe desarrollar las capacidades necesarias para que cada integrante alcance altos niveles de productividad.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <div><strong>Equipo capacitado</strong><span>La supervision no basta; el gerente debe construir capacidades comerciales reales.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 21s-8-4.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-8 11-8 11Z"></path></svg></div>
              <div><strong>Compromiso</strong><span>Un equipo acompanado y desarrollado tiene mayor energia, foco y pertenencia.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
              <div><strong>Productividad</strong><span>El desarrollo del talento convierte esfuerzo comercial en resultados sostenibles.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Formacion y desarrollo</span>
          <h4>Habilidades que elevan el desempeno comercial</h4>
          <p>La capacitacion permanente fortalece competencias y corrige brechas de desempeno. El gerente debe identificar oportunidades de mejora y promover programas de formacion orientados a habilidades criticas del proceso comercial.</p>
          <div class="metric-grid">
            <div><strong>Prospeccion</strong><span>Capacidad para identificar y activar oportunidades comerciales.</span></div>
            <div><strong>Negociacion</strong><span>Habilidad para construir acuerdos sostenibles y rentables.</span></div>
            <div><strong>Servicio al cliente</strong><span>Atencion que fortalece experiencia, confianza y permanencia.</span></div>
            <div><strong>Manejo de objeciones</strong><span>Respuesta profesional ante dudas, riesgos y barreras de compra.</span></div>
            <div><strong>Presentaciones</strong><span>Comunicacion clara de valor, solucion y diferenciadores.</span></div>
            <div><strong>Oportunidades</strong><span>Administracion del seguimiento y avance del negocio.</span></div>
          </div>
          <div class="impact-callout">Idea fuerza: el crecimiento del equipo comercial contribuye directamente al crecimiento de la organizacion.</div>
        </section>
      `;
    }

    if (seventhDevelopment) {
      seventhDevelopment.className = "lesson-development impact-deck";
      seventhLesson.querySelector("h3").textContent = "Toma de decisiones basada en informacion";
      seventhLesson.querySelector(".lesson-top p").textContent = "Transforma datos confiables en acciones comerciales, control de riesgos y mejores resultados.";
      seventhDevelopment.innerHTML = `
        <section class="impact-sheet impact-slide impact-white">
          <span class="sheet-kicker">Informacion objetiva</span>
          <h4>Decidir con evidencia fortalece la direccion comercial</h4>
          <p>Las decisiones comerciales deben fundamentarse en informacion objetiva y verificable. La experiencia y la intuicion aportan valor, pero las organizaciones modernas necesitan respaldar sus decisiones con datos confiables que permitan actuar con mayor precision.</p>
          <div class="summary-points">
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path></svg></div>
              <div><strong>Datos confiables</strong><span>La informacion debe ser verificable, actualizada y relevante para la decision comercial.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
              <div><strong>Interpretacion gerencial</strong><span>El gerente transforma reportes e indicadores en lectura de negocio y prioridades.</span></div>
            </div>
            <div class="summary-point">
              <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M6 3v6h6"></path><path d="M18 21v-6h-6"></path><path d="M6 9a7 7 0 0 1 11.7-3.2"></path><path d="M18 15a7 7 0 0 1-11.7 3.2"></path></svg></div>
              <div><strong>Acciones concretas</strong><span>La informacion solo genera valor cuando se convierte en decisiones y correcciones.</span></div>
            </div>
          </div>
        </section>
        <section class="impact-sheet dark impact-slide impact-green">
          <span class="sheet-kicker">Herramientas de analisis</span>
          <h4>CRM, reportes y tableros al servicio de la decision</h4>
          <p>Las herramientas tecnologicas permiten analizar grandes volumenes de informacion comercial. Los reportes de gestion, sistemas CRM y tableros de control facilitan el monitoreo permanente de indicadores y apoyan mejores decisiones.</p>
          <div class="metric-grid">
            <div><strong>Oportunidades de mejora</strong><span>Detectar brechas de desempeno y puntos de optimizacion comercial.</span></div>
            <div><strong>Riesgos comerciales</strong><span>Identificar desviaciones antes de que impacten los resultados.</span></div>
            <div><strong>Recursos</strong><span>Asignar tiempo, presupuesto y esfuerzo donde generan mayor retorno.</span></div>
            <div><strong>Productividad</strong><span>Mejorar eficiencia individual y colectiva del equipo comercial.</span></div>
            <div><strong>Planificacion</strong><span>Fortalecer decisiones estrategicas con evidencia historica y actual.</span></div>
            <div><strong>Seguimiento</strong><span>Monitorear indicadores y convertir hallazgos en accion gerencial.</span></div>
          </div>
          <div class="impact-callout">Idea fuerza: la informacion es uno de los activos mas importantes para dirigir la gestion comercial.</div>
        </section>
      `;
    }
  }
}

function updateLearningProgress() {
  const contentLessons = getContentLessons();
  if (!contentLessons.length || !progressFill || !progressText) return;

  const completed = contentLessons.filter((lesson) => lesson.classList.contains("complete")).length;
  const rawPercentage = (completed / contentLessons.length) * 100;
  const percentage = Number.isInteger(rawPercentage) ? rawPercentage : rawPercentage.toFixed(1);
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}% de avance`;

  getStepChips().forEach((chip) => {
    if (chip.classList.contains("evaluation-step")) {
      chip.classList.toggle("complete", completed === contentLessons.length);
      return;
    }
    const relatedLesson = document.querySelector(`.lesson-card[data-lesson="${chip.dataset.step}"]`);
    chip.classList.toggle("complete", Boolean(relatedLesson?.classList.contains("complete")));
  });
}

function buildModuleEvaluation() {
  const stepLine = document.querySelector(".step-line");
  const lessonList = document.querySelector(".lesson-list");
  if (!stepLine || !lessonList || document.querySelector('[data-evaluation-step="true"]')) return;
  const moduleTitle = document.querySelector("h1")?.textContent?.trim() || "Modulo";
  const evaluationCopy = moduleTitle === "Funciones del Gerente Comercial"
    ? "El examen confirma que el participante comprende planificacion comercial, gestion de ventas, desarrollo de negocios, clientes estrategicos, licitaciones, talento comercial y decisiones basadas en informacion."
    : moduleTitle === "Proceso Comercial"
      ? "El examen confirma que el participante comprende las ocho etapas del proceso comercial, su importancia estrategica y el rol del gerente para dirigir, supervisar y optimizar cada fase."
      : "El examen confirma que el participante comprende el cambio de rol, las funciones estrategicas, el liderazgo de resultados, la gestion medible y los cinco pilares de la gerencia comercial.";

  const evaluationChip = document.createElement("button");
  evaluationChip.className = "step-chip evaluation-step";
  evaluationChip.dataset.step = "evaluation";
  evaluationChip.dataset.evaluationStep = "true";
  evaluationChip.type = "button";
  evaluationChip.textContent = "Evaluacion";
  stepLine.appendChild(evaluationChip);

  const evaluationLesson = document.createElement("article");
  evaluationLesson.className = "lesson-card reveal is-visible evaluation-card";
  evaluationLesson.dataset.lesson = "evaluation";
  evaluationLesson.innerHTML = `
    <div class="lesson-top">
      <div>
        <h3>Evaluacion del modulo</h3>
        <p>Responde la evaluacion general para validar el aprendizaje de esta seccion y actualizar la linea de avance.</p>
      </div>
    </div>
    <div class="lesson-development evaluation-sheet">
      <section class="evaluation-info-card">
        <span class="sheet-kicker">Evaluacion final</span>
        <h4>Valida tu dominio del modulo</h4>
        <p>${evaluationCopy}</p>
        <div class="exam-metrics">
          <div><strong>10</strong><span>preguntas</span></div>
          <div><strong>6/10</strong><span>nota minima</span></div>
          <div><strong>Final</strong><span>resultado visible</span></div>
        </div>
        <div class="evaluation-flow">
          <div>
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
            <span>Seleccion multiple</span>
          </div>
          <div>
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M4 19h16"></path><path d="M8 17V9"></path><path d="M12 17V5"></path><path d="M16 17v-6"></path></svg></div>
            <span>Revision inmediata</span>
          </div>
          <div>
            <div class="sheet-icon"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"></path><path d="M12 7v5l3 2"></path><path d="M21 3v6h-6"></path></svg></div>
            <span>Aprobado o reprobado</span>
          </div>
        </div>
        <button class="evaluation-open module-evaluation-open" type="button">Iniciar evaluacion</button>
      </section>
      </div>
  `;
  lessonList.appendChild(evaluationLesson);
}

function setActiveLesson(lessonNumber) {
  const lessons = getLessons();
  const stepChips = getStepChips();
  lessons.forEach((lesson) => {
    lesson.classList.toggle("active", lesson.dataset.lesson === String(lessonNumber));
  });
  stepChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.step === String(lessonNumber));
  });
  activeLesson = lessons.find((lesson) => lesson.dataset.lesson === String(lessonNumber)) || lessons[0];

  if (String(lessonNumber) === "evaluation" && activeLesson) {
    openDevelopmentFullscreen(activeLesson);
  }
}

function bindStepChips() {
  getStepChips().forEach((chip) => {
    if (chip.dataset.bound === "true") return;
    chip.dataset.bound = "true";
  chip.setAttribute("role", "button");
  chip.setAttribute("tabindex", "0");
  chip.addEventListener("click", () => setActiveLesson(chip.dataset.step));
  chip.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveLesson(chip.dataset.step);
    }
  });
  });
}

document.addEventListener("click", (event) => {
  const evaluationStep = event.target.closest(".evaluation-step");
  if (evaluationStep) {
    setActiveLesson("evaluation");
  }
});

document.querySelectorAll(".video-add").forEach((button) => {
  button.addEventListener("click", () => {
    const lesson = button.closest(".lesson-card");
    lesson.querySelector(".video-file").click();
  });
});

document.querySelectorAll(".video-file").forEach((input) => {
  input.addEventListener("change", () => {
    const lesson = input.closest(".lesson-card");
    const status = lesson.querySelector(".video-status");
    status.textContent = input.files.length ? `Video agregado: ${input.files[0].name}` : "Sin video agregado";
  });
});

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".lesson-complete-check");
  if (!checkbox) return;

  const lesson = checkbox.closest(".lesson-card");
  lesson.classList.toggle("complete", checkbox.checked);
  updateLearningProgress();
});

const evaluationModal = document.createElement("div");
evaluationModal.className = "evaluation-modal";
evaluationModal.innerHTML = `
  <div class="evaluation-dialog" role="dialog" aria-modal="true" aria-labelledby="evaluationTitle">
    <div class="evaluation-header">
      <div>
        <span class="eyebrow">Evaluacion</span>
        <h2 id="evaluationTitle">Validacion de aprendizaje</h2>
        <span class="evaluation-score-badge" data-evaluation-score hidden></span>
      </div>
      <button class="evaluation-close" type="button" aria-label="Cerrar evaluacion">×</button>
    </div>
    <div class="evaluation-body"></div>
  </div>
`;
document.body.appendChild(evaluationModal);

const developmentFullscreen = document.createElement("div");
developmentFullscreen.className = "development-fullscreen";
developmentFullscreen.innerHTML = `
  <div class="development-fullscreen-inner">
    <div class="development-fullscreen-head">
      <div>
        <span class="eyebrow">Desarrollo del contenido</span>
        <h2></h2>
        <p></p>
      </div>
      <button class="fullscreen-close" type="button" aria-label="Cerrar pantalla completa">×</button>
    </div>
    <div class="development-fullscreen-grid"></div>
  </div>
`;
document.body.appendChild(developmentFullscreen);

const evaluationBody = evaluationModal.querySelector(".evaluation-body");
const closeEvaluation = evaluationModal.querySelector(".evaluation-close");
const evaluationScoreBadge = evaluationModal.querySelector("[data-evaluation-score]");
const fullscreenTitle = developmentFullscreen.querySelector("h2");
const fullscreenSummary = developmentFullscreen.querySelector("p");
const fullscreenGrid = developmentFullscreen.querySelector(".development-fullscreen-grid");
const closeFullscreen = developmentFullscreen.querySelector(".fullscreen-close");
const EXAM_KEYS_BY_MODULE = {
  Gerencia: "induccion.modulo1.exam.v3",
  "Funciones del Gerente Comercial": "induccion.modulo2.exam.v2",
  "Proceso Comercial": "induccion.modulo3.exam.v1"
};

function getCurrentExamKey() {
  const moduleTitle = document.querySelector("h1")?.textContent?.trim() || "";
  return EXAM_KEYS_BY_MODULE[moduleTitle] || `induccion.${moduleTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.exam.v1`;
}

function radioGroup(name, question, options) {
  return `
    <div class="evaluation-question" data-answer="${options.answer}">
      <strong>${question}</strong>
      <div class="quiz-options">
        ${options.items.map((item) => `
          <label data-option="${item.value}"><input type="radio" name="${name}" value="${item.value}"> ${item.text}</label>
        `).join("")}
      </div>
      <div class="question-review"></div>
    </div>
  `;
}

function getModuleExamQuestions(title) {
  if (title === "Funciones del Gerente Comercial") {
    return [
      {
        question: "1. ¿Que permite la planificacion comercial?",
        answer: "b",
        items: [
          { value: "a", text: "Trabajar con esfuerzos aislados sin seguimiento." },
          { value: "b", text: "Orientar recursos, metas y prioridades hacia objetivos definidos." },
          { value: "c", text: "Eliminar el presupuesto comercial." }
        ]
      },
      {
        question: "2. ¿Que debe supervisar el gerente en la gestion de ventas?",
        answer: "c",
        items: [
          { value: "a", text: "Solo las ventas ya cerradas." },
          { value: "b", text: "Solo la cantidad de llamadas realizadas." },
          { value: "c", text: "Embudo, oportunidades, propuestas, cierres y desviaciones." }
        ]
      },
      {
        question: "3. ¿Cual es el objetivo del desarrollo de negocios?",
        answer: "a",
        items: [
          { value: "a", text: "Identificar oportunidades, mercados, segmentos y alianzas de crecimiento." },
          { value: "b", text: "Reducir clientes activos sin analisis." },
          { value: "c", text: "Ignorar los cambios del mercado." }
        ]
      },
      {
        question: "4. ¿Por que es importante gestionar clientes estrategicos?",
        answer: "b",
        items: [
          { value: "a", text: "Porque permite eliminar la postventa." },
          { value: "b", text: "Porque fortalece relacion, retencion e ingresos sostenibles." },
          { value: "c", text: "Porque evita medir satisfaccion y seguimiento." }
        ]
      },
      {
        question: "5. ¿Que exige una licitacion o negocio institucional?",
        answer: "c",
        items: [
          { value: "a", text: "Improvisacion durante todo el proceso." },
          { value: "b", text: "Ausencia de control documental." },
          { value: "c", text: "Planificacion, documentacion, coordinacion y cumplimiento." }
        ]
      },
      {
        question: "6. ¿Que implica administrar el talento comercial?",
        answer: "a",
        items: [
          { value: "a", text: "Reclutar, inducir, capacitar, supervisar politicas y administrar recursos del departamento." },
          { value: "b", text: "Evitar capacitaciones para ahorrar tiempo." },
          { value: "c", text: "Dejar al equipo sin seguimiento." }
        ]
      },
      {
        question: "7. ¿Para que sirve el modelo SBI en la retroalimentacion?",
        answer: "b",
        items: [
          { value: "a", text: "Para dar opiniones generales sin evidencia." },
          { value: "b", text: "Para describir situacion, comportamiento e impacto de forma objetiva." },
          { value: "c", text: "Para evitar conversaciones de mejora." }
        ]
      },
      {
        question: "8. ¿Cual es el objetivo del manejo de conflictos dentro del equipo comercial?",
        answer: "c",
        items: [
          { value: "a", text: "Definir ganadores y perdedores." },
          { value: "b", text: "Evitar escuchar a las partes." },
          { value: "c", text: "Preservar el desempeno colectivo mediante dialogo, acuerdos y seguimiento." }
        ]
      },
      {
        question: "9. ¿Que representa una alerta amarilla en el semaforo de personal?",
        answer: "a",
        items: [
          { value: "a", text: "Senales de riesgo que requieren atencion." },
          { value: "b", text: "Desempeno normal y cumplimiento de objetivos." },
          { value: "c", text: "Problemas criticos de permanencia ya confirmados." }
        ]
      },
      {
        question: "10. ¿Que fuentes debe utilizar el gerente para decisiones basadas en informacion?",
        answer: "b",
        items: [
          { value: "a", text: "Solo percepciones personales del equipo." },
          { value: "b", text: "CRM, reportes comerciales, Power BI, indicadores e informes de mercado." },
          { value: "c", text: "Unicamente comentarios informales de clientes." }
        ]
      }
    ];
  }

  if (title === "Proceso Comercial") {
    return [
      {
        question: "1. ¿Cual es el objetivo central del proceso comercial de KONFI?",
        answer: "b",
        items: [
          { value: "a", text: "Ejecutar ventas sin seguimiento ni coordinacion interna." },
          { value: "b", text: "Gestionar oportunidades desde prospectos hasta fidelizacion, con documentacion y coordinacion interna." },
          { value: "c", text: "Concentrarse solo en el cierre de ventas." }
        ]
      },
      {
        question: "2. ¿Que debe lograr una buena prospeccion?",
        answer: "a",
        items: [
          { value: "a", text: "Identificar, segmentar y calificar prospectos con potencial real de compra." },
          { value: "b", text: "Reduce la necesidad de buscar nuevos clientes." },
          { value: "c", text: "Elimina la segmentacion de mercado." }
        ]
      },
      {
        question: "3. ¿Que debe lograr el contacto inicial?",
        answer: "c",
        items: [
          { value: "a", text: "Cerrar la venta sin diagnostico." },
          { value: "b", text: "Solicitar informacion operativa interna." },
          { value: "c", text: "Generar confianza, interes y apertura para avanzar." }
        ]
      },
      {
        question: "4. ¿Por que es clave la deteccion de necesidades?",
        answer: "b",
        items: [
          { value: "a", text: "Porque permite presentar cualquier solucion disponible." },
          { value: "b", text: "Porque permite comprender necesidades funcionales, esteticas, logisticas y relacionales." },
          { value: "c", text: "Porque sustituye la postventa." }
        ]
      },
      {
        question: "5. ¿Que debe comunicar una presentacion de solucion efectiva?",
        answer: "a",
        items: [
          { value: "a", text: "Valor, beneficios, diferenciadores y resultados esperados." },
          { value: "b", text: "Solo precios y caracteristicas tecnicas." },
          { value: "c", text: "Solo urgencia para cerrar." }
        ]
      },
      {
        question: "6. ¿Como deben entenderse las objeciones?",
        answer: "c",
        items: [
          { value: "a", text: "Como rechazo definitivo del cliente." },
          { value: "b", text: "Como una razon para abandonar el negocio." },
          { value: "c", text: "Como oportunidades para aclarar, profundizar y generar confianza." }
        ]
      },
      {
        question: "7. ¿Que representa el cierre de ventas?",
        answer: "b",
        items: [
          { value: "a", text: "El final absoluto de la relacion comercial." },
          { value: "b", text: "La formalizacion del acuerdo comercial y sus condiciones." },
          { value: "c", text: "Una etapa sin impacto en ingresos." }
        ]
      },
      {
        question: "8. ¿Que evita un buen compilado de informacion?",
        answer: "a",
        items: [
          { value: "a", text: "Errores operativos, reprocesos y mala transferencia de datos hacia produccion." },
          { value: "b", text: "La comunicacion entre areas." },
          { value: "c", text: "La satisfaccion del cliente." }
        ]
      },
      {
        question: "9. ¿Que busca la postventa?",
        answer: "c",
        items: [
          { value: "a", text: "Finalizar toda comunicacion con el cliente." },
          { value: "b", text: "Evitar reclamos para no generar trabajo." },
          { value: "c", text: "Asegurar satisfaccion, recompra y relaciones de largo plazo." }
        ]
      },
      {
        question: "10. ¿Cual es el rol del gerente comercial en el proceso?",
        answer: "b",
        items: [
          { value: "a", text: "Supervisar solo vendedores y no el proceso completo." },
          { value: "b", text: "Dirigir, supervisar, medir y mejorar cada etapa desde prospeccion hasta postventa." },
          { value: "c", text: "Delegar todo el seguimiento sin indicadores." }
        ]
      }
    ];
  }

  if (title !== "Gerencia") return [];

  return [
    {
      question: "1. ¿Que cambio central ocurre al pasar de vendedor a gerente comercial?",
      answer: "b",
      items: [
        { value: "a", text: "Vender mas personalmente para superar a todos los vendedores." },
        { value: "b", text: "Pasar de resultados individuales a dirigir personas, procesos y resultados del equipo." },
        { value: "c", text: "Dejar de analizar resultados comerciales." }
      ]
    },
    {
      question: "2. ¿Cual es una actividad principalmente operativa dentro del area comercial?",
      answer: "a",
      items: [
        { value: "a", text: "Realizar llamadas, visitas, cotizaciones y seguimiento de oportunidades." },
        { value: "b", text: "Definir metas de ventas del periodo." },
        { value: "c", text: "Disenar estrategias de crecimiento." }
      ]
    },
    {
      question: "3. ¿Cual accion corresponde a una funcion estrategica del gerente?",
      answer: "c",
      items: [
        { value: "a", text: "Elaborar todas las cotizaciones del equipo." },
        { value: "b", text: "Sustituir al vendedor en cada cierre." },
        { value: "c", text: "Gestionar indicadores, recursos, metas y decisiones comerciales." }
      ]
    },
    {
      question: "4. ¿Para que sirve el pensamiento estrategico en la gestion comercial?",
      answer: "b",
      items: [
        { value: "a", text: "Para reaccionar solo cuando aparece un problema." },
        { value: "b", text: "Para anticipar escenarios, oportunidades, riesgos y preparar acciones." },
        { value: "c", text: "Para evitar revisar el mercado y la competencia." }
      ]
    },
    {
      question: "5. ¿Que debe hacer un lider comercial efectivo?",
      answer: "a",
      items: [
        { value: "a", text: "Comunicar objetivos, desarrollar habilidades, dar seguimiento y corregir desviaciones." },
        { value: "b", text: "Exigir resultados sin acompanamiento ni orientacion." },
        { value: "c", text: "Atender solo sus propias oportunidades de venta." }
      ]
    },
    {
      question: "6. ¿Que propone el liderazgo situacional?",
      answer: "c",
      items: [
        { value: "a", text: "Dirigir a todas las personas de la misma forma." },
        { value: "b", text: "Delegar siempre, aunque el colaborador no tenga experiencia." },
        { value: "c", text: "Adaptar el estilo de direccion segun competencia y compromiso." }
      ]
    },
    {
      question: "7. ¿Cual es la diferencia entre autoridad formal e influencia real?",
      answer: "a",
      items: [
        { value: "a", text: "La autoridad depende del cargo; la influencia depende de credibilidad, coherencia y ejemplo." },
        { value: "b", text: "La autoridad y la influencia son exactamente lo mismo." },
        { value: "c", text: "La influencia se obtiene solo imponiendo instrucciones." }
      ]
    },
    {
      question: "8. ¿Por que la motivacion del equipo comercial no debe dejarse al azar?",
      answer: "b",
      items: [
        { value: "a", text: "Porque todos los vendedores se motivan exactamente por los mismos factores." },
        { value: "b", text: "Porque cada colaborador puede responder a motivadores distintos como ingresos, reconocimiento, autonomia, crecimiento o pertenencia." },
        { value: "c", text: "Porque la motivacion no afecta el desempeno comercial." }
      ]
    },
    {
      question: "9. ¿Cual de estos es uno de los cinco pilares de la gerencia comercial?",
      answer: "c",
      items: [
        { value: "a", text: "Improvisacion comercial permanente." },
        { value: "b", text: "Ausencia de seguimiento al equipo." },
        { value: "c", text: "Planificacion comercial, gestion de ventas, desarrollo de negocios, clientes y talento comercial." }
      ]
    },
    {
      question: "10. ¿Que resume mejor la conclusion del modulo?",
      answer: "a",
      items: [
        { value: "a", text: "La gerencia comercial exige una transformacion profesional hacia liderazgo, estrategia, talento y resultados sostenibles." },
        { value: "b", text: "El gerente debe seguir siendo principalmente un vendedor individual." },
        { value: "c", text: "El cambio de cargo no requiere nuevas competencias." }
      ]
    }
  ];
}

function openEvaluation(lesson) {
  activeLesson = lesson;
  const isModuleEvaluation = lesson.classList.contains("evaluation-card");
  const title = isModuleEvaluation ? document.querySelector("h1")?.textContent || "Modulo" : lesson.querySelector("h3")?.textContent || "Subcontenido";
  const moduleQuestions = isModuleEvaluation ? getModuleExamQuestions(title) : [];
  if (evaluationScoreBadge) {
    evaluationScoreBadge.hidden = true;
    evaluationScoreBadge.textContent = "";
    evaluationScoreBadge.className = "evaluation-score-badge";
  }

  function extractQuestion(quiz, fallbackName) {
    return {
      question: quiz?.querySelector("strong")?.textContent || `Pregunta sobre ${fallbackName}`,
      answer: quiz?.dataset.answer || "b",
      items: Array.from(quiz?.querySelectorAll("label") || []).map((label) => {
        const input = label.querySelector("input");
        return { value: input?.value || "", text: label.textContent.trim() };
      })
    };
  }

  const sourceLessons = isModuleEvaluation ? getContentLessons() : [lesson];
  const firstQuiz = sourceLessons[0]?.querySelector(".quiz");
  const secondQuiz = sourceLessons[Math.min(1, sourceLessons.length - 1)]?.querySelector(".quiz") || firstQuiz;
  const fallbackQuestions = [extractQuestion(firstQuiz, title), extractQuestion(secondQuiz, title)];
  const questions = moduleQuestions.length ? moduleQuestions : fallbackQuestions;

  evaluationBody.innerHTML = `
    <div class="evaluation-intro">
      <p>Responde la evaluacion de <strong>${title}</strong>. Nota minima: <strong>6 de 10</strong>.</p>
      <span>${questions.length} preguntas de seleccion multiple</span>
    </div>
    ${questions.map((question, index) => radioGroup(`eval_q${index + 1}`, question.question, {
      answer: question.answer,
      items: question.items
    })).join("")}
    <div class="evaluation-actions">
      <button class="eval-secondary" type="button" data-close-evaluation>Cerrar</button>
      <button class="check-answer" type="button" data-validate-evaluation>Finalizar evaluacion</button>
    </div>
    <div class="quiz-feedback exam-result"></div>
  `;

  evaluationModal.classList.add("open");
  evaluationModal.querySelector("[data-validate-evaluation]").focus();
}

function getStoredExamResult() {
  try {
    return JSON.parse(localStorage.getItem(getCurrentExamKey()) || "null");
  } catch (error) {
    return null;
  }
}

function saveExamResult(result) {
  localStorage.setItem(getCurrentExamKey(), JSON.stringify(result));
}

function applyExamStatus(result) {
  const existingHeroBadge = document.querySelector(".module-result-badge");
  const heroTitle = document.querySelector(".module-hero h1");
  const evaluationChip = document.querySelector(".evaluation-step");
  const evaluationCard = document.querySelector(".evaluation-card");
  if (!result || !result.status) {
    existingHeroBadge?.remove();
    evaluationChip?.removeAttribute("data-result");
    evaluationCard?.removeAttribute("data-result");
    return;
  }

  const badge = existingHeroBadge || document.createElement("span");
  badge.className = `module-result-badge ${result.status}`;
  badge.textContent = `${result.status === "approved" ? "Aprobado" : "Reprobado"} · ${result.score}/${result.total}`;
  if (!existingHeroBadge && heroTitle) {
    heroTitle.insertAdjacentElement("afterend", badge);
  }

  const label = result.status === "approved" ? "Aprobado" : "Reprobado";
  if (evaluationChip) {
    evaluationChip.dataset.result = label;
    evaluationChip.classList.toggle("exam-approved", result.status === "approved");
    evaluationChip.classList.toggle("exam-failed", result.status === "failed");
  }
  if (evaluationCard) {
    evaluationCard.dataset.result = `${label} · ${result.score}/${result.total}`;
  }
}

function closeEvaluationModal() {
  evaluationModal.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const startButton = event.target.closest(".module-evaluation-open");
  if (!startButton) return;

  event.preventDefault();
  event.stopPropagation();
  openEvaluation(startButton.closest(".lesson-card") || document.querySelector(".evaluation-card"));
}, true);

function openDevelopmentFullscreen(lesson) {
  const title = lesson.querySelector("h3")?.textContent || "Desarrollo";
  const summary = lesson.querySelector(".lesson-top p")?.textContent || "";
  const development = lesson.querySelector(".lesson-development");
  const isEvaluation = lesson.classList.contains("evaluation-card");

  fullscreenTitle.textContent = title;
  fullscreenSummary.textContent = summary;
  fullscreenGrid.innerHTML = development ? development.innerHTML : "";
  developmentFullscreen.classList.toggle("evaluation-fullscreen", isEvaluation);
  developmentFullscreen.classList.add("open");
  document.body.classList.add("lesson-fullscreen");
  closeFullscreen.focus();
}

function closeDevelopmentFullscreen() {
  developmentFullscreen.classList.remove("open");
  developmentFullscreen.classList.remove("evaluation-fullscreen");
  document.body.classList.remove("lesson-fullscreen");
}

document.addEventListener("click", (event) => {
  const evaluationButton = event.target.closest(".evaluation-open");
  if (evaluationButton) {
    openEvaluation(evaluationButton.closest(".lesson-card"));
    return;
  }

  const panoramaButton = event.target.closest(".icon-maximize");
  if (panoramaButton) {
    openDevelopmentFullscreen(panoramaButton.closest(".lesson-card"));
    return;
  }

  if (event.target.matches("[data-close-evaluation]") || event.target === evaluationModal) {
    closeEvaluationModal();
    return;
  }

  if (event.target.matches("[data-validate-evaluation]")) {
    const questions = Array.from(evaluationBody.querySelectorAll(".evaluation-question"));
    const feedback = evaluationBody.querySelector(".quiz-feedback");
    const allAnswered = questions.every((question) => question.querySelector("input[type='radio']:checked"));
    if (!allAnswered) {
      feedback.textContent = "Responde todas las preguntas para finalizar la evaluacion.";
      feedback.className = "quiz-feedback bad";
      return;
    }

    let score = 0;
    questions.forEach((question) => {
      const selected = question.querySelector("input[type='radio']:checked");
      const selectedLabel = question.querySelector(`label[data-option="${selected.value}"]`);
      const correctLabel = question.querySelector(`label[data-option="${question.dataset.answer}"]`);
      const review = question.querySelector(".question-review");
      const selectedText = selectedLabel?.textContent.trim() || "";
      const correctText = correctLabel?.textContent.trim() || "";
      const isCorrect = selected.value === question.dataset.answer;

      if (isCorrect) score += 1;
      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-wrong", !isCorrect);
      question.querySelectorAll("label").forEach((label) => {
        label.classList.toggle("selected", label === selectedLabel);
        label.classList.toggle("correct", label === correctLabel);
        label.classList.toggle("wrong", label === selectedLabel && !isCorrect);
      });
      review.innerHTML = `
        <span>Seleccionada: <strong>${selectedText}</strong></span>
        <span>Correcta: <strong>${correctText}</strong></span>
      `;
    });

    const total = questions.length;
    const passed = score >= 6;
    const result = {
      status: passed ? "approved" : "failed",
      score,
      total,
      completedAt: new Date().toISOString()
    };

    saveExamResult(result);
    applyExamStatus(result);
    if (evaluationScoreBadge) {
      evaluationScoreBadge.hidden = false;
      evaluationScoreBadge.textContent = `${passed ? "Aprobado" : "Reprobado"} · ${score}/${total}`;
      evaluationScoreBadge.className = passed
        ? "evaluation-score-badge approved"
        : "evaluation-score-badge failed";
    }
    feedback.textContent = passed
      ? `Aprobado. Resultado: ${score}/${total}.`
      : `Reprobado. Resultado: ${score}/${total}. Nota minima: 6/${total}.`;
    feedback.className = passed ? "quiz-feedback ok exam-result" : "quiz-feedback bad exam-result";
    updateLearningProgress();
  }
});

closeEvaluation.addEventListener("click", closeEvaluationModal);
closeFullscreen.addEventListener("click", closeDevelopmentFullscreen);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && evaluationModal.classList.contains("open")) {
    closeEvaluationModal();
  }

  if (event.key === "Escape" && developmentFullscreen.classList.contains("open")) {
    closeDevelopmentFullscreen();
  }
});

buildModuleEvaluation();
enhanceLessonLayout();
applyCustomLessonContent();
bindStepChips();
setActiveLesson(1);
updateLearningProgress();
applyExamStatus(getStoredExamResult());
