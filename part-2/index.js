const App = () => (
    <div>
        <Tweet username="user1" name="Aaron" date="5/14/23" message="First tweet!" />
        <Tweet username="user2" name="Beth" date="5/29/23" message="Let me tell you about it (1/4)" />
        <Tweet username="user1" name="Aaron" date="5/17/23" message="Oh look at us go!" />
        <Tweet username="jake" name="Jacob" date="5/17/23" message="Boo!" />
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);