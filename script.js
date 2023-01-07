// Selecting DOM Elements
const shareBtn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Clear static DOM Elements
factsList.innerHTML = '';

// Load data from Supabase
async function loadFacts() {
    const res = await fetch('https://qjfjaexrrhqrlhpqsaeh.supabase.co/rest/v1/facts', {
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmphZXhycmhxcmxocHFzYWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMTA4OTksImV4cCI6MTk4ODU4Njg5OX0.DEM3VnXr-G4GLyg-wd2pveZyRFBcKzj-RhjCV0OvpvI',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZmphZXhycmhxcmxocHFzYWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwMTA4OTksImV4cCI6MTk4ODU4Njg5OX0.DEM3VnXr-G4GLyg-wd2pveZyRFBcKzj-RhjCV0OvpvI'
        }
    });
    
    const data = await res.json();
    createFactsList(data);
}
loadFacts();

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