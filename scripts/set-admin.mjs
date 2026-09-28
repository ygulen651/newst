// Usage: node scripts/set-admin.mjs <email> [--remove]
// The user must already exist (Firebase Console → Authentication → Add user).
import { getAuth } from "firebase-admin/auth";
import { app } from "./firebase-admin-app.mjs";

const [email, flag] = process.argv.slice(2);
if (!email) {
  console.error("Kullanım: node scripts/set-admin.mjs <email> [--remove]");
  process.exit(1);
}

const auth = getAuth(app);
const isAdmin = flag !== "--remove";

try {
  const user = await auth.getUserByEmail(email);
  await auth.setCustomUserClaims(user.uid, { ...user.customClaims, admin: isAdmin });
  // Force existing sessions to pick up the new claim.
  await auth.revokeRefreshTokens(user.uid);
  console.log(`${email} için admin yetkisi ${isAdmin ? "verildi" : "kaldırıldı"}.`);
} catch (err) {
  if (err.code === "auth/user-not-found") {
    console.error(`${email} bulunamadı. Önce Firebase Console → Authentication → Add user ile oluşturun.`);
  } else {
    console.error("Hata:", err.message);
  }
  process.exit(1);
}
