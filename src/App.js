import React from "react";
import './styles/App.css';
import GithubProfilePanel from "./GithubProfilePanel"
// import Game from "./Game"
import './styles/Game.css'
import getGithubProfile from './GithubProfileApi'

let PLACEHOLDER_PROFILE = JSON.parse('{\n' +
    '  "login": "crystaldust",\n' +
    '  "id": 2040659,\n' +
    '  "node_id": "MDQ6VXNlcjIwNDA2NTk=",\n' +
    '  "avatar_url": "https://avatars.githubusercontent.com/u/2040659?v=4",\n' +
    '  "gravatar_id": "",\n' +
    '  "url": "https://api.github.com/users/crystaldust",\n' +
    '  "html_url": "https://github.com/crystaldust",\n' +
    '  "followers_url": "https://api.github.com/users/crystaldust/followers",\n' +
    '  "following_url": "https://api.github.com/users/crystaldust/following{/other_user}",\n' +
    '  "gists_url": "https://api.github.com/users/crystaldust/gists{/gist_id}",\n' +
    '  "starred_url": "https://api.github.com/users/crystaldust/starred{/owner}{/repo}",\n' +
    '  "subscriptions_url": "https://api.github.com/users/crystaldust/subscriptions",\n' +
    '  "organizations_url": "https://api.github.com/users/crystaldust/orgs",\n' +
    '  "repos_url": "https://api.github.com/users/crystaldust/repos",\n' +
    '  "events_url": "https://api.github.com/users/crystaldust/events{/privacy}",\n' +
    '  "received_events_url": "https://api.github.com/users/crystaldust/received_events",\n' +
    '  "type": "User",\n' +
    '  "site_admin": false,\n' +
    '  "name": "Zhen Ju",\n' +
    '  "company": "Huawei",\n' +
    '  "blog": "",\n' +
    '  "location": "Beijing, China",\n' +
    '  "email": null,\n' +
    '  "hireable": null,\n' +
    '  "bio": "NodeJS/Golang/Python/now Rust Developer, he/him. Interested in all kinds of computer technologies.",\n' +
    '  "twitter_username": "juzhenatpku",\n' +
    '  "public_repos": 145,\n' +
    '  "public_gists": 0,\n' +
    '  "followers": 32,\n' +
    '  "following": 23,\n' +
    '  "created_at": "2012-07-25T13:51:16Z",\n' +
    '  "updated_at": "2022-02-28T13:16:56Z"\n' +
    '}')

getGithubProfile('crystaldust').then((json_result) => {

})

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <GithubProfilePanel profile={PLACEHOLDER_PROFILE} />
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//         <GithubProfilePanel />
//     </div>
//   );
// }

export default App;
