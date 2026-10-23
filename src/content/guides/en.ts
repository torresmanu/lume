import { CCYC_URL, LPH_URL } from "./sources";
import type { GuideDraft } from "./types";

const sources = [
  {
    label: "Argentine Civil and Commercial Code, article 1973 (InfoLEG)",
    href: CCYC_URL,
  },
  {
    label: "Spanish Horizontal Property Act, article 7 (BOE)",
    href: LPH_URL,
  },
] as const;

export const enGuides: readonly GuideDraft[] = [
  {
    slug: "extractor-para-parrilla",
    metaTitle: "Extractor for a balcony grill — Lume",
    metaDescription:
      "A balcony grill extractor for charcoal. No ducts, no drilling. It reduces smoke leaving the balcony. It does not remove it or permit fire.",
    kicker: "For the grill",
    h1: "Extractor for a balcony grill",
    summary:
      "A household extractor captures smoke at the grate, charcoal included, with no building work. It reduces what leaves. It does not remove it or permit fire.",
    answer:
      "An extractor para parrilla — a balcony grill extractor — captures smoke at the grate, charcoal included, with no ducts and no drilling into the building. Lume is that object. It reduces the plume and the odour that leave the balcony. It does not eliminate smoke, it is not a smokeless barbecue, and it does not allow fire where the building rules forbid it. It is not for sale yet.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A household appliance, on an ordinary plug. It aims at the grate of a balcony grill. The cook stays beside it and can talk. It stands, hangs, or clamps. It does not hole the façade, the railing, or the slab.",
          "Charcoal is part of the job. If it only worked over an induction plate, it would not be Lume. It is not a kitchen rangehood for a closed room, and it is not a restaurant hood.",
        ],
      },
      {
        heading: "What it reduces",
        paragraphs: [
          "It reduces the visible plume and the odour that reach the neighbour. The smoke does not vanish. Filters wash in the sink, with no tools. The fire still belongs to the person who lights it.",
          "It is not a permit. If the building forbids a charcoal grill, an extractor does not make that grill allowed.",
        ],
      },
      {
        heading: "In the building",
        paragraphs: [
          "Use it with a sense of the hour, the wind, and a clean filter. The point is that the neighbour’s window can stay open. There is a note for the building, written to be forwarded, that says what Lume is and what it does not promise.",
        ],
      },
      {
        heading: "When it does not belong",
        paragraphs: [
          "It does not belong where the rules forbid fire. It does not belong as a hood for an indoor kitchen. It does not belong in a promise of a Sunday with no smoke at all.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is an extractor para parrilla?",
        answer:
          "It is the Spanish name for a household extractor that takes smoke at the grate of a balcony grill. Lume is built for charcoal, with no ducts and no work on the common structure.",
      },
      {
        question: "Do I have to drill the balcony?",
        answer:
          "No. No ducts, and no drilling into the façade, the railing, or the slab. An ordinary plug is enough.",
      },
      {
        question: "Is it smokeless?",
        answer:
          "No. Smokeless barbecue is a different aisle, the electric plates. Lume reduces the plume and the odour leaving the balcony. It does not erase them.",
      },
      {
        question: "Can I buy Lume yet?",
        answer:
          "Not yet. Leave an email and we will write when it is ready in Argentina or Spain.",
      },
    ],
    related: ["asado-en-el-balcon", "ley-sobre-el-humo", "humo-en-el-consorcio"],
  },
  {
    slug: "asado-en-el-balcon",
    metaTitle: "Barbecue on a balcony — Lume",
    metaDescription:
      "Can you barbecue on a balcony? Building rules and neighbour tolerance decide. There is no national yes for every flat.",
    kicker: "Before you light it",
    h1: "Barbecue on a balcony",
    summary:
      "Asado en el balcón is allowed only when the building allows the fire and the smoke stays within ordinary neighbourly tolerance.",
    answer:
      "You can have an asado en el balcón — a barbecue on the balcony — only when the building rules allow it and the smoke, smell, and heat stay within what neighbours can ordinarily tolerate. Argentina has no national law that bans every balcony grill. Spain decides it through the community statutes, the Horizontal Property Act, and the local ordinance. Lume changes none of those rules.",
    sections: [
      {
        heading: "The grill on the balcony",
        paragraphs: [
          "Grill and Sunday barbecue are the same question. Read the building rules first. If charcoal or open fire is forbidden, do not light it. Lume does not unlock it.",
          "If the rules are silent, a limit remains: the neighbour does not have to live your afternoon. Smoke in a bedroom, a stair, or drying laundry is part of the question.",
        ],
      },
      {
        heading: "Argentina",
        paragraphs: [
          "There is no single national ban on balcony asado. A city may regulate open flame, and a consorcio — the building association — may be stricter than the general law. Article 1973 of the Civil and Commercial Code sets the other limit: smoke, heat, and odours from a neighbouring property must not exceed normal tolerance for that place, even if an administrative permit exists.",
        ],
      },
      {
        heading: "Spain",
        paragraphs: [
          "The local question is a barbacoa on a terrace or balcony. The statutes, article 7.2 of the Horizontal Property Act, and the municipal ordinance answer it. The ordinance is not the same in every city.",
        ],
      },
      {
        heading: "When the fire is allowed",
        paragraphs: [
          "Then courtesy matters: the hour, the wind, a clean filter, and capturing smoke at the grate. Lume is for that case, so the neighbour’s window can stay open. It is still a courtesy, not a permit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is barbecue on a balcony illegal in Argentina?",
        answer:
          "There is no national law that bans it in every building. Your consorcio rules may forbid it. Even when they do not, smoke must not exceed the normal tolerance in article 1973 of the Civil and Commercial Code.",
      },
      {
        question: "Can I keep a parrilla on the balcony?",
        answer:
          "Same question. The building rules come first, neighbour tolerance second. An extractor does not reverse that order.",
      },
      {
        question: "Can I barbecue on a terrace in Spain?",
        answer:
          "It depends on the statutes and the local ordinance. Article 7.2 of the Horizontal Property Act covers annoying activities and anything the statutes forbid. There is no national yes.",
      },
      {
        question: "Does an extractor give me permission?",
        answer:
          "No. Forbidden fire stays forbidden. Where fire is allowed, reducing the smoke that leaves is a courtesy, not an authorisation.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "vecinos-y-denuncias"],
    sources,
  },
  {
    slug: "ley-sobre-el-humo",
    metaTitle: "The law on smoke and balcony grills — Lume",
    metaDescription:
      "The law on grill smoke: Argentina, Civil Code art. 1973. Spain, Horizontal Property Act art. 7.2. It is not a permit to barbecue.",
    kicker: "The rule",
    h1: "The law on smoke and grills",
    summary:
      "There is no statute named “law of the grill”. Argentina uses Civil Code art. 1973. Spain uses Horizontal Property Act art. 7.2.",
    answer:
      "There is no statute called a ley sobre parrilla, a law of the grill. The ley sobre el humo — the law on smoke — in Argentina is article 1973 of the Civil and Commercial Code: smoke, heat, and odours between neighbours must not exceed normal tolerance, even with an administrative permit. In Spain, article 7.2 of the Horizontal Property Act stops what the statutes forbid and what counts as an annoying, unhealthy, noxious, dangerous, or illicit activity. Lume is not that law, and it does not amend it.",
    sections: [
      {
        heading: "Argentina: article 1973",
        paragraphs: [
          "Article 1973, headed Inmisiones, says: “Las molestias que ocasionan el humo, calor, olores, luminosidad, ruidos, vibraciones o inmisiones similares por el ejercicio de actividades en inmuebles vecinos, no deben exceder la normal tolerancia teniendo en cuenta las condiciones del lugar y aunque medie autorización administrativa para aquéllas.”",
          "In English: nuisances of smoke, heat, odours, light, noise, vibration, and similar immissions from activity in a neighbouring property must not exceed normal tolerance, given the conditions of the place, even if an administrative authorisation exists for those activities. A judge may order the cause removed or the nuisance stopped, and may award damages. To order it stopped, the judge weighs ordinary use of property, who was there first, the general interest, and the needs of production. Normal tolerance is not a published percentage.",
        ],
      },
      {
        heading: "The building rules are the other door",
        paragraphs: [
          "Horizontal property comes with a reglamento, the building’s own rules. They may forbid a grill, charcoal, or fire on balconies. That clause binds even if the smoke would have been tolerable. Two questions, kept apart: does the building allow the fire, and does the smoke that leaves stay inside tolerance?",
          "An administrative permit, if one existed, would still not excuse too much smoke. Article 1973 says tolerance is judged even when that permit is there.",
        ],
      },
      {
        heading: "Spain: article 7.2",
        paragraphs: [
          "Article 7.2 of Act 49/1960 says: “Al propietario y al ocupante del piso o local no les está permitido desarrollar en él o en el resto del inmueble actividades prohibidas en los estatutos, que resulten dañosas para la finca o que contravengan las disposiciones generales sobre actividades molestas, insalubres, nocivas, peligrosas o ilícitas.”",
          "The owner and the occupant may not carry out activities the statutes forbid, activities that damage the building, or activities that break the general rules on annoying, unhealthy, noxious, dangerous, or illicit uses. The president can require them to stop. If they continue, the owners’ meeting can authorise a court action to stop them. A city ordinance may add rules on terrace fires. It is not the same in every city.",
        ],
      },
      {
        heading: "What the law does not say",
        paragraphs: [
          "It does not say an extractor makes charcoal legal. It does not say balcony barbecue is always forbidden, or always allowed. It does not publish an acceptable smoke percentage. If you need an answer for your building, read your rules and, if there is already a dispute, ask a lawyer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there a law about balcony grills?",
        answer:
          "Not under that name. There is the rule on smoke between neighbours, and there are the rules of each building. In Argentina, article 1973 of the Civil and Commercial Code. In Spain, article 7.2 of the Horizontal Property Act and the statutes.",
      },
      {
        question: "What is normal tolerance?",
        answer:
          "It is the limit in article 1973: the nuisance is judged for that place. It is not a percentage. Hour, frequency, intensity, and whether smoke enters the next home all sit inside that judgment.",
      },
      {
        question: "Does silence from the city mean I may light the grill?",
        answer:
          "Not always. City silence does not repeal the building rules. And even an administrative permit would not let smoke exceed normal tolerance.",
      },
      {
        question: "Does Lume comply with the law for me?",
        answer:
          "No. It is a courtesy that reduces plume and odour when fire is allowed. Lighting the fire stays the cook’s responsibility.",
      },
    ],
    related: ["humo-en-el-consorcio", "asado-en-el-balcon", "vecinos-y-denuncias"],
    sources,
  },
  {
    slug: "humo-en-el-consorcio",
    metaTitle: "Smoke in an apartment building — Lume",
    metaDescription:
      "Smoke in a building: the rules may forbid the grill, and smoke must stay tolerable for neighbours. A courtesy is not a permit.",
    kicker: "The building",
    h1: "Smoke in the building",
    summary:
      "Humo en el consorcio is two rules: what the building forbids, and what neighbours must tolerate. An extractor repeals neither.",
    answer:
      "Humo en el consorcio — smoke in an Argentine building association — is judged on two rules. The building rules may forbid a grill or charcoal on balconies. Even when they do not, smoke, smell, and heat must not exceed normal tolerance between neighbours, which article 1973 of the Civil and Commercial Code sets in Argentina. In Spain the same question is smoke in the comunidad de propietarios, under the statutes and article 7.2. Lume reduces what leaves the balcony when fire is allowed. It does not replace the rules, and it does not win a vote.",
    sections: [
      {
        heading: "The two rules",
        paragraphs: [
          "The first belongs to the building. The rules can limit fire, the hour, or the kind of grill. They bind. A new appliance does not repeal them.",
          "The second belongs between neighbours. Even a permitted fire can send smoke past what the next home has to accept. Either rule can stop the afternoon. One prohibition is enough.",
        ],
      },
      {
        heading: "What the building can decide",
        paragraphs: [
          "In Argentina the administrador applies the reglamento and the asamblea decides within the law and those rules. In Spain the president, the administrator, and the junta do that work under the statutes. Many buildings have already written a charcoal ban. Others never wrote one and can still object to smoke that is not tolerable.",
          "The building chat is not the rules. A message there is a message. A written clause is something else.",
        ],
      },
      {
        heading: "What to hand the building",
        paragraphs: [
          "A short note is enough: what the extractor is, that there is no building work and no drilling, that it does not remove smoke completely, and that it does not allow a forbidden fire. Lume publishes that note to be forwarded. The chair does not have to decode a brochure.",
          "Courtesy still belongs with it: the hour, the wind, a clean filter. Smoke in the stair, a bedroom, or a neighbour’s laundry is not a small thing.",
        ],
      },
      {
        heading: "Two names, one care",
        paragraphs: [
          "Consorcio in Argentina, comunidad de propietarios in Spain. The note from Lume is in neutral Spanish so a chair in either country can forward it. The care is the same. The name of the building is not.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the building ban barbecue?",
        answer:
          "Yes, if its rules ban it. There does not need to be a national law titled “no balcony grills” for your building to forbid one.",
      },
      {
        question: "What does humo en el consorcio mean?",
        answer:
          "It is the Argentine way of asking about smoke in the building. The reglamento decides the fire. Article 1973 decides whether the smoke stays within normal tolerance.",
      },
      {
        question: "Will an extractor make the building agree?",
        answer:
          "No. It can help a permitted fire bother people less. It does not turn a no in the rules into a yes.",
      },
      {
        question: "What should I not tell the chair?",
        answer:
          "That there will be no smoke, that nobody will be able to complain, or that Lume is an authorisation. None of that is true.",
      },
    ],
    related: ["ley-sobre-el-humo", "vecinos-y-denuncias", "extractor-para-parrilla"],
    sources,
  },
  {
    slug: "vecinos-y-denuncias",
    metaTitle: "Neighbours and smoke complaints — Lume",
    metaDescription:
      "Neighbours and grill-smoke complaints: what can be raised, what the building rules decide, and what an extractor does not settle.",
    kicker: "Both balconies",
    h1: "Neighbours and smoke complaints",
    summary:
      "A neighbour can complain about smoke past ordinary tolerance, or about a fire the rules forbid. A complaint is not a fine, and an extractor does not stop it.",
    answer:
      "A neighbour can complain if grill smoke enters their home beyond ordinary tolerance, or if the building rules forbid that fire. Vecinos y denuncias — neighbours and complaints — are not the same thing as a fine. In Argentina the civil path usually runs through the consorcio and, if it continues, mediation and a judge, with article 1973 as the smoke rule. In Spain the president can require the nuisance to stop, and the owners’ meeting can authorise a court action under article 7.2. Lume does not stop a complaint, and it does not make one invalid.",
    sections: [
      {
        heading: "A message, a complaint, a fine",
        paragraphs: [
          "They are different. A note in the building chat is a message. A complaint may be a request to the building, a file with the city if an ordinance exists, or the start of a civil claim. A fine, when one exists, is imposed by whoever has that power. Often that is the city, not the neighbour.",
          "This site does not say what a fine would be in your city. Those figures change, and inventing them would be careless.",
        ],
      },
      {
        heading: "The path that usually exists",
        paragraphs: [
          "Talk. Then the administrator or the president. Then the meeting. If the smoke stays beyond tolerance, or someone lights a fire the rules forbid, the legal path opens.",
          "In many Argentine provinces there is mediation before a trial. It is not the same everywhere. In Spain, article 7.2 provides a formal request to stop and, if the conduct continues, authorisation from the owners’ meeting for a cessation action.",
        ],
      },
      {
        heading: "From both balconies",
        paragraphs: [
          "The cook owes care: the hour, the wind, the filter, and not using the appliance as an argument. The person who receives the smoke may ask that their window be allowed to stay open. They are not an enemy for asking.",
          "The fight gets worse when each side wants a sentence that declares them the winner. That sentence is not inside an extractor.",
        ],
      },
      {
        heading: "Claims that do not hold",
        paragraphs: [
          "That there is no law. That barbecue is a right on every balcony. That an extractor means nobody can complain. That any smoke is enough to win a claim. None of the four is true.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a neighbour report me for grill smoke?",
        answer:
          "They can complain if the smoke exceeds ordinary tolerance or if the fire is forbidden by the building rules. Whether the complaint succeeds depends on the case, the building, and the facts.",
      },
      {
        question: "Does a complaint mean I have already lost?",
        answer:
          "No. It means someone asked that it stop, or that the building, the city, or a judge step in. The rule applies to the facts: what the rules say, and how much smoke arrives.",
      },
      {
        question: "Does Lume prevent a neighbour’s complaint?",
        answer:
          "No. It can reduce plume and odour when fire is allowed. It is not a defence, and it is not a permit.",
      },
      {
        question: "What if the neighbour grills every day?",
        answer:
          "Start with the building, with facts: days, hours, and where the smoke enters. These pages explain the frame. They do not draft the complaint or say who wins.",
      },
    ],
    related: ["ley-sobre-el-humo", "humo-en-el-consorcio", "asado-en-el-balcon"],
    sources,
  },
];
