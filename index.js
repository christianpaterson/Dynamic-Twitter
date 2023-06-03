// URLParams for switching users
const urlParams = new URLSearchParams(window.location.search);


// Set default and selected userKey
let userKey;
if(urlParams.get("user") === null) {
    userKey = "user1";
} else {
    userKey = urlParams.get("user");
}


// Change user function
function changeUser(userKey) {
    urlParams.set("user", userKey);
    window.location.href = "https://christianpaterson.github.io/Dynamic-Twitter-Clone/?" + urlParams.toString();
};


// Declare variables
const outerContainer = document.getElementById('outer-container');
const headerContainer = document.getElementById('header-container');
const photoContainer = document.getElementById('photo-container');
const profileContainer = document.getElementById('profile-container');
const tabsContainer = document.getElementById('tabs-container');
const tweetsContainer = document.getElementById('tweets-container');
const switchUserContainer = document.getElementById('switch-user-container');


headerContainer.innerHTML = `
        <div class="arrow">
            <img src="assets/arrow.png"/>
        </div>
        <div class="user-content">
            <p class="name">${users[userKey].displayName} <span>✔</span></p>
            <p id="tweet-count" class="light-gray">${users[userKey].tweets.length} Tweets</p>
        </div>
`;


photoContainer.innerHTML = `
    <div>
        <img src="${users[userKey].coverPhotoURL}" width="100%"/>
    </div>
    <div class="avatar-follow">
        <div class="avatar-img">
            <img src="${users[userKey].avatarURL}"/>
        </div>
            <button id="follow-button">Following</button>
    </div>
`;


profileContainer.innerHTML = `
    <div>
        <p class="name">${users[userKey].displayName} <span>✔</span></p>
    </div>
    <div class="light-gray">
        <p>${users[userKey].userName}</p>
    </div>
    <div class="join-date light-gray">
        <p>🗓 Joined ${users[userKey].joinedDate}</p>
    </div>
    <div class="follow-container">
        <div>
            <span class="small-bold">${users[userKey].followingCount}</span>
            <span class="light-gray"> Following</span>
        </div>
        <div class="followers">
            <span class="small-bold">${users[userKey].followerCount/1000000}M</span>
            <span class="light-gray"> Followers</span>
        </div>
    </div>
`;


tabsContainer.innerHTML = `
    <div class="tab light-gray active">
        <p>Tweets</p>
    </div>
    <div class="tab light-gray">
        <p>Replies</p>
    </div>
    <div class="tab light-gray">
        <p>Media</p>
    </div>
    <div class="tab light-gray">
        <p>Likes</p>
    </div>
`


// Event listener for showing active tab
const tabs = tabsContainer.getElementsByClassName("tab");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        const active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
};


// For each tweet...
for (let i = 0; i < users[userKey].tweets.length; i++) {

    // Get tweet content and timestamp
    let tweet = users[userKey].tweets[i];
    let tweetValuesArray = Object.values(tweet);
    let tweetContent = tweetValuesArray[0];
    let tweetTimestamp = tweetValuesArray[1];

    // Format the timestamp
    let tweetDate = formatDate(tweetTimestamp);

    // Create, fill, and append tweet content
    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet-div");
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"><img src="${users[userKey].avatarURL}"/></div>
        <div class="tweets-inner-container">
            <div class="tweets">
                <div class="small-bold">${users[userKey].displayName} <span>✔</span></div>
                <div class="tweet light-gray">${users[userKey].userName}</div>
                <p class="tweet light-gray">·</p>
                <div class="tweet light-gray">${tweetDate}</div>
            </div>
            <div class="tweet-body">
                <p>${tweetContent}</p>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
}


// Format date function
function formatDate(time) {
    let array = time.split('/');
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let monthNumber = parseInt(array[0]);
    let displayDay = array[1];
    return months[monthNumber] + " " + displayDay;
}


// Container for switching users buttons
switchUserContainer.innerHTML = `
    <div class="switch-users">
        <div class="switch">
            <button id="user-1-button">User1</button>
        </div>
        <div class="switch">
            <button id="user-2-button">User2</button>
        </div>
    </div>

`


// Event listeners to switch users
let switchTo1 = document.getElementById('user-1-button');
switchTo1.addEventListener('click', function() {
    changeUser(userKey);
});

let switchTo2 = document.getElementById('user-2-button');
switchTo2.addEventListener('click', function() {
    changeUser(userKey);
});