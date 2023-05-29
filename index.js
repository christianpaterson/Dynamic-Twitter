let urlParams = new URLSearchParams(window.location.search);

// declare variables
let userInt = 0;
const users = [user1, user2];
const outerContainer = document.getElementById('outer-container');
const headerContainer = document.getElementById('header-container');
const photoContainer = document.getElementById('photo-container');
const profileContainer = document.getElementById('profile-container');
const tabsContainer = document.getElementById('tabs-container');
const tweetsContainer = document.getElementById('tweets-container');

headerContainer.innerHTML = `
        <div class="arrow">
            <img src="assets/arrow.png"/>
        </div>
        <div class="user-content">
            <p class="name">${users[userInt].displayName}</p>
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
            <button>Follow</button>
    </div>
`;

profileContainer.innerHTML = `
    <div class="name">
        <p>${users[userInt].displayName}</p>
    </div>
    <div class="light-gray">
        <p>${users[userInt].userName}</p>
    </div>
    <div class="join-date light-gray">
        <p>Joined ${users[userInt].joinedDate}</p>
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

let tabs = tabsContainer.getElementsByClassName("tab");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
};

for (let i = 0; i < users[userInt].tweets.length; i++) {
    let tweet = users[userInt].tweets[i];
    let tweetValues = Object.values(tweet);
    let tweetCreated = tweetValues[1];

    // to dislpay month + date instead of full timestamp
    let arr = tweetCreated.split('/');
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let displayMonth =  parseInt(arr[1],10) - 1;

    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet-div");
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"><img src="${users[userInt].avatarURL}"/></div>
        <div class="tweet-inner-container">
            <div class="tweet-details">
                <div class="small-bold">${users[userInt].displayName}</div>
                <div class="tweet-detail light-gray">${users[userInt].userName}</div>
                <p class="tweet-detail light-gray">·</p>
                <div class="tweet-detail light-gray">${months[displayMonth] +" "+ arr[0]}</div>
            </div>
            <div class="tweet-body">
                <p>${tweetValues[0]}</p>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
}