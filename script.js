const content = document.getElementById('content');

const data = {
    newBands: [
        "Covenant of Ashes",
        "Serpent of the West",
        "Ald Weald",
        "Kallgrift",
        "Deorum Inferus",
        "Tristyn",
        "Edge of Dystopia",
        "Menacer",
        "Full Armor",
        "Adirtu"
    ],
    newLabels: [
        "Ceremonial Rot Prods.",
        "Anchor Lights",
        "Sound of Pagan",
        "Productions",
        "Forlorn Majesty Records",
        "Rattenkönig Productions",
        "Burnt Seed Records",
        "Kusikellari Sound",
        "Flag Records",
        "All Pressing Records",
        "Evernight Records"
    ],
    newArtists: [
        "Necroflux",
        "Alecao",
        "Kaarvaz",
        "Dave Tattum",
        "Henu Kuhlman",
        "D.",
        "William Camilo Ruiz",
        "Luiz",
        "Kuru",
        "Ulv Sveneld"
    ]
};

function contentList(items) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    content.appendChild(ul);
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const key = link.getAttribute('data-tab');

        document.querySelectorAll('.menu a').forEach(l => {
            l.classList.remove('active');
        });

        link.classList.add('active');

        if (!data[key]) return;

        contentList(data[key]);
    });
});

contentList(data.newBands);

