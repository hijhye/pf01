gsap.registerPlugin(ScrollTrigger);
gsap.to('.scroll div', {
    height: '100%',
    trigger: 'body',
    scrollTrigger: {
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: false,
    },
});
let ofsT1 = 0;
let ofsT2;
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    ofsT2 = window.scrollY;
    console.log(ofsT1);
    if (ofsT1 >= ofsT2) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    ofsT1 = ofsT2;
});

//인트로
let introSubTitle = document.querySelector('#introSubTitle');
let introTextBoard = document.querySelector('#introTextBoard');

let introList = [
    {
        keyWord: '시각화',
        title: '흐름을 읽는 연출력',
        text: "영상/방송을 전공하며 익힌 시각적 스토리텔링 능력을 웹 개발에 접목했습니다. GSAP과 같은 라이브러리를 활용해 정적인 화면에 생동감을 불어넣고, 단순히 기능하는 웹을 넘어 사용자가 '경험'하는 웹을 구현하는 데 강점이 있습니다.",
    },
    {
        keyWord: '성장 가능성',
        title: '이론을 실무로 바꾸는 실행력',
        text: '새로운 기술을 두려움 없이 받아들이고, 즉시 프로젝트에 적용합니다.문제 발생 시 끈기 있게 디버깅하여 해결책을 찾아내며, 어제 배운 지식을 오늘의 결과물로 만들어내는 집요함이 있습니다.',
    },
    {
        keyWord: '소통과 협업',
        title: '기획과 개발을 잇는 소통',
        text: "다양한 돌발 상황이 발생하는 행사/방송 현장 경험을 통해, 팀원들과 유연하게 소통하는 법을 체득했습니다. 기획자의 의도를 정확히 파악하여 코드로 구현하고, 디자이너와 원활하게 조율합니다. '왜(Why)' 만들어야 하는지를 이해하고, 팀 전체의 시너지를 높이는 든든한 동료가 되겠습니다.",
    },
];
let introCard = '';
introList.forEach((item) => {
    introCard += `<li>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
              </li>
  `;
});
introTextBoard.innerHTML = introCard;

let introListCardAll = document.querySelectorAll('#introTextBoard li');
let introText = document.querySelectorAll('#introTextBoard p');
introListCardAll.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        introSubTitle.textContent = introList[index].keyWord;
        card.style.height = '300px';
        introText[index].classList.add('on');
    });
    card.addEventListener('mouseleave', () => {
        introSubTitle.textContent = '아래의';
        card.style.height = '100px';
        introText.forEach((text) => {
            text.classList.remove('on');
        });
    });
});

//스킬

let skillGroup = document.querySelector('.skillGroup');
let skillImgBoard = document.querySelector('.imgBoard');
let skillTitle = document.querySelector('.skill .subTitle');
skillReset();

function skillReset() {
    skillImgBoard.innerHTML = ` <img src="https://skillicons.dev/icons?i=html"></img>
        <img src="https://skillicons.dev/icons?i=css"></img>
        <img src="https://skillicons.dev/icons?i=js"></img>
        <img src="https://skillicons.dev/icons?i=react"></img>
        <img src="https://skillicons.dev/icons?i=jquery"></img>
        <img src="https://skillicons.dev/icons?i=firebase"></img>
        <img src="https://skillicons.dev/icons?i=vscode"></img>
        <img src="https://skillicons.dev/icons?i=git"></img>
        <img src="https://skillicons.dev/icons?i=github"></img>
        <img src="https://skillicons.dev/icons?i=figma"></img>
        <img src="https://skillicons.dev/icons?i=ai"></img>
        <img src="https://skillicons.dev/icons?i=ps"></img>
        <img src="https://skillicons.dev/icons?i=pr"></img>`;

    gsap.fromTo(
        '.imgBoard img',
        { y: '-100', opacity: 0 },
        {
            y: '50',
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.imgBoard',
                start: 'top 60%',
                end: 'top 50%',
                markers: false,
            },
        }
    );
}

