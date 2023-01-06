const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "society",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];

// Selecting DOM Elements
const shareBtn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM Elements
factsList.innerHTML = '';
// DO the FACTS
createFactsList(initialFacts);

function createFactsList(dataArr) {
    // Generate HTML from data
    const htmlArr = dataArr.map(fact => {
        let color;
        switch (fact.category) {
            case 'technology':
                color = '#3b82f6';
                break;
            case 'science':
                color = '#16a34a';
                break;
            case 'finance':
                color = '#ef4444';
                break;
            case 'society':
                color = '#eab308';
                break;
            case 'entertainment':
                color = '#db2777';
                break;
            case 'health':
                color = '#14b8a6';
                break;
            case 'history':
                color = '#f97316';
                break;
            case 'news':
                color = '#8b5cf6';
                break;
            default:
                color = '#000000';
        }

        return `<li class="fact">
            <p>
                ${fact.text}
                <a class="source" href="${fact.source}" target="_blank">(Source)</a>
            </p>

            <span class="tag" style="background-color: ${color}">${fact.category}</span>

            <div class="vote-buttons">
                <button>👍 ${fact.votesInteresting}</button>
                <button>🤯 ${fact.votesMindblowing}</button>
                <button>⛔️ ${fact.votesFalse}</button>
            </div>
        </li>`;
    });

    // Insert HTML
    htmlArr.forEach(el => factsList.insertAdjacentHTML('afterbegin', el));
}

// Toggle form visibility
shareBtn.addEventListener('click', function(e) {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        shareBtn.textContent = 'Close';
    } else {
        form.classList.add('hidden');
        shareBtn.textContent = 'Share a fact';
    }
});