import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createSite(data) {
  const site = firestore.collection('sites').doc();
  site.set(data);

  return site;
}

export async function updateSite(id, newValues) {
  return firestore.collection('sites').doc(id).update(newValues);
}

export async function deleteSite(id) {
  firestore.collection('sites').doc(id).delete();
  const snapshot = await firestore
    .collection('feedback')
    .where('siteId', '==', id)
    .get();

  const batch = firestore.batch();

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  return batch.commit();
}

export function createFeedback(data) {
  const feedback = firestore.collection('feedback').doc();
  feedback.set(data);

  return feedback;
}

export function updateFeedback(id, newValues) {
  return firestore.collection('feedback').doc(id).update(newValues);
}

export function deleteFeedback(id) {
  return firestore.collection('feedback').doc(id).delete();
}
