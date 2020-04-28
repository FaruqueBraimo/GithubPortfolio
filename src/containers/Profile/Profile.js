import React, { Component } from "react";
import List from "../../components/List/List";
import styled from "styled-components";
import Link from "../../components/Link/Link";

const ProfileWrapper = styled.div `
width: 50%;
margin: 10px auto;

`  ;

const Avatar = styled.img `
width: 150px;

`

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repositories: [],
      loading: true,
    };
  }
  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/faruquebraimo");
    const profileJSON = await profile.json();
    if (profileJSON) {
      const repositories = await fetch(profileJSON.repos_url);
      const repositoriesJSON = await repositories.json();
      this.setState({
        data: profileJSON,
        repositories: repositoriesJSON,
        loading: false,
      });
    }
  }
  render() {
    const { data, loading, repositories } = this.state;
    const items = [
        { label: 'html_url', value :  <Link url={data.html_url} title='Github URL' /> },
         { label: 'name', value: data.name},
         { label: 'company', value: data.company },
         { label: 'location', value: data.location },
         { label: 'email', value: data.email },
        { label: 'bio', value: data.bio } ];

        const repos = repositories.map(repo => ({
          label : repo.name,
          value : <Link url={repo.html_url} title='Github URL' />
        }))

    if (loading) {
      return <div>Loading data</div>;
    }
    return (
      <div>
        <ProfileWrapper className="Profile-container">
          <Avatar className="Profile-avatar" src={data.avatar_url} alt="avatar" />
              <List items = {items} title = 'Public Profile'></List>
              <List items = {repos} title = 'Public Repositories' ></List>
        </ProfileWrapper>
      </div>
    );
  }
}
export default Profile;