let skillGroups = [
    { ko: '기술', en: 'skill' },
    { ko: '도구', en: 'tool' },
    { ko: '디자인', en: 'design' },
];

let skillDataAll = [
    { group: 'skill', text: 'html' },
    { group: 'skill', text: 'css' },
    { group: 'skill', text: 'js' },
    { group: 'skill', text: 'react' },
    { group: 'skill', text: 'jquery' },
    { group: 'skill', text: 'firebase' },
    { group: 'tool', text: 'vscode' },
    { group: 'tool', text: 'git' },
    { group: 'tool', text: 'github' },
    { group: 'design', text: 'figma' },
    { group: 'design', text: 'ai' },
    { group: 'design', text: 'ps' },
    { group: 'design', text: 'pr' },
];

skillGroups.forEach((group) => {
    skillGroup.innerHTML += `<li data-type="${group.en}">${group.ko}</li>`;
});

let skillGroupEl = document.querySelectorAll('.skillGroup li');

skillGroupEl.forEach((list) => {
    list.addEventListener('click', (e) => {
        skillGroupEl.forEach((list) => {
            list.classList.remove('on');
        });
        list.classList.add('on');

        skillGroupEl.forEach((list) => {
            list.classList.remove('on');
        });

        list.classList.add('on');
        const type = e.target.dataset.type;
        console.log(type);

        let skillFilter = skillDataAll.filter((skillData) => {
            return skillData.group == type;
        });

        let skillImgAll = '';
        let skillImg;

        skillFilter.forEach((skill) => {
            skillImg = `<img src="https://skillicons.dev/icons?i=${skill.text}"></img>`;
            skillImgAll += skillImg;
        });
        skillImgBoard.innerHTML = skillImgAll;

        gsap.fromTo(
            '.imgBoard img',
            { y: '-100', opacity: 0 },
            {
                y: '50',
                opacity: 1,
                stagger: 0.1,
            }
        );
    });
});
skillTitle.addEventListener('click', () => {
    skillReset();
    skillGroupEl.forEach((list) => {
        list.classList.remove('on');
    });
});

let proj1Pre = document.querySelector('#proj1Pre');
let proj1Next = document.querySelector('#proj1Next');
let proj1SubT = document.querySelector('#proj1SubT');
let proj1Text = document.querySelector('#proj1Text');
let proj1Img = document.querySelector('#proj1Img');
let proj1siteLink = document.querySelector('#proj1siteLink');
let proj1liAll = document.querySelectorAll('.proj1 li');

let proj1List = [
    {
        subTitle: 'EV GAME',
        text: '자바스크립트를 활용하여 숫자맞추기 게임을 만들었습니다.',
        imgsrc: 'img/js01.png',
        src: 'https://hijhye.github.io/EVgame/',
    },
    {
        subTitle: 'TODOO',
        text: '자바스크립트를 활용하여 투두 리스트를 만들었습니다.',
        imgsrc: 'img/js02.png',
        src: 'https://hijhye.github.io/TODOO/',
    },
    {
        subTitle: 'WEATHER MOOD',
        text: '자바스크립트와 open weather api를 활용하여 날씨 정보 사이트를 구현했습니다.',
        imgsrc: 'img/js03.png',
        src: 'https://hijhye.github.io/weatherMood/',
    },
    {
        subTitle: "LET'S MOVIE",
        text: '자바스크립트와 TMDB api를 활용하여 카테고리별 영화목록, 영화별 상세 설명, 검색 기능을 구현했습니다.',
        imgsrc: 'img/js04.png',
        src: 'https://hijhye.github.io/movie/',
    },
];

let i = 0;
Pro1render();
proj1Next.addEventListener('click', function () {
    if (i < proj1List.length - 1) {
        i++;
    } else if (i == proj1List.length - 1) {
        i = 0;
    }
    Pro1render();
});

