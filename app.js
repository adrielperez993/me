const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('#menu');
const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    openMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
});

const langBtn = document.querySelector('#langBtn');
const langSpan = document.querySelector('#langSpan');

langBtn.addEventListener('click', () => {
    langSpan.innerHTML = langSpan.innerHTML == '"ES"' ? '"EN"' : '"ES"';
    switchLang(langSpan.innerHTML);
});

const aboutLnk = document.querySelector('#aboutLnk');
const aboutTitle = document.querySelector('#aboutTitle');
const experienceLnk = document.querySelector('#experienceLnk');
const experienceTitle = document.querySelector('#experienceTitle');
const educationLnk = document.querySelector('#educationLnk');
const educationTitle = document.querySelector('#educationTitle');

const myResumeLnk = document.querySelector('#myResumeLnk');
const hiDiv = document.querySelector('#hiDiv');
const ingDiv = document.querySelector('#ingDiv');
const ingSpan = document.querySelector('#ingSpan');
const loveToDiv = document.querySelector('#loveToDiv');
const codeSpan = document.querySelector('#codeSpan');

const jobPosition2 = document.querySelector('#jobPosition2');
const jobLocation2 = document.querySelector('#jobLocation2');
const jobPeriod2 = document.querySelector('#jobPeriod2');
const job2Desc1 = document.querySelector('#job2Desc1');
const job2Desc2 = document.querySelector('#job2Desc2');

const jobPosition1 = document.querySelector('#jobPosition1');
const jobLocation1 = document.querySelector('#jobLocation1');
const jobPeriod1 = document.querySelector('#jobPeriod1');
const job1Desc1 = document.querySelector('#job1Desc1');
const job1Desc2 = document.querySelector('#job1Desc2');
const job1Desc3 = document.querySelector('#job1Desc3');

const stackDiv = document.querySelector('#stackDiv');

const educationTitle1 = document.querySelector('#educationTitle1');
const educationLocation1 = document.querySelector('#educationLocation1');
const educationPeriod1 = document.querySelector('#educationPeriod1');

const educationTitle2 = document.querySelector('#educationTitle2');
const educationLocation2 = document.querySelector('#educationLocation2');
const educationPeriod2 = document.querySelector('#educationPeriod2');

const contactDiv = document.querySelector('#contactDiv');
const developedByDiv = document.querySelector('#developedByDiv');

