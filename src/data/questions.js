const questionsBiology = [
  {
    title: 'Хранителем наследственной информации являются:',
    type: "TEXT",
    answers: [{ title: 'хромосомы', isTrue: true, point: 1 }],
  },

  {
    title: 'Защиту внутреннего содержимого клетки обеспечивает:',
    type: "SELECT",
    answers: [
              { title: 'рибосома', isTrue: false, point: 0 },
              { title: 'мембрана', isTrue: true, point: 1 },
              { title: 'митохондрия', isTrue: false, point: 0 },
              { title: 'пластида', isTrue: false, point: 0 }
    ],
  },

  {
    title: 'В делении клеток принимают участие:',
    type: "CHECK",
    answers: [{ title: ' клеточный центр ', isTrue: true, point: 1 },
              { title: 'рибосома', isTrue: true, point: 1 },
              { title: 'хлоропласт', isTrue: false, point: 0 },
              { title: 'вакуоли', isTrue: false, point: 0 }
    ],
  },

  {
    title: 'Самые маленькие косточки тела человека располагаются в:',
    type: "SELECT",
    answers: [{ title: 'наружном ухе', isTrue: false, point: 0 },
              { title: 'внутреннем ухе ', isTrue: true, point: 1 },
              { title: 'среднем ухе', isTrue: false, point: 0 },
              { title: 'малом ухе', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'Гипофиз выделяет:',
    type: "RADIO",
    answers: [{ title: 'адреналин', isTrue: false, point: 0 },
              { title: 'тироксин', isTrue: false, point: 0 },
              { title: 'гормон роста', isTrue: true, point: 1 },
              { title: 'инсулин', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'В каком отделе пищеварительного тракта имеются ворсинки?',
    type: "RADIO",
    answers: [{ title: 'в пищеводе', isTrue: false, point: 0 },
              { title: 'в толстой кишке', isTrue: false, point: 0 },
              { title: 'в тонкой кишке', isTrue: true, point: 1 },
              { title: 'в желудке', isTrue: false, point: 0 },
    ],
  },

  {
    title: 'Что происходит под действием ферментов?',
    type: "CHECK",
    answers: [{ title: 'разрушение клеток', isTrue: true, point: 1 },
              { title: 'синтез и распад веществ в клетке', isTrue: true, point: 1 },
              { title: 'деление клеток', isTrue: false, point: 0 },
              { title: 'сокращение клеток', isTrue: false, point: 0 }
    ],
  },
];



const questionsGeography =[
  {
    title: 'Столица Украины',
    type: 'TEXT',
    answers: [{
      title: 'Киев',
      isTrue: true,
      point: 1,
    }]
  },
  {
    title: 'Столица Германии',
    type: 'RADIO',
    answers: [{
      title: 'Берлин',
      isTrue: true,
      point: 1,
    },
    {
      title: 'Мэн',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Барселона',
      isTrue: false,
      point: 0,
    },
    {
      title: 'Харьков',
      isTrue: false,
      point: 0,
    }]
  },
  {
    title: 'Моря Атлантического океана, омывающие Россию:',
    type: 'CHECK',
    answers: [{
      title: 'Балтийское море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Чёрное море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Азовское море',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'Мертвое море',
      isTrue: false,
      point: -0.5,
    },
    {
      title: 'Красное море',
      isTrue: false,
      point: -0.5,
    },
    {
      title: 'Адриатическое море',
      isTrue: false,
      point: -0.5,
    },
  ]
  },
  {
    title: 'Вода на планете Земля образует',
    type: 'SELECT',
    answers: [{
      title: 'гидросферу',
      isTrue: true,
      point: 1,
    },
    {
      title: 'стратосферу',
      isTrue: false,
      point: 0,
    },
    {
      title: 'сферу',
      isTrue: false,
      point: 0,
    },
  ]
  },
  {
    title: `Континент, находящийся только в южном полушарии это`,
    type: 'SELECT',
    answers: [
      {
        title: 'Евразия',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Африка',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Австралия',
        isTrue: true,
        point: 1,
      },
      {
        title: 'Антарктида',
        isTrue: false,
        point: 0,
      },
    ]
  },
  {
    title: `Солнце – это `,
    type: 'RADIO',
    answers: [
      {
        title: 'звезда',
        isTrue: false,
        point: 0,
      },
      {
        title: 'спутник',
        isTrue: false,
        point: 0,
      },
      {
        title: 'комета',
        isTrue: false,
        point: 0,
      },
      {
        title: 'планета',
        isTrue: true,
        point: 1,
      },

    ]
  },
  {
    title: 'Изображение какого животного можно увидеть на гербе Австралии',
    type: 'CHECK',
    answers: [
    {
        title: 'панда',
        isTrue: false,
        point: 0,
    },
    {
      title: 'кенгуру',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'орел',
      isTrue: false,
      point: 0,
    },
    {
      title: 'эму',
      isTrue: true,
      point: 0.5,
    },
    {
      title: 'коала',
      isTrue: false,
      point: 0,
    },
  ]
  },
  {
    title: 'Какая часть света омывается всеми четырьмя океанами',
    type: 'TEXT',
    answers: [{
      title: 'Азия',
      isTrue: true,
      point: 1,
    }]
  },
  {
    title: 'Определи страну по её характеристике: «Это карликовое государство с населением около 1 тыс. человек имеет свое правительство, свой банк, гвардию, законы, валюту и монарха. Сфера деятельности этого государства – весь мир».',
    type: 'RADIO',
    answers: [
      {
        title: 'Андорра',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Ватикан',
        isTrue: true,
        point: 1,
      },
      {
        title: 'Люксембург',
        isTrue: false,
        point: 0,
      },
      {
        title: 'Лихтенштейн',
        isTrue: false,
        point: 0,
      },
    ]
  },
]

export { questionsBiology, questionsGeography };