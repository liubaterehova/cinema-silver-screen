export const MODAL_WINDOW = {
  CLOSE_ALL_MODALS: 'closeAllModals',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
};

export const films = [
  {
    id: 1,
    src: '/assets/public/png/forrest-gamp.png',
    name: 'Форест Гамп',
    type: 'Драма',
    description: `От лица главного героя Форреста Гампа, слабоумного безобидного человека с благородным и открытым сердцем,
    рассказывается история его необыкновенной жизни.
    Фантастическим образом превращается он в известного футболиста, героя войны,
    преуспевающего бизнесмена. Он становится миллиардером, но остается таким же бесхитростным,
    глупым и добрым. Форреста ждет постоянный успех во всем, а он любит девочку, с которой дружил
    в детстве, но взаимность приходит слишком поздно.`,
    cinemaId: 1,
    time: '14:00',
  },
  {
    id: 2,
    src: '/assets/public/png/harly-queen.png',
    name: 'Харли Квинн',
    type: 'Комедия',
    description: `Харли Квинн — персонаж, суперзлодейка,
    позже антигерой вселенной DC Comics, первоначально появившаяся в мультсериале «Бэтмен» 1992 года,
    позже была перенесена в комиксы. Она является главной сподвижницей Джокера, по этой же причине ненавидит
    Бэтмена и его помощников`,
    cinemaId: 2,
    time: '12:00',

  },
  {
    id: 3,
    src: '/assets/public/png/spion.jpg',
    name: 'Офицер и шпион',
    type: 'Драма',
    description: `Сотрудник французской спецслужбы капитан Дрейфус объявлен особо опасным преступником.
    Официальное обвинение — государственная измена и шпионаж в пользу Германии. Бывший наставник Дрейфуса
    Жорж Пикар ведет собственное расследование:
    ему необходимо найти таинственную «секретную папку», чтобы доказать невиновность своего подзащитного.
    Но охотится за ней не только он.`,
    cinemaId: 1,
    time: '15:00',

  },
  {
    id: 4,
    src: '/assets/public/png/parasites.png',
    name: 'Паразиты',
    type: 'Драма',
    description: `Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале,
    воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на
    стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак.
    Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома
    хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.`,
    cinemaId: 2,
    time: '15:00',
  },
];

export const filters = [
  {
    id: 1,
    filter: 'Город',
  },
  {
    id: 2,
    filter: 'Все кинотеатры',
  },
  {
    id: 3,
    filter: 'Сегодня',
  },
  {
    id: 4,
    filter: 'Все сеансы',
  },
  {
    id: 5,
    filter: 'Свободные места',
  },
];

export const cinemas = {
  1: {
    id: 1,
    cinemaName: 'Silver Screen cinemas в ТРЦ "Galileo',
    address: 'г.Минск, ул. Бобруйская, 6',
  },
  2: {
    id: 2,
    cinemaName: 'VOKA CINEMA by SilverScreen в ТРЦ Dana Mall',
    address: 'г.Минск, ул. Петра Мстиславца, 11',
  },
};

