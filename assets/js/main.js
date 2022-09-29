const closeBtnHTML = document.querySelector('.close');
const openBtnHTML = document.querySelector('.open');

openBtnHTML.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('isOpen');
});

// career steps carousel

let activeStep = 0;

const yearHtml = document.querySelector('.career-step__year');
const stepHtml = document.querySelector('.career-step__text');

const years = ['2012', '2014', '2016', '2018', '2019', '2019', '2021'];
const steps = [
    'My career started as a creative retoucher. Photoshop was the coolest thing in the world!',
    `Soon I discovered the magic of the web, and particularly I started learning about -web design.`,
    'Moved to Poland, starting collaboration with Polish firms as a graphic & web designer.',
    'Joined Rebel Artistry design team, as an user interface designer. Learnt a lot about team work and design stuff.',
    'At TREC Nutrition I was very productive, contributing to packaging, catalog, print design, key visuals, user interface design, social media, and more.',
    'The experience as a designer formed my aesthetic sense, improved my technical skills.',
    'Having been on both sides of the web development process, I found front-end development is my way to be creative. In 2021 I joined iGaming Nuts as a junior front-end developer.'
];

function nextCareerStep() {
    
    activeStep++;
    
    if (activeStep == steps.length) {
        activeStep = 0;
    }

    yearHtml.textContent = years[activeStep];
    stepHtml.textContent = steps[activeStep];
}


// reviews carousel

let activeElement = 0;
const customizeTime = 15000;

const avatarHtml = document.querySelector('.reviews-slider__avatar');
const authorHtml = document.querySelector('.reviews-slider__name');
const titleHtml = document.querySelector('.reviews-slider__title');
const quoteHtml = document.querySelector('.reviews-slider__review');

const avatars = ['assets/img/logo-niimbot.jpeg', 'assets/img/logo-daddys.png', 'assets/img/logo-maluszka.png', 'assets/img/mb.jfif', 'assets/img/logo_dajak.png', 'assets/img/ms.jfif', 'assets/img/sb.jfif', 'assets/img/rj.jfif', 'assets/img/ml.jfif', 'assets/img/fortis.jpg', 'assets/img/lg.jpg', 'assets/img/ssp.png', 'assets/img/sauber-logo.png', 'assets/img/rs.jfif'];

const authors = ['Daniel B', 'Michał D', 'Wiesław M', 'Maciej Brzezicki', 'Dominika Paneczko', 'Marcin Skoniecki', 'Sebastian Bagiński', 'Rebecca Jimenez', 'Michał Łuński', 'Pani Kasia', 'Łukasz Grucza', 'Pani Marta', 'Mateusz Deja', 'Radosław Święcki'];

const titles = ['Specjalista ds. Marketingu', 'Właściciel firmy Daddy\'s DSGN', 'Właściciel firmy Dla Maluszka', 'Chief Operating Officer', 'Właścicielka Dajaku', 'Graphic Designer w Trec Nutrition', 'Hull & Structure Engineer', 'SEO Content Coordinator at Catena Media', 'Export Manager - Trec Nutrition', 'Właścicielka szkoły Fortissimus', 'Księgowy', 'Właścicielka Sexy Shop Pleasure', 'Właściciel Sauber Serwis', 'Graphic Design Specialist'];

const recommendations = [
    'Polecam, szybka sprawna realizacja, zlecenie wykonane bez problemów!',

    'Bardzo sypmtaczna osoba, kontakt wzorcowy, wszystko zrealizowane zgodnie z potrzebami! POLECAM -www.daddys.pl',

    'Bardzo dobry kontakt, szybko skutecznie i profesjonalnie. Atrakcyjna cena, super doradztwo, polecam współpracę z Inside. W razie problemów ze stroną na pewno wrócę do Inside.',

    'I have had the pleasure of working with Francky on many important projects. Francky is very creative and has shown the important ability to use his skills to help develop Trec Nutrition products and make them attractive. He is very focused, conscientious, understands the importance of deadlines and is willing to work. I rate him as a high-class specialist and recommend him to work in the best teams.',

    'Pan Francky jest świetnym profesjonalistą! Współpracujemy już od pewnego czasu i jestem bardzo zadowolona z jego usług. Każde zadanie wykonuje bardzo rzetelnie oraz ceny są bardzo konkurencyjne! Serdecznie polecam!',

    'I worked with Francky during last two years at Trec Nutrition. Above all, I can confirm Francky is a very skilled Specialist, with many year\' experience, and his work manifests pure passion. What was a privilege for me, he\'s always ready to share his knowledge, his know-how with me. This enriched my experience a lot, and my skills repertoire. Thank you Francky!',

    'The cooperation with Francky Iside is always of the highest standard.He is very good at his job. He performs his duties very well, the scope of work we agreed in advance. I come back to him every time I have an issue to do.I come back to him every time I have an order to do. He never let me down. Best Regards!!!',

    'Franky is one of the best colleagues I have been working with. For his work at the company I can tell he was delivering great quality and working very fast. He is very passionate on what he is doing and a great team player. Any person will be lucky to have him, I super recommend him!',

    'A great person and qualified specialist. Thank you Francky for working together.',

    'Profesjonalna obsługa, szybka reakcja na każdą sugestię klienta. Zarówno cała strona internetowa, jak i wszelkie prace graficzne zrobione zgodnie z moimi oczekiwaniami. Serdecznie polecam każdemu, kto ceni sobie czas i profesjonalnie wykonane usługi zgodne z zaleceniami i oczekiwaniami.',

    'Polecam współpracę z Arte Web wszystkim, którzy potrzebują usług grafiki komputerowej. Godni zaufania, profesjonalni, pomocni zarówno podczas realizacji jak i już po zakończonych projektach, szybki kontakt, konkretni, solidni, rzetelni i terminowi.',

    'Bardzo polecam, profesjonaliści!',

    'Polecam współpracę z Franckym, profesjonalne podejscie oraz cierpliwość w spełnianiu życzeń klienta. Strona zrobiona, teraz zaczynamy współpracę przy pozycjonowaniu.',

    'I\'ve been working with Francky for a year and it was very fruitful and smooth cooperation. Francky is a fast, hard-working employee, always prompt to tackle a task, fully engaged in a project and passionate about his work. He easily finds his place in multi-cultural environment, is a kind-hearthed person and maintains great relations with other team members.'
];

function changeContent() {
    
    activeElement++;

    if (activeElement == authors.length) {
        activeElement = 0;
    }

    avatarHtml.src = avatars[activeElement];
    authorHtml.textContent = authors[activeElement];
    titleHtml.textContent = titles[activeElement];
    quoteHtml.textContent = recommendations[activeElement];

}

setInterval(changeContent, customizeTime);