proj1Pre.addEventListener('click', function () {
    if (i > 0) {
        i--;
    } else if (i == 0) {
        i = proj1List.length - 1;
    }
    Pro1render();
});

setInterval(function () {
    if (i < proj1List.length - 1) {
        i++;
    } else if (i == proj1List.length - 1) {
        i = 0;
    }
    Pro1render();
}, 4000);

proj1liAll.forEach((proj1li, index) => {
    proj1li.addEventListener('click', function () {
        i = index;
        proj1liAll.forEach((proj1li) => {
            proj1li.classList.remove('on');
        });
        proj1li.classList.add('on');
        Pro1render();
    });
});

function Pro1render() {
    proj1liAll.forEach((proj1li) => {
        proj1li.classList.remove('on');
    });
    proj1liAll[i].classList.add('on');
    proj1SubT.textContent = `${proj1List[i].subTitle}`;
    proj1Img.src = `${proj1List[i].imgsrc}`;
    proj1Text.textContent = `${proj1List[i].text}`;
    proj1siteLink.href = `${proj1List[i].src}`;
}

let proj2li = document.querySelectorAll('.proj2 li');
let proj2TextwrapAll = document.querySelectorAll('.proj2 .textWrap');
// console.log(proj2TextwrapAll);
console.log(proj2li.length - 1);
let j = 0;
let stop = setInterval(proj2Set, 3000);
function proj2Set() {
    if (j < proj2li.length - 1) {
        j++;
        console.log(j);
    } else if (j == proj2li.length - 1) {
        j = 0;
        console.log(j);
    }
    proj2li.forEach((item) => {
        item.style.width = '20%';
    });
    proj2li[j].style.width = '60%';
}
proj2li.forEach((item, index) => {
    item.addEventListener('mouseenter', function () {
        clearInterval(stop);
        proj2li.forEach((item) => {
            item.style.width = '20%';
        });
        item.style.width = '60%';
        proj2TextwrapAll.forEach((proj2Textwrap) => {
            proj2Textwrap.style.display = 'none';
        });
        proj2TextwrapAll[index].style.display = 'flex';
    });
});
proj2li.forEach((item) => {
    item.addEventListener('mouseleave', function () {
        stop = setInterval(proj2Set, 3000);

        proj2li.forEach((item) => {
            item.style.width = 'calc(100% / 3)';
        });
        proj2TextwrapAll.forEach((proj2Textwrap) => {
            proj2Textwrap.style.display = 'none';
        });
    });
});

let proj3Imgs = document.querySelectorAll('.proj3 .imgBox img');
let proj3Li = document.querySelectorAll('.proj3 .textBox li');

proj3Li.forEach((item, index) => {
    item.addEventListener('mouseenter', function () {
        proj3Imgs.forEach((img) => {
            img.style.opacity = '0';
        });
        proj3Imgs[index].style.opacity = '1';
    });
});

let proj4SubT = document.querySelector('#proj4SubT');
let proj4ListBoard = document.querySelector('#proj4ListBoard');

let proj4Text = document.querySelector('#proj4Text');
let proj4List = [
    {
        category: '디자인',
        subTitle: '생일축하해 포스터',
        text: '일러스트 포스터를 디자인해 제작했습니다.',
        imgsrc: 'img/poster01.png',
    },
    {
        category: '영상',
        subTitle: '해커톤행사 스케치영상',
        text: '3일간 진행된 해커톤 행사의 스케치영상을 제작했습니다.',
        imgsrc: 'img/video01.png',
        a: 'https://youtu.be/dgq8yacVRXI',
    },
    {
        category: '영상',
        subTitle: '마을기업 다큐멘터리',
        text: '마을기업에 대한 이야기를 다큐멘터리로 제작했습니다.',
        imgsrc: 'img/video02.png',
        a: 'https://youtu.be/cATBJ2AIZKc',
    },
    {
        category: '영상',
        subTitle: '음악회 스케치영상',
        text: '세계여행을 컨셉으로 진행된 음악회의 스케치영상을 제작했습니다.',
        imgsrc: 'img/video03.png',
        a: 'https://youtu.be/gYgi7DHwAG4',
    },
    {
        category: '디자인',
        subTitle: '생중계용 레이아웃 디자인',
        text: '디스플레이 미래기술 포럼이라는 주제로 진행된 온오프라인 행사의 생중계용 레이아웃을 제작했습니다.',
        imgsrc: 'img/design01.png',
    },
    {
        category: '디자인',
        subTitle: '캐릭터 디자인',
        text: '캐릭터 컨셉을 기획하고 디자인하여 컵을 제작했습니다.',
        imgsrc: 'img/character.png',
        a: 'https://blog.naver.com/elroi_official/223958736231',
    },
];

