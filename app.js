// 1. העתק כאן את ה-config שלך מ-Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDqOSKss7GnqMsWq6Ao34eAhnHgW3vV4gU",
  authDomain: "carlog-fdc93.firebaseapp.com",
  projectId: "carlog-fdc93",
  storageBucket: "carlog-fdc93.firebasestorage.app",
  messagingSenderId: "464114273092",
  appId: "1:464114273092:web:9b1df574e41b63c2912511"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 2. קומפוננטת Login בסיסית
function Login() {
  const signIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return React.createElement(
    "button",
    { onClick: signIn },
    "Sign in with Google"
  );
}

// 3. קומפוננטת App ראשית
function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged(u => setUser(u));
  }, []);
  if (!user) {
    return React.createElement(Login);
  }
  return React.createElement(
    "div",
    null,
    \`Hello \${user.displayName}! CarLog יהיה פה בקרוב…\`
  );
}

// 4. רנדר
ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
