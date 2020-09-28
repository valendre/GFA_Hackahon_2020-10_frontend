import React from 'react';
import useLogin from '../hooks/useLogin';

export default () => {
    const [ username, setUsername, setPassword, error, submitLogin ] = useLogin();

    return (
        <>
            <div className="small-form">
                <h2>Login</h2>
                <form onSubmit={event => submitLogin(event)}>
                    <input
                        name="username"
                        placeholder="Username"
                        type="text"
                        defaultValue={username}
                        onChange={event => {
                            setUsername(event.target.value);
                        }}
                    />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                    />
                    {error ? <p className="error-message">{error}</p> : null}
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </>
    );
}