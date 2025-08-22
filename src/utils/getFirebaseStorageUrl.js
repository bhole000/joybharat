import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export async function getFirebaseStorageUrl(file, name) {
  if (!file) {
    alert("Please choose a file first!");
  }
  const storageRef = ref(storage, name);
  const response = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(response.ref);
  return url;
}
