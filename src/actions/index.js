import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => console.log("Sign Out"))
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function postArticleAPI(payload) {
  return () => {
    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}`);
          if (snapshot.state === "RUNNING") {
            console.log(progress);
          }
        },
        (error) => console.log(error),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              email: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: "",
            sharedImg: downloadURL,
            likes: 0,
            description: payload.description,
          });
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          email: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        likes: 0,
        description: payload.description,
      });
    }
  };
}
