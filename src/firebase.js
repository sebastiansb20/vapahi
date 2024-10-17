import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './environment/firebaseConfig';  // Importa la configuración
import { getStorage } from 'firebase/storage'; 
// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);
const storage = getStorage(app);
export { db , storage};