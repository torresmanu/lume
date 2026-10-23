import { CCYC_URL, LPH_URL } from "./sources";
import type { GuideDraft } from "./types";

const sources = [
  {
    label: "Código Civil y Comercial de la Nación, artículo 1973 (InfoLEG)",
    href: CCYC_URL,
  },
  {
    label: "Ley de Propiedad Horizontal de España, artículo 7 (BOE)",
    href: LPH_URL,
  },
] as const;

export const esArGuides: readonly GuideDraft[] = [
  {
    slug: "extractor-para-parrilla",
    metaTitle: "Extractor para parrilla de balcón — Lume",
    metaDescription:
      "Extractor para parrilla de balcón, también a carbón. Sin conductos ni taladro. Reduce el humo que sale. No lo elimina ni habilita el fuego.",
    kicker: "Para la parrilla",
    h1: "Extractor para parrilla de balcón",
    summary:
      "Un extractor de uso doméstico captura el humo en la reja, también a carbón, sin obra. Reduce lo que sale. No lo elimina ni habilita el fuego.",
    answer:
      "Un extractor para parrilla de balcón captura el humo en la reja, también a carbón, sin conductos y sin taladro en el edificio. Lume es ese aparato: reduce la pluma y el olor que salen del balcón. No elimina el humo, no es un asado sin humo y no habilita el fuego si el reglamento del consorcio lo prohíbe. Todavía no está a la venta.",
    sections: [
      {
        heading: "Qué es un extractor para parrilla",
        paragraphs: [
          "Es un aparato de uso doméstico, con enchufe normal. Se apunta a la reja de la parrilla del balcón. Quien cocina se queda al lado y puede hablar. Se apoya, se cuelga o se afirma: no se agujerea la fachada, la baranda ni la losa.",
          "El carbón entra en el encargo. Si solo sirviera sobre una placa de inducción, no sería Lume. Tampoco reemplaza la campana de una cocina cerrada, ni es un extractor de restaurante.",
        ],
      },
      {
        heading: "Qué reduce, y qué deja",
        paragraphs: [
          "Reduce la pluma visible y el olor que llegan al vecino. El humo no desaparece. Los filtros se lavan en la pileta, sin herramientas. El fuego sigue siendo de quien lo enciende.",
          "No es un permiso. Si el reglamento prohíbe la parrilla a carbón, un extractor no la vuelve permitida. La cortesía no le gana a la prohibición.",
        ],
      },
      {
        heading: "En el edificio",
        paragraphs: [
          "Se usa con horario, con ojo al viento y con el filtro limpio. La ventana de al lado puede quedar abierta: esa es la idea. Hay una nota para el consorcio, escrita para reenviar, que dice qué es Lume y qué no promete.",
        ],
      },
      {
        heading: "Cuándo no corresponde",
        paragraphs: [
          "No corresponde si el reglamento prohíbe el fuego. No corresponde como campana de una cocina interior. No corresponde para prometerle a nadie un domingo sin una sola hebra de humo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué es un extractor para parrilla?",
        answer:
          "Es un aparato de uso doméstico que toma el humo en la reja de una parrilla de balcón. Lume está pensado para carbón, sin conductos y sin obra en partes comunes.",
      },
      {
        question: "¿Hay que romper el balcón para instalarlo?",
        answer:
          "No. Sin conductos y sin taladro en la fachada, la baranda o la losa. Alcanza un enchufe normal.",
      },
      {
        question: "¿Es un asado sin humo?",
        answer:
          "No. El asado sin humo es otra categoría, la de las placas eléctricas. Lume reduce la pluma y el olor que salen del balcón. No los borra.",
      },
      {
        question: "¿Ya se puede comprar Lume?",
        answer:
          "Todavía no. Dejá un correo y te avisamos cuando esté listo en Argentina o en España.",
      },
    ],
    related: ["asado-en-el-balcon", "ley-sobre-el-humo", "humo-en-el-consorcio"],
  },
  {
    slug: "asado-en-el-balcon",
    metaTitle: "Asado en el balcón — Lume",
    metaDescription:
      "¿Se puede hacer asado en el balcón? Lo deciden el reglamento y la tolerancia entre vecinos. No hay una prohibición nacional para todos.",
    kicker: "Antes de encender",
    h1: "Asado en el balcón",
    summary:
      "El asado en el balcón depende del reglamento y de la tolerancia entre vecinos. No hay una ley nacional que lo prohíba en todos los edificios.",
    answer:
      "Se puede hacer asado en el balcón solo si lo permite el reglamento del consorcio y el humo, el olor y el calor se quedan dentro de la tolerancia normal entre vecinos. En Argentina no hay una ley nacional que prohíba todo asado de balcón. En España mandan los estatutos, la Ley de Propiedad Horizontal y la ordenanza del municipio. Lume no cambia ninguna de esas reglas.",
    sections: [
      {
        heading: "La parrilla en el balcón",
        paragraphs: [
          "Parrilla y asado se miran igual. Primero el reglamento de tu edificio. Si el carbón o el fuego abierto están prohibidos, no se enciende. Lume no lo habilita.",
          "Si el reglamento calla, igual existe un techo: el vecino no tiene que vivir tu domingo. El humo que entra por una ventana, al palier o a la ropa tendida ya es parte de la pregunta.",
        ],
      },
      {
        heading: "Argentina",
        paragraphs: [
          "No hay una prohibición nacional única para el asado en el balcón. Algunos municipios regulan el fuego a cielo abierto, y cada consorcio puede ser más estricto que la ley general. El artículo 1973 del Código Civil y Comercial pone el otro límite: el humo, el calor y los olores no deben exceder la tolerancia normal del lugar, aunque exista una autorización administrativa.",
        ],
      },
      {
        heading: "España",
        paragraphs: [
          "La pregunta de allá es la barbacoa en la terraza o el balcón. La responden los estatutos de la comunidad, el artículo 7.2 de la Ley de Propiedad Horizontal y la ordenanza local. No es la misma regla en todas las ciudades.",
        ],
      },
      {
        heading: "Si el fuego está permitido",
        paragraphs: [
          "Ahí la cortesía importa: horario, viento, filtro limpio, y capturar el humo en la reja. Lume está pensado para ese caso, para que la ventana de al lado pueda quedar abierta. Sigue siendo una cortesía, no un permiso.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Está prohibido el asado en el balcón en Argentina?",
        answer:
          "No hay una ley nacional que lo prohíba en todos los edificios. Puede prohibirlo el reglamento de tu consorcio. Y aunque no lo prohíba, el humo no debe exceder la tolerancia normal del artículo 1973 del Código Civil y Comercial.",
      },
      {
        question: "¿Se puede tener una parrilla en el balcón?",
        answer:
          "Es la misma pregunta. Manda el reglamento, y después la tolerancia entre vecinos. Un extractor no invierte ese orden.",
      },
      {
        question: "¿Y en España se puede hacer barbacoa en la terraza?",
        answer:
          "Depende de los estatutos y de la ordenanza del municipio. El artículo 7.2 de la Ley de Propiedad Horizontal alcanza a las actividades molestas y a lo que los estatutos prohíben. No hay un sí para todo el país.",
      },
      {
        question: "¿Un extractor me autoriza a hacer asado?",
        answer:
          "No. Si el fuego está prohibido, sigue prohibido. Si está permitido, reducir el humo que sale es una cortesía, no una autorización.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "vecinos-y-denuncias"],
    sources,
  },
  {
    slug: "ley-sobre-el-humo",
    metaTitle: "Ley sobre el humo y la parrilla — Lume",
    metaDescription:
      "Ley sobre el humo y la parrilla: en Argentina, CCyC art. 1973. En España, propiedad horizontal art. 7.2. No es un permiso para el asado.",
    kicker: "La regla",
    h1: "Ley sobre el humo y la parrilla",
    summary:
      "No hay una ley de la parrilla. El humo entre vecinos se rige, en Argentina, por el CCyC art. 1973 y, en España, por la propiedad horizontal art. 7.2.",
    answer:
      "No existe una ley sobre parrilla con ese nombre. La ley sobre el humo, en Argentina, es el artículo 1973 del Código Civil y Comercial: el humo, el calor y los olores entre vecinos no deben exceder la tolerancia normal, aunque haya una autorización administrativa. En España, el artículo 7.2 de la Ley de Propiedad Horizontal frena lo que prohíben los estatutos y las actividades molestas, insalubres, nocivas, peligrosas o ilícitas. Lume no es esa ley y no la modifica.",
    sections: [
      {
        heading: "Argentina: el artículo 1973",
        paragraphs: [
          "El artículo 1973 del Código Civil y Comercial, bajo el título Inmisiones, dice: “Las molestias que ocasionan el humo, calor, olores, luminosidad, ruidos, vibraciones o inmisiones similares por el ejercicio de actividades en inmuebles vecinos, no deben exceder la normal tolerancia teniendo en cuenta las condiciones del lugar y aunque medie autorización administrativa para aquéllas.”",
          "Si la molestia pasa ese límite, el juez puede ordenar que se quite la causa o que cese, y puede condenar a indemnizar los daños. Para ordenar el cese pondera el uso regular de la propiedad, la prioridad en el uso, el interés general y las exigencias de la producción. La tolerancia normal no es un número publicado: pesan el lugar, el horario, la frecuencia y si el humo entra en la casa de al lado.",
        ],
      },
      {
        heading: "El reglamento es la otra puerta",
        paragraphs: [
          "La propiedad horizontal tiene reglamento. Ahí puede estar prohibida la parrilla, el carbón o el fuego en los balcones. Esa cláusula obliga aunque el humo hubiera sido tolerable. Son dos preguntas distintas: si el edificio permite el fuego, y si el humo que sale se queda dentro de la tolerancia.",
          "Una autorización administrativa, si existiera, tampoco alcanza para molestar de más. El artículo 1973 lo dice: la tolerancia se juzga aunque esa autorización medie.",
        ],
      },
      {
        heading: "España: el artículo 7.2",
        paragraphs: [
          "El artículo 7.2 de la Ley 49/1960 de Propiedad Horizontal dice: “Al propietario y al ocupante del piso o local no les está permitido desarrollar en él o en el resto del inmueble actividades prohibidas en los estatutos, que resulten dañosas para la finca o que contravengan las disposiciones generales sobre actividades molestas, insalubres, nocivas, peligrosas o ilícitas.”",
          "El presidente puede exigir que esa actividad cese, por su cuenta o porque lo pida un propietario o un ocupante. Si sigue, la junta de propietarios puede autorizar una acción de cesación. La ordenanza del municipio puede sumar reglas sobre fuego en terrazas. No es igual en todas las ciudades.",
        ],
      },
      {
        heading: "Lo que la ley no dice",
        paragraphs: [
          "No dice que un extractor legalice el carbón. No dice que el asado esté siempre prohibido, ni que esté siempre permitido. No fija un porcentaje de humo aceptable. Quien necesite una respuesta para su edificio tiene que leer su reglamento y, si ya hay un conflicto, consultar a un abogado.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Hay una ley sobre parrilla?",
        answer:
          "No con ese nombre. Están la regla del humo entre vecinos y el reglamento de cada edificio. En Argentina, el artículo 1973 del Código Civil y Comercial. En España, el artículo 7.2 de la Ley de Propiedad Horizontal y los estatutos.",
      },
      {
        question: "¿Qué es la tolerancia normal?",
        answer:
          "Es el límite del artículo 1973: la molestia se juzga según las condiciones del lugar. No es un porcentaje. Horario, frecuencia, intensidad y por dónde entra el humo forman parte de ese juicio.",
      },
      {
        question: "¿Alcanza con que el municipio no me haya dicho nada?",
        answer:
          "No siempre. El silencio administrativo no deroga el reglamento del consorcio. Y aunque hubiera una autorización, el artículo 1973 igual pide que el humo no exceda la tolerancia normal.",
      },
      {
        question: "¿Lume cumple la ley por mí?",
        answer:
          "No. Es una cortesía para reducir la pluma y el olor cuando el fuego está permitido. Encender sigue siendo responsabilidad de quien cocina.",
      },
    ],
    related: ["humo-en-el-consorcio", "asado-en-el-balcon", "vecinos-y-denuncias"],
    sources,
  },
  {
    slug: "humo-en-el-consorcio",
    metaTitle: "Humo en el consorcio — Lume",
    metaDescription:
      "Humo en el consorcio: el reglamento puede prohibir la parrilla, y el humo no debe pasar la tolerancia normal. Una cortesía no es un permiso.",
    kicker: "El edificio",
    h1: "Humo en el consorcio",
    summary:
      "El humo en el consorcio choca con dos reglas: lo que prohíbe el reglamento, y la tolerancia normal entre vecinos. Un extractor no deroga ninguna.",
    answer:
      "El humo en el consorcio se mira con dos reglas. El reglamento puede prohibir la parrilla o el carbón en los balcones. Y, aunque no los prohíba, el humo, el olor y el calor no deben exceder la tolerancia normal entre vecinos, que en Argentina fija el artículo 1973 del Código Civil y Comercial. Lume reduce lo que sale del balcón cuando el fuego está permitido. No reemplaza al reglamento y no le gana una votación a la asamblea.",
    sections: [
      {
        heading: "Las dos reglas",
        paragraphs: [
          "La primera es del edificio: el reglamento de propiedad horizontal puede limitar el fuego, el horario o el tipo de parrilla. Se cumple. Un aparato nuevo no la deroga.",
          "La segunda es entre vecinos. Aunque el reglamento permita encender, el humo que entra en otro departamento puede pasar la tolerancia normal. Las dos pueden aplicar juntas. Con una sola que prohíba, no se enciende.",
        ],
      },
      {
        heading: "Qué puede decidir el consorcio",
        paragraphs: [
          "El administrador aplica el reglamento. La asamblea decide dentro de lo que ese reglamento y la ley le permiten. Muchos edificios ya escribieron la prohibición del carbón. Otros nunca la escribieron y aun así pueden reclamar el humo que no se tolera.",
          "El grupo de WhatsApp no es el reglamento. Una queja ahí es un mensaje. La cláusula escrita es otra cosa.",
        ],
      },
      {
        heading: "Qué llevarle al administrador",
        paragraphs: [
          "Una nota corta alcanza: qué es el extractor, que no hay obra ni taladro, que no elimina el humo por completo y que no habilita un fuego prohibido. Lume publica esa nota para reenviar. El presidente no tiene que adivinar un folleto.",
          "Conviene sumar consideración: horario, viento y filtro limpio. El humo en el palier, en un dormitorio o en la ropa del vecino no es un detalle menor.",
        ],
      },
      {
        heading: "En España se llama comunidad",
        paragraphs: [
          "Allá el humo en la comunidad de propietarios sigue la misma lógica, con otros nombres: estatutos en lugar de reglamento de consorcio, y el artículo 7.2 de la Ley de Propiedad Horizontal para las actividades molestas y las prohibidas. La nota de Lume está en español neutro para que un presidente de cualquiera de los dos países pueda reenviarla.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El consorcio puede prohibir el asado?",
        answer:
          "Sí, si el reglamento lo prohíbe. No hace falta una ley nacional que diga “prohibido el asado” para que tu edificio no lo permita.",
      },
      {
        question: "¿El humo en la comunidad de propietarios es otra cosa?",
        answer:
          "En España el nombre es comunidad, no consorcio. Mandan los estatutos y el artículo 7.2 de la Ley de Propiedad Horizontal. La cortesía es la misma: reducir el humo no autoriza lo que está prohibido.",
      },
      {
        question: "¿Alcanza con un extractor para que el consorcio acepte?",
        answer:
          "No. Puede ayudar a que un fuego permitido moleste menos. No convierte un no del reglamento en un sí.",
      },
      {
        question: "¿Qué no le digo al administrador?",
        answer:
          "Que no va a haber humo, que nadie va a poder quejarse, o que Lume es una autorización. Nada de eso es cierto.",
      },
    ],
    related: ["ley-sobre-el-humo", "vecinos-y-denuncias", "extractor-para-parrilla"],
    sources,
  },
  {
    slug: "vecinos-y-denuncias",
    metaTitle: "Vecinos y denuncias por humo de parrilla — Lume",
    metaDescription:
      "Vecinos y denuncias por humo de parrilla: qué se puede reclamar, qué decide el reglamento y qué no resuelve un extractor.",
    kicker: "Los dos balcones",
    h1: "Vecinos y denuncias por humo",
    summary:
      "Un vecino puede reclamar el humo que pasa la tolerancia, o un fuego que el reglamento prohíbe. Una denuncia no es una multa, y un extractor no la frena.",
    answer:
      "Un vecino puede quejarse si el humo de la parrilla entra en su casa más allá de la tolerancia normal, o si el reglamento prohíbe ese fuego. Una denuncia no es, por sí sola, una multa. En Argentina el camino civil suele pasar por el consorcio y, si sigue, por mediación y un juez, con el artículo 1973 del Código Civil y Comercial como regla del humo. En España el presidente puede exigir que la molestia cese y la junta puede autorizar una acción de cesación, según el artículo 7.2 de la Ley de Propiedad Horizontal. Lume no frena una denuncia ni la vuelve improcedente.",
    sections: [
      {
        heading: "Queja, denuncia y multa",
        paragraphs: [
          "No son la misma cosa. Una queja en el grupo del edificio es un mensaje. Una denuncia puede ser un reclamo ante el consorcio, un trámite municipal si hay una ordenanza, o el inicio de un reclamo civil. La multa, cuando existe, la pone quien tiene esa facultad. Muchas veces es el municipio, no el vecino de al lado.",
          "Este sitio no dice qué multa corresponde en tu ciudad. Esas cifras cambian, y inventarlas sería una falta de respeto.",
        ],
      },
      {
        heading: "El camino que suele existir",
        paragraphs: [
          "Hablar. Después, el administrador o el presidente. Después, la asamblea. Si el humo sigue fuera de la tolerancia, o si se enciende un fuego que el reglamento prohíbe, ahí aparece el camino legal.",
          "En muchas provincias argentinas hay una mediación antes del juicio. No es igual en todo el país. En España, el artículo 7.2 prevé un requerimiento del presidente y, si la molestia sigue, la autorización de la junta para una acción de cesación.",
        ],
      },
      {
        heading: "Desde los dos balcones",
        paragraphs: [
          "Quien cocina debe el cuidado: horario, viento, filtro, y no usar el aparato como argumento. Quien recibe el humo puede pedir que la ventana se pueda abrir. El vecino no es un enemigo por eso.",
          "El conflicto empeora cuando cada uno busca una frase que lo declare ganador. La frase no está en un extractor.",
        ],
      },
      {
        heading: "Lo que no conviene afirmar",
        paragraphs: [
          "Que no hay ley. Que el asado es un derecho en cualquier balcón. Que con un extractor nadie puede denunciar. Que cualquier humo alcanza para ganar un reclamo. Ninguna de las cuatro es cierta.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Me pueden denunciar por el humo del asado?",
        answer:
          "Pueden reclamar si el humo excede la tolerancia normal o si el fuego está prohibido por el reglamento. Que el reclamo prospere depende del caso, del edificio y de los hechos.",
      },
      {
        question: "¿Una denuncia significa que ya perdí?",
        answer:
          "No. Significa que alguien pidió que pare, o que intervenga el edificio, el municipio o un juez. La regla se aplica al hecho: qué dice el reglamento y cuánto humo llega.",
      },
      {
        question: "¿Lume evita la denuncia de un vecino?",
        answer:
          "No. Puede reducir la pluma y el olor cuando el fuego está permitido. No es una defensa, no es una multa al revés y no es un permiso.",
      },
      {
        question: "¿Qué hago si el de al lado hace asado todos los días?",
        answer:
          "Empezá por el administrador, con hechos: días, horarios y por dónde entra el humo. Estas páginas explican el marco. No arman el reclamo ni dicen si se gana.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "asado-en-el-balcon"],
    sources,
  },
];