function switchLang(lang) {
    if (lang == '"ES"') {
        aboutLnk.innerHTML = 'SOBRE MÍ';
        aboutTitle.innerHTML = 'SOBRE MÍ';
        experienceLnk.innerHTML = 'EXPERIENCIA';
        experienceTitle.innerHTML = 'EXPERIENCIA';
        educationLnk.innerHTML = 'EDUCACIÓN';
        educationTitle.innerHTML = 'EDUCACIÓN';
        myResumeLnk.innerHTML = 'Descarga mi CV';
        myResumeLnk.setAttribute('href', './docs/Adriel Perez Alegre - CV.pdf');

        hiDiv.innerHTML = 'Hola! Soy <span class="bg-black rounded-lg py-2 px-8 text-white">Adriel<span class="cursor-animation text-indigo-500 text-6lg">_</span></span>';
        ingDiv.innerHTML = 'soy <span id="ingSpan" class="bg-black rounded-lg py-2 px-8 text-white">ingeniero en sistemas<span class="cursor-animation text-indigo-500 text-6lg">_</span></span>';
        loveToDiv.innerHTML = 'y me encanta <span id="codeSpan" class="bg-black rounded-lg py-2 px-8 text-white">codear<span class="text-indigo-500 text-6lg">;</span></span>';

        jobPosition2.innerHTML = 'Desarrollador .NET Full Stack';
        jobLocation2.innerHTML = 'Barcelona, España';
        jobPeriod2.innerHTML = 'Sep 2020 - presente';
        job2Desc1.innerHTML = 'Desarrollador Full stack .NET C# para muchos proyectos de Manpower, incluyendo aplicaciones web (portal cliente y apps internas) y REST APIs.';
        job2Desc2.innerHTML = 'Desarrollo y arquitectura de algunas API REST con conexión internacional (en .NET Core) que actualmente son consumidas por clientes fuera de España.';

        jobPosition1.innerHTML = 'Desarrollador .NET';
        jobLocation1.innerHTML = 'Córdoba, Argentina';
        jobPeriod1.innerHTML = 'May 2017 - Ene 2020';
        job1Desc1.innerHTML = 'Desarrollador Full stack .NET C# para el sistema de reservas online <a class="hover:underline" href="ebooking.com.ar" target="_blank">ebooking.com.ar</a>.';
        job1Desc2.innerHTML = 'Realicé integraciones exitosas entre APIs externas y el sistema de reservas, entre brókers de servicios hoteleros y de asistencias al viajero reconocidas mundialmente.';
        job1Desc3.innerHTML = 'Desarrollo tanto del backend (.NET) como del frontend (AngularJS) para las nuevas integraciones (servicio de asistencia al viajero), y mantenimiento de las ya existentes (servicio de hoteles y administrador de reservas sólo para usuarios de la empresa).';

        stackDiv.innerHTML = 'CONOCIMIENTOS';

        educationTitle1.innerHTML = 'Ingeniero en Sistemas de Información';
        educationLocation1.innerHTML = 'Universidad Tecnológica Nacional';
        educationPeriod1.innerHTML = '2017 - Córdoba, Argentina';

        educationTitle2.innerHTML = 'First Certificate in English';
        educationLocation2.innerHTML = 'Cambridge University';
        educationPeriod2.innerHTML = '2019 - Córdoba, Argentina';

        contactDiv.innerHTML = 'CONTÁCTAME';
        developedByDiv.innerHTML = 'Diseñado y desarrollado por Adriel Pérez';
    } else {
        aboutLnk.innerHTML = 'ABOUT';
        aboutTitle.innerHTML = 'ABOUT';
        experienceLnk.innerHTML = 'EXPERIENCE';
        experienceTitle.innerHTML = 'EXPERIENCE';
        educationLnk.innerHTML = 'EDUCATION';
        educationTitle.innerHTML = 'EDUCATION';
        myResumeLnk.innerHTML = 'Download my resume';
        myResumeLnk.setAttribute('href', './docs/Adriel Perez Alegre - Resume.pdf');

        hiDiv.innerHTML = 'Hi there! I am <span class="bg-black rounded-lg py-2 px-8 text-white">Adriel<span class="cursor-animation text-indigo-500 text-6lg">_</span></span>';
        ingDiv.innerHTML = 'I\'m a <span id="ingSpan" class="bg-black rounded-lg py-2 px-8 text-white">software engineer<span class="cursor-animation text-indigo-500 text-6lg">_</span></span>';
        loveToDiv.innerHTML = 'and I love <span id="codeSpan" class="bg-black rounded-lg py-2 px-8 text-white">to code<span class="text-indigo-500 text-6lg">;</span></span>';

        jobPosition2.innerHTML = '.NET Full Stack Developer';
        jobLocation2.innerHTML = 'Barcelona, Spain';
        jobPeriod2.innerHTML = 'Sep 2020 - present';
        job2Desc1.innerHTML = 'Full stack .NET C# developer for many Manpower projects, including web applications (a client portal and internal apps) and REST APIs.';
        job2Desc2.innerHTML = 'Development and architecture of some international REST APIs (in .NET Core) that are currently consumed by clients outside Spain.';

        jobPosition1.innerHTML = '.NET Developer';
        jobLocation1.innerHTML = 'Córdoba, Argentina';
        jobPeriod1.innerHTML = 'May 2017 - Jan 2020';
        job1Desc1.innerHTML = 'Full stack .NET C# developer for the online reservation system <a class="hover:underline" href="ebooking.com.ar" target="_blank">ebooking.com.ar</a>.';
        job1Desc2.innerHTML = 'Developed successful integrations between external APIs and the reservation system. APIs provided by world-renowned hotel service brokers and travel assistance companies.';
        job1Desc3.innerHTML = 'Development of both the backend (.NET) and the frontend (AngularJS) for new integrations (traveler assistance service), and maintenance of existing ones (hotel service and booking manager for company users only).';

        stackDiv.innerHTML = 'STACK';

        educationTitle1.innerHTML = 'Information Systems Engineer';
        educationLocation1.innerHTML = 'National Technological University';
        educationPeriod1.innerHTML = '2017 - Córdoba, Argentina';

        educationTitle2.innerHTML = 'First Certificate in English';
        educationLocation2.innerHTML = 'Cambridge University';
        educationPeriod2.innerHTML = '2019 - Córdoba, Argentina';

        contactDiv.innerHTML = 'CONTACT ME';
        developedByDiv.innerHTML = 'Designed and developed by Adriel Pérez';
    }
}
