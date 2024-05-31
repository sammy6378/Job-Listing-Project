const jobDiv = document.querySelector('.container');
const lang = document.querySelector('.langs');
const clear = document.querySelector('.clear');
function fetchJob(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            createJob(element);
        });
    })
    .catch(error => console.log(error));
}

function createJob(element) {
    const box = document.createElement('div');
    box.classList.add('job-content');

    const about = document.createElement('div');
    about.classList.add('about');

    const aboutDetails = document.createElement('div');
    aboutDetails.classList.add('about-details');

    const languages = document.createElement('div');
    languages.classList.add('languages');

    const img = document.createElement('div');
    img.classList.add('img');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const time = document.createElement('div');
    time.classList.add('time');

    const h3 = document.createElement('h3');
    h3.classList.add('job-title');

    img.innerHTML = `<img src="${element.logo}" alt="illustration-jobs">`;

    hero.innerHTML = `
        <h2 class="type">${element.company}</h2>
        ${element.new ?'<button class="new">NEW!</button>' : ''}
        ${element.featured ? '<button class="featured">FEATURED</button>' : ''}
    `;
    time.innerHTML = `
        <span class="time-post">${element.postedAt}</span>
        <li class="status">${element.contract}</li>
        <li class="area">${element.location}</li>
    `;

    element.languages.forEach(language => {
        const languageItem = document.createElement('li');
        languageItem.classList.add('language');
        languageItem.textContent = language;
        languages.appendChild(languageItem);

        languageItem.addEventListener('click', () =>{
            const languageLi = document.createElement('li');
            languageLi.classList.add('lang');
            languageLi.textContent = language;
            lang.appendChild(languageLi);
            clear.addEventListener('click', () =>{
                lang.removeChild(languageLi);
            })
        });
        
        
    });

    h3.textContent = `${element.position}`;

    about.append(img);
    aboutDetails.append(hero);
    aboutDetails.append(h3);
    aboutDetails.append(time);

    about.appendChild(aboutDetails);

    box.appendChild(about);
    box.appendChild(languages);
   
    jobDiv.appendChild(box);
}

fetchJob();
