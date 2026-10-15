// src/data/serviciosData.js

export const serviciosData = [
  {
    id: 'estados',
    titulo: 'Estados financieros y cierre contable',
    subtitulo: 'Preparación y presentación de estados financieros bajo normativa NIIF',
    icono: '📊',
    contenidoModal: {
      tituloPrincipal: 'Estados Financieros y Cierre Contable',
      introduccion: 'A continuación, se detallan las condiciones y clasificaciones vigentes para los diferentes grupos empresariales bajo la normatividad contable Colombiana:',
      secciones: [
        {
          tipo: 'caja-verde',
          titulo: 'Grupo 1: NIIF Plenas',
          iconoSeccion: '📈',
          bordeColor: '#10b981',
          texto: 'Compuesto por empresas grandes y complejas, tales como:',
          lista: [
            'Emisores de valores y entidades de interés público.',
            'Empresas con planta de personal mayor a 200 trabajadores o activos superiores a 30.000 SMMLV, que además cumplan criterios de subordinación u operaciones de comercio exterior superiores al 50%.'
          ]
        },
        {
          tipo: 'caja-azul',
          titulo: 'Grupo 2: NIIF para Pymes',
          iconoSeccion: '🏢',
          bordeColor: '#2563eb',
          texto: 'El grupo intermedio al que pertenecen las Pymes:',
          lista: [
            'Entidades que no cumplan los requisitos de los Grupos 1 o 3.',
            'Empresas con menos de 200 empleados o ingresos brutos anuales inferiores a 30.000 salarios mínimos.',
            'Portafolios de terceros y vehículos de propósito especial administrados por entidades vigiladas por la Superfinanciera.'
          ]
        },
        {
          tipo: 'caja-naranja',
          titulo: 'Grupo 3: NIF Simplificadas',
          iconoSeccion: '📋',
          bordeColor: '#d97706',
          texto: 'Aplica para microempresas y obligados a llevar contabilidad:',
          lista: [
            'Planta de personal no superior a 10 trabajadores.',
            'Activos totales (excluida la vivienda) inferiores a 500 SMMLV.',
            'Ingresos brutos anuales inferiores a 6.000 SMMLV.'
          ]
        }
      ],
      cursos: [
        { texto: 'Grupo 1: Ver Curso Virtual — $100.000.00', color: '#10b981' },
        { texto: 'Grupo 2: Ver Curso Virtual — $150.000.00', color: '#2563eb' },
        { texto: 'Grupo 3: Ver Curso Virtual — $200.000.00', color: '#d97706' }
      ]
    }
  },
  {
    id: 'diferido',
    titulo: 'Impuesto diferido',
    subtitulo: '',
    icono: '⚖️',
    contenidoModal: {
      tituloPrincipal: 'Tratamiento del Impuesto Diferido',
      introduccion: 'El tratamiento del impuesto diferido en Colombia para 2026 se basa en las Normas Internacionales de Información Financiera (NIIF), específicamente en la NIC 12. Este impuesto se genera por las diferencias temporales entre la base fiscal de activos y pasivos y su valor contable.',
      secciones: [
        {
          tipo: 'caja-azul',
          titulo: 'Cálculo del Impuesto Diferido',
          iconoSeccion: '📊',
          bordeColor: '#2563eb',
          texto: 'Se deben identificar las diferencias temporarias y determinar si son imponibles o deducibles, aplicando la tasa impositiva correspondiente.'
        },
        {
          tipo: 'caja-azul',
          titulo: 'Normativa Vigente (Año 2026)',
          iconoSeccion: '⚖️',
          bordeColor: '#2563eb',
          texto: 'A partir de 2026, se implementarán modificaciones tributarias que incluyen nuevos gravámenes y ajustes en impuestos existentes, lo que aumentará las responsabilidades fiscales de los contribuyentes.'
        },
        {
          tipo: 'caja-azul',
          titulo: 'Importancia',
          iconoSeccion: '🎓',
          bordeColor: '#2563eb',
          texto: 'Es crucial que los responsables de la información cuenten con un amplio conocimiento de las NIIF y la legislación fiscal para determinar correctamente el impuesto diferido.'
        }
      ],
      nota: 'Para más detalles, se recomienda consultar las fuentes oficiales y los documentos técnicos relacionados con el tratamiento contable del impuesto diferido en Colombia.',
      cursos: [
        { texto: 'Adquirir Curso Virtual (4 Horas) — $200.000.00', color: '#2563eb' }
      ]
    }
  },
  {
    id: 'auditoria',
    titulo: 'Auditoría y revisoría fiscal',
    subtitulo: '',
    icono: '🔍',
    contenidoModal: {
      tituloPrincipal: 'Auditoría y Revisoría Fiscal',
      introduccion: 'La revisoría fiscal es un órgano de control preventivo exclusivo de los contadores públicos en Colombia. Su objetivo es salvaguardar los intereses de los socios, el Estado y la comunidad. La auditoría, en cambio, es un proceso de revisión específico cuyo alcance se limita a un contrato y sirve principalmente a la administración.',
      secciones: [
        {
          tipo: 'caja-azul',
          titulo: 'Diferencias Clave',
          iconoSeccion: '⚖️',
          bordeColor: '#2563eb',
          texto: '',
          lista: [
            'Naturaleza: La revisoría fiscal es de carácter permanente y legal (obligatoria para ciertas empresas). La auditoría suele ser temporal, voluntaria y por áreas (financiera, de gestión, operativa).',
            'Alcance: El revisor fiscal realiza una auditoría integral (procesos, control interno, cumplimiento normativo). El auditor externo se enfoca casi exclusivamente en la razonabilidad de los estados financieros.',
            'Interés Protegido: El revisor fiscal protege el interés público, a los accionistas y a los terceros. El auditor externo suele responder a la junta directiva o a quienes lo contrataron.',
            'Responsabilidad: El revisor fiscal tiene responsabilidad civil, penal y disciplinaria. El auditor externo tiene responsabilidad civil limitada a los términos de su contrato.'
          ]
        },
        {
          tipo: 'caja-azul',
          titulo: 'Funciones Principales de un Revisor Fiscal',
          iconoSeccion: '📋',
          bordeColor: '#2563eb',
          texto: 'El Código de Comercio de Colombia define sus funciones en el artículo 207, las cuales incluyen:',
          lista: [
            'Cerciorarse de que las operaciones se ajusten a las prescripciones legales, estatutarias y de las asambleas.',
            'Dar oportuna cuenta, por escrito, a la asamblea, junta de socios o gerentes de las irregularidades que ocurran en el negocio.',
            'Colaborar con las entidades gubernamentales que ejerzan inspección y vigilancia.',
            'Dictaminar los estados financieros y emitir el informe o dictamen correspondiente.'
          ]
        },
        {
          tipo: 'caja-azul',
          titulo: '¿Qué se evalúa en una Auditoría Integral?',
          iconoSeccion: '📂',
          bordeColor: '#2563eb',
          texto: 'En una auditoría integral se fusionan distintos enfoques para evaluar de manera global la empresa:',
          lista: [
            'Auditoría Financiera: Valida que la contabilidad refleje la realidad económica.',
            'Auditoría de Cumplimiento: Revisa que la organización obedezca las leyes y regulaciones aplicables.',
            'Auditoría de Gestión: Mide la eficiencia, eficacia y economía en la administración de recursos.'
          ]
        }
      ],
      nota: 'Para profundizar en la regulación y conceptos profesionales, puede consultar el Consejo Técnico de la Contaduría Pública, el cual establece los lineamientos de aseguramiento de la información.',
      cursos: [
        { texto: 'Adquirir Curso Virtual — Consulte Disponibilidad', color: '#0f172a' }
      ]
    }
  },
  {
    id: 'simple',
    titulo: 'Régimen simple de tributación',
    subtitulo: '',
    icono: '📋',
    contenidoModal: {
      tituloPrincipal: 'Régimen Simple de Tributación (RST)',
      introduccion: 'El Régimen Simple de Tributación (RST) es un sistema opcional que unifica varios impuestos en una sola declaración, diseñado para facilitar el cumplimiento tributario a personas naturales y jurídicas (emprendedores, comerciantes y profesionales independientes), reduciendo significativamente la carga administrativa mediante declaraciones anuales y anticipos bimestrales.',
      secciones: [
        {
          tipo: 'caja-verde',
          titulo: 'Beneficios Principales',
          iconoSeccion: '💎',
          bordeColor: '#10b981',
          texto: '',
          lista: [
            'Simplificación administrativa: Se presentan menos declaraciones en el año y se unifican hasta siete impuestos nacionales y territoriales en un solo formulario y pago.',
            'Menores tarifas: Los impuestos se calculan directamente sobre los ingresos brutos, lo que genera ahorros sustanciales y mejora de manera inmediata el flujo de caja.',
            'Sin Retención en la Fuente: Los contribuyentes del RST no están sujetos a retenciones en la fuente por concepto de renta, evitando que les "retengan" dinero en sus facturas.',
            'Formalización Eficiente: Abre las puertas al sistema financiero formal, facilitando el acceso a créditos empresariales, capacitación técnica y herramientas clave de crecimiento.'
          ]
        },
        {
          tipo: 'caja-verde',
          titulo: 'Requisitos para Acogerse',
          iconoSeccion: '📋',
          bordeColor: '#10b981',
          texto: 'Pueden inscribirse en el RST los contribuyentes que cumplan con los siguientes criterios:',
          lista: [
            'Ser persona natural que desarrolle una empresa o persona jurídica cuyos socios sean exclusivamente personas naturales.',
            'Haber obtenido ingresos brutos anuales inferiores a 100.000 UVT (Aproximadamente $5.237.400.000 para el año gravable 2026).',
            'Estar inscrito en el RUT y actualizar la responsabilidad del SIMPLE antes del último día hábil del mes de febrero del año en curso.',
            'No ejercer actividades expresamente excluidas por la ley (como servicios financieros específicos o ciertas actividades de consumo especial).'
          ]
        },
        {
          tipo: 'caja-verde',
          titulo: 'Funcionamiento y Estructura de Pagos',
          iconoSeccion: '⚙️',
          bordeColor: '#10b981',
          texto: '',
          lista: [
            'Declaración Anual Consolidada: Se presenta una única vez al año, liquidando y consolidando los impuestos unificados del periodo fiscal.',
            'Anticipos Bimestrales Obligatorios: A lo largo del año se realizan abonos calculados cada dos meses utilizando exclusivamente las plataformas electrónicas de la DIAN.',
            'Tarifas Progresivas e Integración Local: Varían según la actividad comercial y los ingresos obtenidos, integrando internamente componentes municipales como el ICA.'
          ]
        }
      ],
      nota: 'El RST representa una alternativa de transparencia, eficiencia y optimización de recursos para los micro y medianos contribuyentes en el territorio colombiano.',
      cursos: [
        { texto: 'Adquirir Curso Virtual (8 Horas) — $500.000.00', color: '#059669' }
      ]
    }
  },
  {
    id: 'retencion',
    titulo: 'Retención en la fuente',
    subtitulo: '',
    icono: '💰',
    contenidoModal: {
      tituloPrincipal: 'Resumen Retención en la Fuente 2026',
      introduccion: 'Principales conceptos y bases de retención aplicables para la vigencia fiscal 2026:',
      tablaResumen: [
        { concepto: 'Compras Generales', base: 'Desde 27 UVT', tarifa: '2.5% / 3.5%' },
        { concepto: 'Servicios en General', base: 'Desde 4 UVT', tarifa: '4.0% / 6.0%' },
        { concepto: 'Honorarios y Comisiones', base: 'Desde 0 UVT', tarifa: '10% / 11%' }
      ],
      enlacePdf: {
        texto: '📄 Ver Tarjeta de Retenciones Completa (PDF)',
        url: '/Tabla_Retencion_2026.pdf'
      },
      cursos: [
        { texto: 'Descargar Tabla Completa (PDF)', color: '#2563eb' }
      ]
    }
  },
 {
    id: 'iva',
    titulo: 'El IVA en Colombia',
    subtitulo: '',
    icono: '🟩',
    contenidoModal: {
      tituloPrincipal: 'Impuesto sobre el Valor Agregado (IVA)',
      introduccion: 'El IVA es un impuesto indirecto nacional que se aplica sobre el valor agregado generado en cada fase de la etapa productiva o comercial de un bien o servicio, calculándose sobre la diferencia entre el precio de venta y el costo de los insumos.',
      secciones: [
        {
          titulo: 'Tarifas y Categorías en Colombia',
          iconoSeccion: '📊',
          bordeColor: '#2563eb',
          tabla: [
            { categoria: 'IVA General', tarifa: '19%', aplica: 'Mayoría de productos y servicios generales.' },
            { categoria: 'IVA Reducido', tarifa: '5%', aplica: 'Bienes de primera necesidad, algunos alimentos y servicios públicos.' },
            { categoria: 'IVA Exento', tarifa: '0%', aplica: 'Libros, educación, salud y productores con derecho a devolución.' },
            { categoria: 'IVA Excluido', tarifa: 'N/A', aplica: 'Exportaciones, donaciones y operaciones del sector financiero.' }
          ]
        },
        {
          titulo: 'Clasificación de Obligados',
          iconoSeccion: '👥',
          bordeColor: '#0f172a',
          lista: [
            'Responsables del IVA: Personas jurídicas y naturales que comercializan bienes/servicios gravados y superan los topes de ley. Deben cobrar, facturar, declarar y pagar el impuesto.',
            'No Responsables: Personas naturales que no superan los umbrales financieros de ley. No cobran IVA, pero tienen el deber formal de mantener actualizado su RUT.'
          ]
        },
        {
          titulo: 'Periodos de Declaración (Topes UVT)',
          iconoSeccion: '⏱️',
          bordeColor: '#2563eb',
          lista: [
            'Declaración Bimestral: Obligatoria para responsables con ingresos brutos anuales iguales o superiores a 92.000 UVT ($4.581.508.000).',
            'Declaración Cuatrimestral: Aplica para responsables cuyos ingresos brutos anuales se ubiquen por debajo de dicho tope.'
          ]
        },
        {
          titulo: 'Pasos para la Presentación en los Servicios de la DIAN',
          iconoSeccion: '💻',
          bordeColor: '#0f172a',
          lista: [
            '1. Ingrese al portal transaccional de la DIAN con su usuario y clave.',
            '2. Seleccione la ruta "Presentación y Pago de Impuestos" y elija "Declaraciones de IVA y Consumo".',
            '3. Diligencie el Formulario 300 detallando ingresos gravados, exentos, excluidos, IVA generado y IVA descontable.',
            '4. Firme electrónicamente el documento y guarde el recibo de confirmación.',
            '5. Efectúe el pago correspondiente de manera electrónica o presencial bancaria.'
          ]
        },
        {
          titulo: 'Consecuencias por Extemporaneidad',
          iconoSeccion: '⚠️',
          bordeColor: '#dc2626',
          texto: 'La presentación fuera de los plazos legales genera sanciones por extemporaneidad (desde el 5% mensual o fracción de mes sobre el impuesto a cargo) sumado a la liquidación de intereses moratorios calculados bajo la tasa de usura vigente (menos dos puntos porcentuales), actualizable de manera mensual.'
        }
      ],
      cursos: [
        {
          texto: 'Adquirir Curso Virtual (2 Semanas) — $600.000.00',
          color: '#1d4ed8'
        }
      ]
    }
  },
 {
    id: 'papeles',
    titulo: 'Papeles de trabajo en auditoría',
    subtitulo: '',
    icono: '📁',
    contenidoModal: {
      tituloPrincipal: 'Papeles de Trabajo en Auditoría',
      introduccion: 'Los papeles de trabajo son el conjunto de documentos físicos o digitales que el auditor elabora durante la planificación, ejecución y conclusión de una auditoría, sirviendo como soporte técnico, legal y de control del proceso de auditoría.',
      secciones: [
        {
          titulo: 'Contenido Esencial de los Documentos',
          bordeColor: '#2563eb',
          lista: [
            'Identificación: Nombre de la entidad auditada y período contable revisado.',
            'Planeación de la auditoría: Incluyendo programas y cambios realizados.',
            'Procedimientos aplicados y pruebas realizadas.',
            'Evidencia obtenida, como cálculos, análisis, confirmaciones y actas.',
            'Resultados y conclusiones alcanzadas.',
            'Referencias y marcas de auditoría que certifiquen la verificación de información.'
          ]
        },
        {
          titulo: 'Funciones Clave',
          bordeColor: '#dc2626',
          lista: [
            'Soporte técnico del dictamen: Cada conclusión debe estar respaldada por evidencia suficiente y adecuada.',
            'Transparencia y trazabilidad: Permiten reconstruir paso a paso el trabajo realizado, facilitando revisiones internas o externas.',
            'Cumplimiento normativo: Garantizan que se cumplan las normas internacionales de auditoría (NIA) y requisitos legales.',
            'Protección legal del auditor: Documentan que el trabajo se realizó con diligencia y objetividad.',
            'Referencia futura: Sirven como guía para auditorías posteriores y consultas de información.'
          ]
        },
        {
          titulo: 'Tipos y Clasificación por Etapas',
          bordeColor: '#2563eb',
          tabla: [
            { etapa: 'Planeación', info: 'Incluye programas de auditoría, análisis preliminares y evaluación de riesgos.' },
            { etapa: 'Ejecución', info: 'Registra pruebas, cálculos, confirmaciones y hallazgos.' },
            { etapa: 'Conclusión', info: 'Contiene análisis finales, recomendaciones y soporte del informe de auditoría.' }
          ]
        },
        {
          titulo: 'Mejores Prácticas',
          bordeColor: '#0f172a',
          lista: [
            'Evitar exceso de documentación, priorizando calidad sobre cantidad.',
            'Utilizar marcas y referencias para certificar la verificación de información.',
            'Mantener los papeles de trabajo claros, completos y comprensibles, de manera que cualquier auditor pueda interpretar el soporte de las conclusiones.',
            'Conservarlos durante el período exigido por la normativa aplicable.'
          ]
        }
      ],
      cursos: [
        {
          texto: 'Adquirir Curso Virtual (12 Horas) — $300.000.00',
          color: '#1d4ed8'
        }
      ]
    }
  },
  {
    id: 'nomina',
    titulo: 'Generales de la nómina en Colombia',
    subtitulo: '',
    icono: '📊',
    categoria: 'laboral',
    contenidoModal: {
      tituloPrincipal: 'Generales de la Nómina en Colombia',
      introduccion: 'La correcta liquidación de la nómina laboral exige el cumplimiento estricto de los parámetros legales mensuales, distribuidos en devengados, deducciones de ley y las correspondientes obligaciones prestacionales del empleador.',
      secciones: [
        {
          titulo: 'Devengados y Deducciones (Empleado)',
          bordeColor: '#2563eb',
          lista: [
            'Ingresos Constitutivos: Salario base ($1.750.905), auxilio de transporte ($249.095), horas extras (diurnas, nocturnas) y recargos dominicales/festivos.',
            'Deducciones de Seguridad Social: Descuento del 4% para Salud y 4% para Pensión, calculados directamente sobre el Ingreso Base de Cotización (IBC).'
          ]
        },
        {
          titulo: 'Aportes de la Empresa (Seguridad Social y Parafiscales)',
          bordeColor: '#2563eb',
          tabla: [
            { concepto: 'Pensión Empresa', porcentaje: '12.0%', detalle: 'Aporte obligatorio sobre el IBC del trabajador.' },
            { concepto: 'Salud Empresa', porcentaje: '8.5%', detalle: 'Exonerable para trabajadores que devenguen menos de 10 SMMLV.' },
            { concepto: 'ARL (Riesgos)', porcentaje: 'Varía', detalle: 'Rango desde 0.522% hasta 6.96% según el nivel de riesgo.' },
            { concepto: 'Aportes Parafiscales', porcentaje: '9.0%', detalle: 'Caja de Compensación (4%), ICBF (3%) y SENA (2%). *Exonerables.' }
          ]
        },
        {
          titulo: 'Provisiones para Prestaciones Sociales',
          bordeColor: '#16a34a',
          lista: [
            'Cesantías (8.33%): Equivalente a un mes de salario por cada año laborado.',
            'Int. Cesantías (12%): Intereses legales calculados sobre el saldo acumulado.',
            'Prima de Servicios (8.33%): Pagadero la mitad en junio y la otra mitad en diciembre.',
            'Vacaciones (4.16%): Provisión para el descanso anual de 15 días hábiles remunerados.'
          ]
        },
        {
          titulo: 'Nota de Control',
          bordeColor: '#dc2626',
          texto: 'Una liquidación imprecisa puede derivar en costosas sanciones e investigaciones por parte de la UGPP o el Ministerio del Trabajo.'
        }
      ],
      cursos: [
        {
          texto: 'Adquirir Curso Virtual (6 Horas) — $400.000.00',
          color: '#047857'
        }
      ]
    }
  }
];