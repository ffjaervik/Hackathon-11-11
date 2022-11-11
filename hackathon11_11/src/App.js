import Layout from "./components/Layout";

function App() {
    const mockPost = [
        {
            title: "How to make a function",
            text: "loren ipsium",
            files: [
                "blob:http://localhost:3000/73b12e76-c828-42b0-9007-75336cbccf90",
            ],
            // comments: [],
        },
        {
            title: "How to declare a variable",
            text: "ez pz lemon sqeezy",
            files: [
                "blob:http://localhost:3000/73b12e76-c828-42b0-9007-75336cbccf90",
            ],
        },
    ];

    localStorage.setItem("posts", JSON.stringify(mockPost));

    return <Layout />;
}

export default App;
