//URLParams for switching users
let urlParams = new URLSearchParams(window.location.search);
let userInt = 0;

function changeToUser1() {
    let urlParams = new URLSearchParams();
    urlParams.set("user", "user1");
    window.location.href = "https://christianpaterson.github.io/Dynamic-Twitter-Clone/?" + urlParams.toString();
};

function changeToUser2() {
    let urlParams = new URLSearchParams();
    urlParams.set("user", "user2");
    window.location.href = "https://christianpaterson.github.io/Dynamic-Twitter-Clone/?" + urlParams.toString();
};

if(urlParams.toLocaleString() == "user=user2") {
    userInt = 1;
} else {
    userInt = 0;
};


// Declare variables
const users = [user1, user2];
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
            <p class="name">${users[userInt].displayName} <span>✔</span></p>
            <p id="tweet-count" class="light-gray">${users[userInt].tweets.length} Tweets</p>
        </div>
`;


photoContainer.innerHTML = `
    <div>
        <img src="${users[userInt].coverPhotoURL}" width="100%"/>
    </div>
    <div class="avatar-follow">
        <div class="avatar-img">
            <img src="${users[userInt].avatarURL}"/>
        </div>
            <button id="follow-button">Following</button>
    </div>
`;


profileContainer.innerHTML = `
    <div>
        <p class="name">${users[userInt].displayName} <span>✔</span></p>
    </div>
    <div class="light-gray">
        <p>${users[userInt].userName}</p>
    </div>
    <div class="join-date light-gray">
        <p>🗓 Joined ${users[userInt].joinedDate}</p>
    </div>
    <div class="follow-container">
        <div>
            <span class="small-bold">${users[userInt].followingCount}</span>
            <span class="light-gray"> Following</span>
        </div>
        <div class="followers">
            <span class="small-bold">${users[userInt].followerCount/1000000}M</span>
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
let tabs = tabsContainer.getElementsByClassName("tab");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
};


// Create, fill, and append tweetDiv for each tweet
for (let i = 0; i < users[userInt].tweets.length; i++) {
    let tweet = users[userInt].tweets[i];
    let tweetValues = Object.values(tweet);
    let tweetCreated = tweetValues[1];

    // Dislpay month & day instead of full timestamp
    let arr = tweetCreated.split('/');
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let displayMonth =  parseInt(arr[1],10) - 1;

    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet-div");
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"><img src="${users[userInt].avatarURL}"/></div>
        <div class="tweets-inner-container">
            <div class="tweets">
                <div class="small-bold">${users[userInt].displayName} <span>✔</span></div>
                <div class="tweet light-gray">${users[userInt].userName}</div>
                <p class="tweet light-gray">·</p>
                <div class="tweet light-gray">${months[displayMonth] +" "+ arr[0]}</div>
            </div>
            <div class="tweet-body">
                <p>${tweetValues[0]}</p>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
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
switchTo1.addEventListener('click', changeToUser1);

let switchTo2 = document.getElementById('user-2-button');
switchTo2.addEventListener('click', changeToUser2);