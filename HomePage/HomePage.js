import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="col-md-12">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & Basic HTTP Authentication!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.length &&
                    <ul>
                        {users.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>

                <div class="container">
          <div class="card">
            <h3 class="title">Card 1</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
          </div>
          <div class="card">
            <h3 class="title">Card 2</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle class="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
          </div>
          
        </div>
            </div>
            
        );
    }
}

export { HomePage };