let user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

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
    <div class="top-user">
        <p class="name">${users[userInt].displayName}</p>
        <p id="tweet-count">${users[userInt].tweets.length} Tweets</p>
    </div>
`;

photoContainer.innerHTML = `
    <div class="cover-img">
        <img src="${users[userInt].coverPhotoURL}" width="100%"/>
    </div>
    <div class="avatar-img">
        <img src="${users[userInt].avatarURL}"/>
    </div>
`;

profileContainer.innerHTML = `

    <div class="profile-info">
        <p class="display-name">${users[userInt].displayName}</p>
    </div>
    <div class="user-name">
        <p>${users[userInt].userName}</p>
    </div>
    <div class="join-date">
        <p>Joined ${users[userInt].joinedDate}</p>
    </div>
    <div class="following">
        <p class="following-p"><a href="#">${users[userInt].followingCount}</a> Following<p>
    </div>
    <div class="followers">
        <p class="followers-p"><a href="#">${users[userInt].followerCount}</a> Followers<p>
    </div>
`;