let card = '';

proj4List.forEach((item) => {
    card += `
              <li>
              <a href="${item.a}" target="_blank">
              <div></div>
                <h4>${item.category}</h4>
                <img src="${item.imgsrc}">
                </a>
              </li>
  `;
});
proj4ListBoard.innerHTML = card;

let proj4ListAll = document.querySelectorAll('#proj4ListBoard li');
let proj4Listbg = document.querySelectorAll('#proj4ListBoard li div');
let proj4ListText = document.querySelectorAll('#proj4ListBoard li h4');
let totalCards = proj4ListAll.length;

// console.log(proj4ListAll);
proj4ListAll.forEach((item, index) => {
    item.style.zIndex = totalCards - index;
    item.addEventListener('mouseenter', () => {
        proj4SubT.textContent = `${proj4List[index].subTitle}`;
        proj4Text.textContent = `${proj4List[index].text}`;
        item.style.transform =
            'perspective(800px) rotateY(-30deg) translateY(-100px)';
        proj4Listbg[index].style.backgroundColor = 'rgba(0,0,0,0)';
        proj4ListText[index].style.opacity = '0';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform =
            'perspective(800px) rotateY(-30deg) translateY(0px)';
        proj4Listbg.forEach((bg) => {
            bg.style.backgroundColor = 'rgba(0,0,0,0.5)';
        });
        proj4ListText.forEach((text) => {
            text.style.opacity = '1';
        });
    });
});

gsap.to('#proj4ListBoard', {
    x: '-1500px',
    scrollTrigger: {
        trigger: '.proj4',
        start: 'top top',
        end: '+200%',
        scrub: 3,
        pin: true,
    },
});

const cursor01 = document.querySelector('.cursor01');
const cursor02 = document.querySelector('.cursor02');
const cursor03 = document.querySelector('.cursor03');
const cursor04 = document.querySelector('.cursor04');
const allCursors = [cursor01, cursor02, cursor03, cursor04];

document.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX - 15;
    let mouseY = e.clientY - 15;
    let activeCursor = null;

    if (
        e.target.closest('header') ||
        e.target.closest('.introtitle') ||
        e.target.closest('.intro00') ||
        e.target.closest('.intro') ||
        e.target.closest('.skill')
    ) {
        activeCursor = cursor01;
    } else if (
        e.target.closest('.proj1') ||
        e.target.closest('.proj2') ||
        e.target.closest('.proj3')
    ) {
        activeCursor = cursor02;
    } else if (e.target.closest('.proj4')) {
        activeCursor = cursor03;
    } else if (e.target.closest('.outro') || e.target.closest('footer')) {
        activeCursor = cursor04;
    }

    allCursors.forEach((cursor) => {
        if (cursor) cursor.style.display = 'none';
    });

    if (activeCursor) {
        activeCursor.style.display = 'block';
        activeCursor.style.left = mouseX + 'px';
        activeCursor.style.top = mouseY + 'px';
    }
});

let bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble) => {
    randomX = Math.random() * 100;
    randomY = Math.random() * 100;
    randomScale = Math.random();
    bubble.style.left = `${randomX}%`;
    bubble.style.top = `${randomY}%`;
});
