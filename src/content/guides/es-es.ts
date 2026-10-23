import { CCYC_URL, LPH_URL } from "./sources";
import type { GuideDraft } from "./types";

const sources = [
  {
    label: "Ley de Propiedad Horizontal, artículo 7 (BOE)",
    href: LPH_URL,
  },
  {
    label: "Código Civil y Comercial de Argentina, artículo 1973 (InfoLEG)",
    href: CCYC_URL,
  },
] as const;

export const esEsGuides: readonly GuideDraft[] = [
  {
    slug: "extractor-para-parrilla",
    metaTitle: "Extractor para barbacoa en el balcón — Lume",
    metaDescription:
      "Extractor para parrilla o barbacoa de balcón, también a carbón. Sin conductos ni taladro. Reduce el humo. No lo elimina ni autoriza el fuego.",
    kicker: "Para la parrilla",
    h1: "Extractor para la barbacoa del balcón",
    summary:
      "Un extractor doméstico captura el humo en la parrilla, carbón incluido, sin obra. Reduce lo que sale. No lo elimina ni autoriza el fuego.",
    answer:
      "Un extractor para parrilla o barbacoa de balcón captura el humo en la parrilla, también a carbón, sin conductos y sin taladrar la fachada. Lume es ese aparato: reduce la pluma y el olor que salen. No elimina el humo, no es una barbacoa sin humo y no autoriza el fuego si los estatutos de la comunidad lo prohíben. Todavía no está a la venta.",
    sections: [
      {
        heading: "Qué es",
        paragraphs: [
          "Es un aparato de uso doméstico, con enchufe normal. Se orienta a la parrilla del balcón o de la terraza. Quien cocina se queda al lado y puede hablar. Se apoya, se cuelga o se sujeta: no se taladra la fachada, la barandilla ni el forjado.",
          "El carbón forma parte del encargo. Si solo sirviera sobre una placa de inducción, no sería Lume. Tampoco sustituye la campana de una cocina cerrada ni un extractor de restaurante.",
        ],
      },
      {
        heading: "Qué reduce, y qué deja",
        paragraphs: [
          "Reduce la pluma visible y el olor que llegan al vecino. El humo no desaparece. Los filtros se lavan en el fregadero, sin herramientas. El fuego sigue siendo de quien lo enciende.",
          "No es un permiso. Si los estatutos prohíben la barbacoa a carbón, un extractor no la vuelve permitida.",
        ],
      },
      {
        heading: "En el edificio",
        paragraphs: [
          "Se usa con horario, atendiendo al viento y con el filtro limpio. La ventana de al lado puede quedar abierta: esa es la idea. Hay una nota para la comunidad, en español neutro, escrita para reenviar.",
        ],
      },
      {
        heading: "Cuándo no corresponde",
        paragraphs: [
          "No corresponde si los estatutos prohíben el fuego. No corresponde como campana de una cocina interior. No corresponde para prometer un domingo sin una sola hebra de humo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué es un extractor para parrilla o barbacoa?",
        answer:
          "Es un aparato doméstico que toma el humo en la parrilla del balcón. Lume está pensado para carbón, sin conductos y sin obra en elementos comunes.",
      },
      {
        question: "¿Hay que hacer obra en el balcón?",
        answer:
          "No. Sin conductos y sin taladrar la fachada, la barandilla o el forjado. Basta un enchufe normal.",
      },
      {
        question: "¿Es una barbacoa sin humo?",
        answer:
          "No. Eso es el pasillo de las placas eléctricas. Lume reduce la pluma y el olor que salen del balcón. No los borra.",
      },
      {
        question: "¿Ya se puede comprar Lume?",
        answer:
          "Todavía no. Deja un correo y te avisamos cuando esté listo en España o en Argentina.",
      },
    ],
    related: ["asado-en-el-balcon", "ley-sobre-el-humo", "humo-en-el-consorcio"],
  },
  {
    slug: "asado-en-el-balcon",
    metaTitle: "Barbacoa en el balcón y la terraza — Lume",
    metaDescription:
      "¿Se puede hacer barbacoa en el balcón? Lo deciden los estatutos, la Ley de Propiedad Horizontal y la ordenanza. No hay un sí nacional.",
    kicker: "Antes de encender",
    h1: "Barbacoa en el balcón",
    summary:
      "La barbacoa en el balcón o la terraza depende de los estatutos, del artículo 7.2 y de la ordenanza local. No hay un permiso nacional.",
    answer:
      "Se puede hacer una barbacoa o un asado en el balcón solo si lo permiten los estatutos de la comunidad y el humo no se convierte en una actividad molesta para los vecinos. En España no hay una ley que autorice todas las barbacoas de terraza, ni una que las prohíba en todo el país. Mandan los estatutos, el artículo 7.2 de la Ley de Propiedad Horizontal y la ordenanza del municipio. Lume no cambia ninguna de esas reglas.",
    sections: [
      {
        heading: "La parrilla en la terraza",
        paragraphs: [
          "Barbacoa, asado y parrilla se miran igual en un edificio. Primero los estatutos. Si el carbón o el fuego abierto están prohibidos, no se enciende. Lume no lo habilita.",
          "Si los estatutos callan, el límite sigue ahí: el vecino no tiene que vivir tu comida. El humo que entra por una ventana, al rellano o a la ropa tendida forma parte de la pregunta.",
        ],
      },
      {
        heading: "España",
        paragraphs: [
          "El artículo 7.2 de la Ley de Propiedad Horizontal impide las actividades prohibidas en los estatutos, las que dañen el edificio y las que contravengan las normas sobre actividades molestas, insalubres, nocivas, peligrosas o ilícitas. El presidente puede exigir que cesen. Si continúan, la junta puede autorizar una acción de cesación.",
          "Además, la ordenanza municipal puede regular el fuego en terrazas. No es la misma en Madrid, en Barcelona o en un pueblo. Conviene leer la del ayuntamiento, no una frase de internet.",
        ],
      },
      {
        heading: "Argentina",
        paragraphs: [
          "Allí la pregunta se dice asado en el balcón. No hay una prohibición nacional para todos los edificios. El artículo 1973 del Código Civil y Comercial pide que el humo, el calor y los olores no excedan la tolerancia normal del lugar, aunque exista una autorización administrativa. El reglamento del consorcio puede ser más estricto.",
        ],
      },
      {
        heading: "Si el fuego está permitido",
        paragraphs: [
          "Ahí importa la cortesía: horario, viento, filtro limpio y capturar el humo en la parrilla. Lume está pensado para ese caso, para que la ventana de al lado pueda quedar abierta. Sigue siendo una cortesía, no un permiso.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Está prohibida la barbacoa en el balcón?",
        answer:
          "No en toda España por una sola ley. Pueden prohibirla los estatutos de tu comunidad o la ordenanza municipal. Y aunque no la prohíban, el humo puede ser una actividad molesta según el artículo 7.2 de la Ley de Propiedad Horizontal.",
      },
      {
        question: "¿Se puede hacer asado en el balcón en Argentina?",
        answer:
          "No hay una ley nacional que lo prohíba en todos los edificios. Puede prohibirlo el reglamento del consorcio. El humo, además, no debe exceder la tolerancia normal del artículo 1973 del Código Civil y Comercial.",
      },
      {
        question: "¿La terraza comunitaria es lo mismo que mi balcón?",
        answer:
          "No. Una terraza de uso común se rige como elemento común. Un balcón de uso privativo sigue sujeto a los estatutos y al artículo 7.2. En los dos casos, un extractor no crea un derecho nuevo.",
      },
      {
        question: "¿Un extractor me autoriza a encender?",
        answer:
          "No. Si el fuego está prohibido, sigue prohibido. Si está permitido, reducir el humo que sale es una cortesía, no una autorización.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "vecinos-y-denuncias"],
    sources,
  },
  {
    slug: "ley-sobre-el-humo",
    metaTitle: "Ley sobre el humo y la barbacoa — Lume",
    metaDescription:
      "Ley sobre el humo: en España, propiedad horizontal art. 7.2. En Argentina, CCyC art. 1973. No es un permiso para la barbacoa.",
    kicker: "La regla",
    h1: "Ley sobre el humo y la parrilla",
    summary:
      "No hay una ley de la parrilla. En España el humo se mira por el artículo 7.2 y los estatutos. En Argentina, por el CCyC art. 1973.",
    answer:
      "No existe una ley sobre parrilla con ese nombre. En España, la ley sobre el humo en un edificio es el artículo 7.2 de la Ley de Propiedad Horizontal: no están permitidas las actividades que prohíben los estatutos, las que dañan la finca ni las molestas, insalubres, nocivas, peligrosas o ilícitas. En Argentina, el artículo 1973 del Código Civil y Comercial dice que el humo, el calor y los olores entre vecinos no deben exceder la tolerancia normal. Lume no es esa ley y no la modifica.",
    sections: [
      {
        heading: "España: el artículo 7.2",
        paragraphs: [
          "El artículo 7.2 de la Ley 49/1960 de Propiedad Horizontal dice: “Al propietario y al ocupante del piso o local no les está permitido desarrollar en él o en el resto del inmueble actividades prohibidas en los estatutos, que resulten dañosas para la finca o que contravengan las disposiciones generales sobre actividades molestas, insalubres, nocivas, peligrosas o ilícitas.”",
          "El presidente, por su cuenta o porque se lo pida un propietario o un ocupante, puede exigir el cese inmediato. Si la actividad continúa, la junta de propietarios, convocada para eso, puede autorizar una acción de cesación. La ordenanza municipal puede añadir reglas sobre fuego en terrazas. No es igual en todas las ciudades.",
        ],
      },
      {
        heading: "Los estatutos mandan en tu edificio",
        paragraphs: [
          "Los estatutos pueden prohibir la barbacoa, el carbón o el fuego en balcones aunque una ordenanza no diga nada. Esa prohibición obliga. Un aparato no la deroga. El silencio de los estatutos tampoco es un permiso para molestar: el artículo 7.2 sigue ahí.",
        ],
      },
      {
        heading: "Argentina: el artículo 1973",
        paragraphs: [
          "El artículo 1973 del Código Civil y Comercial, bajo el título Inmisiones, dice: “Las molestias que ocasionan el humo, calor, olores, luminosidad, ruidos, vibraciones o inmisiones similares por el ejercicio de actividades en inmuebles vecinos, no deben exceder la normal tolerancia teniendo en cuenta las condiciones del lugar y aunque medie autorización administrativa para aquéllas.”",
          "El juez puede ordenar que la molestia cese y puede condenar a indemnizar. Para el cese pondera el uso regular de la propiedad, la prioridad en el uso, el interés general y las exigencias de la producción.",
        ],
      },
      {
        heading: "Lo que la ley no dice",
        paragraphs: [
          "No dice que un extractor legalice el carbón. No dice que la barbacoa esté siempre prohibida, ni siempre permitida. No publica un porcentaje de humo aceptable. Si ya hay un conflicto en tu comunidad, el texto que manda es el de tus estatutos, y quien lo interpreta en un caso concreto es un abogado, no esta página.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Hay una ley sobre parrilla o sobre barbacoa?",
        answer:
          "No con ese nombre. En España están el artículo 7.2 de la Ley de Propiedad Horizontal, los estatutos y la ordenanza municipal. En Argentina, el artículo 1973 del Código Civil y Comercial y el reglamento del consorcio.",
      },
      {
        question: "¿Qué se considera una actividad molesta?",
        answer:
          "El artículo 7.2 nombra las actividades molestas, insalubres, nocivas, peligrosas o ilícitas, y también lo que prohíben los estatutos. No da un número de humo. Horario, frecuencia y si entra en la vivienda de al lado importan.",
      },
      {
        question: "¿Sirve decir que el ayuntamiento no me ha dicho nada?",
        answer:
          "No alcanza. Los estatutos pueden prohibir el fuego aunque el ayuntamiento no haya abierto un expediente. Y una autorización administrativa, donde exista, no borra el deber de no molestar.",
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
    metaTitle: "Humo en la comunidad de propietarios — Lume",
    metaDescription:
      "Humo en la comunidad: los estatutos pueden prohibir la barbacoa, y el humo puede ser una actividad molesta. Una cortesía no es un permiso.",
    kicker: "El edificio",
    h1: "Humo en la comunidad de propietarios",
    summary:
      "El humo en la comunidad choca con los estatutos y con el artículo 7.2. En Argentina el nombre es consorcio. Un extractor no deroga la prohibición.",
    answer:
      "El humo en la comunidad de propietarios —en Argentina se dice humo en el consorcio— se mira con dos reglas. Los estatutos pueden prohibir la barbacoa o el carbón. Y, aunque no lo prohíban, el humo puede ser una actividad molesta según el artículo 7.2 de la Ley de Propiedad Horizontal. Lume reduce lo que sale del balcón cuando el fuego está permitido. No sustituye a los estatutos y no le gana una votación a la junta.",
    sections: [
      {
        heading: "Las dos reglas",
        paragraphs: [
          "La primera es del edificio. Los estatutos pueden limitar el fuego, el horario o el tipo de parrilla. Se cumplen. Un aparato nuevo no los deroga.",
          "La segunda es entre vecinos. Aunque los estatutos permitan encender, el humo que entra en otro piso puede ser una molestia que el artículo 7.2 no admite. Si una de las dos prohíbe, no se enciende.",
        ],
      },
      {
        heading: "Qué puede decidir la comunidad",
        paragraphs: [
          "El presidente y el administrador aplican los estatutos. La junta acuerda dentro de la ley y de esos estatutos. Hay comunidades que ya prohibieron el carbón. Otras no escribieron nada y aun así pueden exigir el cese de una actividad molesta.",
          "El grupo de vecinos no es los estatutos. Un mensaje ahí es un mensaje. La cláusula escrita es otra cosa.",
        ],
      },
      {
        heading: "Qué llevarle al presidente",
        paragraphs: [
          "Una nota breve: qué es el extractor, que no hay obra ni taladro, que no elimina el humo por completo y que no habilita un fuego prohibido. Lume publica esa nota para reenviar. Está en español neutro, sin voseo, para que sirva en Madrid o en Buenos Aires.",
          "Conviene sumar cuidado: horario, viento y filtro limpio. El humo en el rellano, en un dormitorio o en la ropa del vecino no es un detalle.",
        ],
      },
      {
        heading: "En Argentina se llama consorcio",
        paragraphs: [
          "Allí el reglamento de propiedad horizontal puede prohibir la parrilla, y el artículo 1973 del Código Civil y Comercial pide que el humo no exceda la tolerancia normal del lugar. La lógica es la misma. Cambia el nombre del edificio, no el cuidado.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿La comunidad puede prohibir la barbacoa?",
        answer:
          "Sí, si los estatutos la prohíben. No hace falta una ley nacional titulada “prohibida la barbacoa” para que tu edificio no la permita.",
      },
      {
        question: "¿Qué es el humo en el consorcio?",
        answer:
          "Es el nombre argentino de esta misma pregunta. Manda el reglamento del consorcio, y el artículo 1973 del Código Civil y Comercial para la tolerancia entre vecinos.",
      },
      {
        question: "¿Basta un extractor para que la comunidad acepte?",
        answer:
          "No. Puede ayudar a que un fuego permitido moleste menos. No convierte un no de los estatutos en un sí.",
      },
      {
        question: "¿Qué no le digo al presidente?",
        answer:
          "Que no va a haber humo, que nadie podrá quejarse, o que Lume es una autorización. Nada de eso es cierto.",
      },
    ],
    related: ["ley-sobre-el-humo", "vecinos-y-denuncias", "extractor-para-parrilla"],
    sources,
  },
  {
    slug: "vecinos-y-denuncias",
    metaTitle: "Vecinos y denuncias por humo de barbacoa — Lume",
    metaDescription:
      "Vecinos y denuncias por humo: qué se puede reclamar, qué deciden los estatutos y qué no resuelve un extractor.",
    kicker: "Los dos balcones",
    h1: "Vecinos y denuncias por humo",
    summary:
      "Un vecino puede reclamar una actividad molesta o un fuego que los estatutos prohíben. Una denuncia no es una multa, y un extractor no la frena.",
    answer:
      "Un vecino puede quejarse si el humo de la barbacoa es una actividad molesta o si los estatutos prohíben ese fuego. Una denuncia no es, por sí sola, una multa. En España el presidente puede exigir el cese y, si la molestia sigue, la junta puede autorizar una acción de cesación, según el artículo 7.2 de la Ley de Propiedad Horizontal. En Argentina el camino civil suele pasar por el consorcio y, si sigue, por mediación y un juez, con el artículo 1973 del Código Civil y Comercial. Lume no frena una denuncia ni la vuelve improcedente.",
    sections: [
      {
        heading: "Queja, denuncia y multa",
        paragraphs: [
          "No son la misma cosa. Una queja en el grupo de la comunidad es un mensaje. Una denuncia puede ser un escrito al presidente, un trámite ante el ayuntamiento si hay una ordenanza, o el inicio de un juicio. La sanción, cuando existe, la impone quien tiene esa facultad. A menudo es el ayuntamiento, no el vecino.",
          "Esta página no dice qué importe corresponde en tu ciudad. Esas cifras cambian, e inventarlas sería una falta de respeto.",
        ],
      },
      {
        heading: "El camino que prevé la ley",
        paragraphs: [
          "Hablar. Después, el presidente o el administrador. Después, la junta. El artículo 7.2 describe un requerimiento de cese y, si la conducta persiste, la autorización de la junta para una acción de cesación.",
          "En Argentina, muchas provincias prevén una mediación antes del juicio. No es igual en todo el país. El artículo 1973 es la regla del humo entre vecinos, y el reglamento del consorcio es la regla del edificio.",
        ],
      },
      {
        heading: "Desde los dos balcones",
        paragraphs: [
          "Quien cocina debe el cuidado: horario, viento, filtro, y no usar el aparato como argumento. Quien recibe el humo puede pedir que su ventana pueda quedar abierta. El vecino no es un enemigo por pedirlo.",
          "El conflicto empeora cuando cada lado busca una frase que lo declare ganador. Esa frase no está en un extractor.",
        ],
      },
      {
        heading: "Lo que no conviene afirmar",
        paragraphs: [
          "Que no hay ley. Que la barbacoa es un derecho en cualquier terraza. Que con un extractor nadie puede denunciar. Que cualquier humo basta para ganar un pleito. Ninguna de las cuatro es cierta.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Me pueden denunciar por el humo de la barbacoa?",
        answer:
          "Pueden reclamar si el humo es una actividad molesta o si el fuego está prohibido por los estatutos. Que el reclamo prospere depende del caso, de la comunidad y de los hechos.",
      },
      {
        question: "¿Una denuncia significa que ya he perdido?",
        answer:
          "No. Significa que alguien ha pedido que pares, o que intervengan la comunidad, el ayuntamiento o un juez. La regla se aplica al hecho: qué dicen los estatutos y cuánto humo llega.",
      },
      {
        question: "¿Lume evita la denuncia de un vecino?",
        answer:
          "No. Puede reducir la pluma y el olor cuando el fuego está permitido. No es una defensa y no es un permiso.",
      },
      {
        question: "¿Qué hago si el de al lado enciende cada fin de semana?",
        answer:
          "Empieza por el presidente, con hechos: días, horarios y por dónde entra el humo. Estas páginas explican el marco. No redactan la denuncia ni dicen si se gana.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "asado-en-el-balcon"],
    sources,
  },
];
