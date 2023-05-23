let user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
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
    coverPhotoURL: 'assets/billgates-cover.jpeg',
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
let users = [user1, user2];
let outerContainer = document.getElementById('outer-container');
let headerContainer = document.getElementById('header-container');
let photoContainer = document.getElementById('photo-container');
let profileContainer = document.getElementById('profile-container');
let tabsContainer = document.getElementById('tabs-container');
let tweetsContainer = document.getElementById('tweets-container');

function user1() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user1");
    window.location.href = "https://christianpaterson.github.io/Dynamic-Twitter-Clone/?" + urlParams.toString();
};

function user2() {
    var urlParams = new URLSearchParams();
    urlParams.set("user", "user2");
    window.location.href = "https://christianpaterson.github.io/Dynamic-Twitter-Clone/?" + urlParams.toString();
};

if(urlParams.toLocaleString() == "user=user1"){
    userInt = 0;
} else {
    userInt = 1;
};


headerContainer.innerHTML = `
    <div class="left-arrow">
        <a href="#"><img src="assets/arrow-left.png"/></a>
    </div>
    <div class="top-user">
        <p class="display-name">${users[userInt].displayName}
            <span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-check-circle fa-stack-2x"></i>
            </span> 
        </p>
        <p id="no-of-tweets">${users[userInt].tweets.length} Tweets</p>
    </div>
`;