export const companyInfo = {
  name: 'Тим Промет-ЕМ',
  address: 'Ленинова 89, Струмица',
  phone: '+389 75 253 261',
  email: 'info@timpromet-em.mk',
  workingHours: {
    weekdays: '08:00–19:00',
    saturday: '08:00–16:00',
    sunday: 'Затворено',
  },
  social: {
    facebook: '#',
    instagram: '#',
  },
};

export const navigation = [
  { name: 'Почетна', href: '/' },
  { name: 'За нас', href: '/about' },
  { name: 'Производи', href: '/products' },
  { name: 'Услуги', href: '/services' },
  { name: 'Галерија', href: '/gallery' },
  { name: 'Новости', href: '/news' },
  { name: 'Контакт', href: '/contact' },
];

export const productCategories = [
  {
    id: 'svezo-ovosje-zelencuk',
    name: 'Свежо овошје и зеленчук',
    description: 'Најквалитетно свежо овошје и зеленчук директно од македонските полиња.',
    image: 'https://picsum.photos/seed/vegetables/800/600',
  },
  {
    id: 'brasno',
    name: 'Брашно',
    description: 'Висококвалитетно брашно за сите намени.',
    image: 'https://picsum.photos/seed/flour/800/600',
  },
  {
    id: 'stocna-hrana',
    name: 'Сточна храна',
    description: 'Балансирана сточна храна за здравје и продуктивност на вашиот добиток.',
    image: 'https://picsum.photos/seed/animalfeed/800/600',
  },
  {
    id: 'koncentrati',
    name: 'Концентрати',
    description: 'Додатоци и концентрати за оптимална исхрана.',
    image: 'https://picsum.photos/seed/concentrates/800/600',
  },
  {
    id: 'hrana-milenici',
    name: 'Храна за миленици',
    description: 'Вкусна и хранлива храна за вашите домашни миленици.',
    image: 'https://picsum.photos/seed/petfood/800/600',
  },
  {
    id: 'ambalaza',
    name: 'Амбалажа',
    description: 'Различни видови на амбалажа за безбедно пакување и транспорт.',
    image: 'https://picsum.photos/seed/packaging/800/600',
  },
  {
    id: 'zemjodelski-proizvodi',
    name: 'Земјоделски производи',
    description: 'Широк спектар на земјоделски производи и репроматеријали.',
    image: 'https://picsum.photos/seed/agriculture/800/600',
  },
];

export const services = [
  {
    id: 'distribucija',
    title: 'Дистрибуција',
    description: 'Брза и сигурна дистрибуција на нашите производи до вашата локација.',
    icon: 'Truck',
  },
  {
    id: 'sovetuvanje',
    title: 'Стручно советување',
    description: 'Нашиот тим нуди стручни совети за избор на најсоодветни производи за вашите потреби.',
    icon: 'MessageSquareText',
  },
  {
    id: 'sorabotka',
    title: 'Откуп и соработка',
    description: 'Отворени сме за соработка со локални земјоделци и производители.',
    icon: 'Handshake',
  },
];

export const news = [
  {
    id: 'nova-sezona-ovosje',
    title: 'Почеток на новата сезона за свежо овошје',
    date: '2026-03-15',
    summary: 'Со задоволство ве известуваме дека започна откупот и продажбата на првото сезонско овошје.',
    image: 'https://picsum.photos/seed/news1/800/600',
  },
  {
    id: 'novi-proizvodi-milenici',
    title: 'Нова линија на храна за миленици',
    date: '2026-02-28',
    summary: 'Воведовме нови премиум брендови на храна за кучиња и мачки во нашиот асортиман.',
    image: 'https://picsum.photos/seed/news2/800/600',
  },
  {
    id: 'uspesna-godina',
    title: 'Успешна година зад нас',
    date: '2025-12-30',
    summary: 'Тим Промет-ЕМ бележи уште една успешна година на македонскиот пазар.',
    image: 'https://picsum.photos/seed/news3/800/600',
  },
];

export const galleryImages = [
  { url: 'https://picsum.photos/seed/gal1/800/1000', title: 'Свеж зеленчук', category: 'Производи' },
  { url: 'https://picsum.photos/seed/gal2/1000/800', title: 'Нашиот магацин', category: 'Логистика' },
  { url: 'https://picsum.photos/seed/gal3/800/800', title: 'Дистрибуција', category: 'Услуги' },
  { url: 'https://picsum.photos/seed/gal4/1000/1000', title: 'Квалитетно брашно', category: 'Производи' },
  { url: 'https://picsum.photos/seed/gal5/800/1200', title: 'Сточна храна', category: 'Земјоделство' },
  { url: 'https://picsum.photos/seed/gal6/1200/800', title: 'Тимска работа', category: 'Компанија' },
  { url: 'https://picsum.photos/seed/gal7/800/800', title: 'Локални полиња', category: 'Потекло' },
  { url: 'https://picsum.photos/seed/gal8/1000/800', title: 'Пакување', category: 'Квалитет' },
];
