import React, { Component } from "react";
import axios from "axios";
import { Container, Grid, Segment, Button, Form,Message,Icon, Input } from "semantic-ui-react";
import { Login } from "../../utils/auth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUrl } from "../../constants";
import { LOGIN } from "../../actions/User";
import { DOASTER_SUCCESS,DOASTER_ERROR } from "../../actions/Toaster";
import { toast } from 'react-toastify';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
    };
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleLoginSumbit = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    const reqBody = { email, password };
    axios.post(LoginUrl, reqBody).then(
      response => {
        this.setState({ success: response }, ( () => {
          this.userLogin(response.data["auth-token"]);
          login(response.data);
          this.props.doasterSuccess(response.data.message);
        })
        );
      },
      error => {
        let errMessage = error.response.data;
        this.setState({ error: errMessage },(()=>this.props.doasterError(errMessage.message)));
      }
    );
  };
  userLogin = token => {
    Login(token);
  };
  render() {
    const { email, password, error } = this.state;
    const isSubmitDisable = email === "" || password === "";
    const { formateError, message, passwordError } = error;

    return (
      <React.Fragment>
        <main className="main">
          <Container>
            <Grid columns={3} centered>
              <Grid.Column>
                <Segment>
                  <Form noValidate autoComplete="off">
                    <Form.Field>
                    <Input iconPosition="left" placeholder='Email'>
                      <input
                        name="email"
                        value={email}
                        onChange={this.handleOnChange}
                      />
                      <Icon name="at" />
                      </Input>

                    </Form.Field>
                    <Form.Field>
                      <Input iconPosition="left" placeholder='Email'>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleOnChange}
                      />
                      <Icon name="keyboard outline" />
                      </Input>
                    </Form.Field>
                    <Form.Field>
                      <Button
                        disabled={isSubmitDisable}
                        onClick={this.handleLoginSumbit}
                        type="button" size="small"
                      >
                        Login
                      </Button>
                    </Form.Field>

                    {formateError && <Message color="red">{message}</Message>}
                    {passwordError && <Message compact negative>{message}</Message>}
                    <div>
                      <Link to="/signup">Register as a new user</Link>
                    </div>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.Counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(LOGIN(data)),
    doasterSuccess : msg => dispatch(DOASTER_SUCCESS(msg)),
    doasterError : msg => dispatch(DOASTER_ERROR(msg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
